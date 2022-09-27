import React from 'react'
import { Cart } from '../cart/Cart';
import './Favourite.css';

export const Favourite = () => {
  const addedProduct=JSON.parse(localStorage.getItem('wishlist'));
  console.log(addedProduct);
  return (
    <div>
      <h1>Your Added Favorites Items
      </h1>
      <div className="grid">
      {
        addedProduct.map((item)=>(
          <div key={item.Id} className="grid1">
            <Cart item={item}/>
          </div>
        ))
      }
    </div>
    </div>
    
  )
}
