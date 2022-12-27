import React from 'react'
import itemsShop from "../../assets/data/Items"


 const CardsItems = () => {
    return (

        <div>
  {itemsShop.map((item
      
    )=> {
         return( 
            <div>
                
                <p>{item.product}</p>
                
            </div>
        )
    }) 

 }

        </div>

     ) 
    
    

}

  export default CardsItems

