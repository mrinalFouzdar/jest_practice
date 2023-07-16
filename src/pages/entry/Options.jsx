import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ScoopOption from './ScoopOption'
import { Row } from 'react-bootstrap'
import ToppingOption from './ToppingOption'
import AlertBanner from '../common/AlertBanner'
import {pricePerItem} from '../../constants/index'
import { formatCurrency } from '../../utilities'
import { useOrderDetails } from '../../contexts/OrderDetails'



const Options = ({optionType}) => {
    const [items, setItems]= useState([])
    const [error, setError] = useState(false)
    const {totals} = useOrderDetails();
    
    // optionType is 'scoops' or 'topping'
    useEffect(()=>{
        axios.get(`http://localhost:3030/${optionType}`)
        .then(res=>{
            setItems(res.data)
        })
        .catch(err=>{
            setError(true)
            // console.log("errIcreamdata",err)
        })
    },[optionType])

    if(error){
      return <AlertBanner/>
    }

    // TODO: replace `null` with ToppingOption when available
    const ItemComponent = optionType ==='scoops' ? ScoopOption : ToppingOption;
    const title = optionType[0].toUpperCase()+optionType.slice(1).toLowerCase()
    const optionItems = items.map(item =>(
        <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
        />
    ))
    
  return (
    <>
    <h2>{title}</h2>
    <p>{formatCurrency(pricePerItem[optionType])} each</p>
    <p>{title} total: {formatCurrency(totals[optionType])}</p>
    <Row>
      {optionItems}
    </Row>
    
    </>
  )
}

export default Options
