import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Shop.css'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';





const Shop = () => {
    const [count, setCount] = useState([
        { itemCount: 1, id: 1,  value: 0 },
        { itemCount: 2, id: 2,  value: 0 },
        { itemCount: 3, id: 3,  value: 0 },
        { itemCount: 4, id: 4,  value: 0 },
        { itemCount: 5, id: 5,  value: 0 },
        { itemCount: 6, id: 6,  value: 0 },
        { itemCount: 7, id: 7,  value: 0 }


    ]);
    const [showCollection, setShowCollection] = useState(true)
    const [showPrice, setShowPrice] = useState(true)
    const [products, setProducts] = useState(null);
    const options = [
        'one', 'two', 'three','four',
      ];

    const Itemincrease = (itemCount) =>  {
        setCount(count.map((countitem)=>{
            return countitem.itemCount === itemCount 
            ? {
                ...countitem,
                value: countitem.value + 1,

            }  : countitem;
        })
        )
    }

    // const Itemincrease = () => {

    //     console.log("click")
    // }
    useEffect(() => {
        fetch("http://localhost:3001/items")
            .then(res => {
              return res.json()
            })
            .then(data => {
              setProducts(data)
            })
      }, []);

        const handleOnCLickCollection = () => {
            setShowCollection(!showCollection)
            console.log('click')
        }

        const handleOnClickPrice = () => {
            setShowPrice(!showPrice)
        }

      if (!products) {
        return  <div></div>

        } 
        else 
    return ( 
<div className="shop-container">
        <div className="shop-title">
            <h4>Shop</h4>
            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
        </div>
        <div className="shop-elements">
            <div className="filter-container">
                <div className="nav-title">
                <h4>Filter by</h4>
            </div>
              <div className="shops-nav">
                  <button onClick={()=>handleOnCLickCollection()}> Collection <span>{showCollection ? '-' : '+'}</span></button>
                  { showCollection ?
                    <ul>
                        <NavLink>All</NavLink>
                        <NavLink>Produce</NavLink>
                        <NavLink>Dairy & Eggs</NavLink>
                        <NavLink>Bread & Grains</NavLink>
                        <NavLink>Household Goods</NavLink>
                    </ul> : ''
                           }
                    </div>  
                <div className="input-range">
                    <button onClick={handleOnClickPrice} >Price<span>{showPrice ? '-' : '+'}</span></button>
                    { 
                    showPrice ? <Form.Range /> : ''
                      }
                </div>
        </div> 
                <div className="dropdown">
                <Dropdown className="dropdown-button" options={options} placeholder="Sort by" />
                    <div className="items" >
                        {products.map((item) => {
                            return (
                    <div className="item" key={item.id}>
                        <img src={item.imageUrl} alt="img" width="150px" />
                        <h5>{item.product}</h5>
                        <p>{item.price}</p>
                        <p>Description</p>
                    <div className="input-field">
                        <button>-</button>
                        <input
                        type="text"
                        value={count.value}
                        onChange={(e) => setCount(e.target.value)}
                        />
                        <button onClick={Itemincrease} >+</button>
                    </div>
                        <button className='CartBtn'>Add to cart</button>
                    </div>
                        );
                    })}
                    <div className="page-changer">
                        <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                          <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1">Previous</a>
                          </li>
                          <li className="page-item"><a className="page-link" href="#">1</a></li>
                          <li className="page-item"><a className="page-link" href="#">2</a></li>
                          <li className="page-item"><a className="page-link" href="#">3</a></li>
                          <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                          </li>
                        </ul>
                      </nav>
                    </div>        
            </div>
          </div>          
        </div>
</div>
   )

}


export default Shop;