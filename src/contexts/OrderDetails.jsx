import { createContext, useContext, useState } from "react";
import { pricePerItem } from "../constants";

const OrderDetails = createContext();

// create custom hook to check whether we're in a provider

export function useOrderDetails(){
    const contextValue = useContext(OrderDetails)

    if(!contextValue){
        throw new Error(
            "useOrderDetails must be called from within an OrderDetailsProvider"
        )
    }

    return contextValue
}


export function OrderDetailsProvider(props){
    const [optionCounts,setOptionCounts] = useState({
        scoops:{}, //example: {Chocolate:1, Vanilla:2}
        toppings:{} // example: {"Gummi Bears": 1}
    })

    function updateItemCount(itemName, newItemCount, optionType){
        // make a copy of existing state
        const newOptionCounts ={...optionCounts};
        if(!newItemCount){
            newItemCount=0
        }
        // update teh copy with the new information
        newOptionCounts[optionType][itemName]=newItemCount

        setOptionCounts(newOptionCounts)
    }
    
    function resetOrder(){
        setOptionCounts({scoops:{}, toppings:{}})
    }

    // utility function to derive totals from optionCounts state value

    function calculateTotal(optionType){
        // get an array of counts for the option type(for example,[1,2])
        const countsArray = Object.values(optionCounts[optionType])
        // console.log(optionCounts[optionType])
        //total the values in the array of counts
        const totalCount = countsArray.reduce((total,value)=> total + value,0)
        // console.log({totalCount})
        // multiply the total number of items by the price ofr this item type
        return totalCount * pricePerItem[optionType]
    }

    const totals = {
        scoops: calculateTotal("scoops"),
        toppings:calculateTotal("toppings")
    }


    const value={optionCounts, totals,updateItemCount, resetOrder}
    return <OrderDetails.Provider value={value} {...props}/>
}