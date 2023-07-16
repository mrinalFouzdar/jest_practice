import React from 'react'
import SummaryForm from './SummaryForm'
import { useOrderDetails } from '../../contexts/OrderDetails'
// import { formatCurrency } from '../../../../udemy-react-testing-library-projects/finished-projects/sundaes-on-demand/src/utilities'
import { formatCurrency } from '../../utilities'
const OrderSummary = () => {
  const { totals , optionCounts} = useOrderDetails()
  const scoopArray = Object.entries(optionCounts.scoops);

  const scoopList = scoopArray.map(([key,value])=>(
    <li key={key}>
      {value} {key}
    </li>
  ))

  const toppingArray = Object.keys(optionCounts.toppings)
  const toppingList = toppingArray.map(key=> <li key={key}>{key}</li>)
  return (
    // <React.Fragment>
    // </React.Fragment>
    <div>
      <h1>OrderSummary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      {scoopList}
      <h2>Scoops:
         {formatCurrency(totals.toppings)}</h2>
         <ul>{toppingList}</ul>
      <SummaryForm/>
    </div>
  )
}

export default OrderSummary
