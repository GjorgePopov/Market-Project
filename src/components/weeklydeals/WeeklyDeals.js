import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./WeeklyDeals.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ShopsItems from "../../assets/data/Items";
import Card from 'react-bootstrap/Card';



// import required modules
import { Pagination, Navigation } from "swiper";

export default function WeeklyDeals () { 

 const [data, setData] = useState ([]) 

 const [number, setNumber] = useState (0)

 const add = () => {

  setNumber (
    prevNumber => prevNumber +1 
  )
 }

 const minus = () => {
  setNumber (
    prevNumber => {
      if ( prevNumber === 0) return prevNumber
      return prevNumber -1
    }
  )
 }
  
   

 

 return (
    <>

    <div className="deals">

        <h2>
          Weekly Deals
        </h2>
    </div>
  <div className="Paragraph">
    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
  </div>
    
   
    
      <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={false}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
              
              <div>
                {ShopsItems.map(item => (
                  
                  <SwiperSlide>
                    <div className="price">
                       <p className="Special">Special Price</p>
                    <Card.Img variant="top" src={item.image}/>
                    </div>
                   
                  
                    
                    <p className="product"> I'm a product</p>  
                    <p className="dolarprice">$9.99</p>

                    <div className="button">
                    
                      <button onClick={()=>minus()}>-</button>
                     <p>{number}</p>
                      <button className="btnadd" onClick={()=>add()}>+</button>
                    
                      
                    </div>
                    <div className="add">
                      <button>Add to Card </button>
                    </div>
                    
                     



                  </SwiperSlide>
                  

                ))}
              </div>
              
           
      </Swiper>

   
     
        
      
     
    

      

    </>
    
 );
}
           

        

        
     
{/*const [counters, setCounters] = useState([
  { counterNumber: 1, value: 0 },
  { counterNumber: 2, value: 0 },
  { counterNumber: 3, value: 0 }
]);

const handleIncrease = (counterNumber) => {
  console.log(counters)
  setCounters(
    counters.map((counter) => {
      // spread array { ...counter, value: changes }
      return counter.counterNumber === counterNumber
        ? {
            ...counter,
            value: counter.value + 1
          }
        : counter;
    })
  );
}; */}
      
    
 

 {/*{ShopsItems.map((item )=> {
                  return( 
                    <div>
                                        
                        <SwiperSlide>
                             <p>Special Price</p>
                             <Card.Img variant="top" src={item.image}/>
                              <p> I'm a product</p>  
                              <p>$9.99</p>

                              <div>
                                <button>-</button>
                                <input></input>
                                <button>+</button>
                              </div>
                                <button>Add to Card</button>

                                  
                                  
                                              
                                              
                        </SwiperSlide> 

                                      




                    </div>

                )
              }) 
                  
          }*/}      
 

  
 


