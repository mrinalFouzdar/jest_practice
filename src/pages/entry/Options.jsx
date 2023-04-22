import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ScoopOption from './ScoopOption'
import { Row } from 'react-bootstrap'

const Options = ({optionType}) => {
    const [items, setItems]= useState([])
    // optionType is 'scoops' or 'topping'
    useEffect(()=>{
        axios.get(`http://localhost:3030/${optionType}`)
        .then(res=>{
            setItems(res.data)
        })
        .catch(err=>{
            // TODO: handle error response
            // console.log("errIcreamdata",err)
        })
    },[optionType])


    // TODO: replace `null` with ToppingOption when available
    const ItemComponent = optionType ='scoops' ? ScoopOption : null

    const optionItems = items.map(item =>(
        <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
        />
    ))
    
  return (
    <Row>
      {optionItems}
    </Row>
  )
}

export default Options
