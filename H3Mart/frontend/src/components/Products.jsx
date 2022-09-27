import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import './Products.css';

export const Products = () => {
    const [products,setProducts]=useState([]);
    const [page,setPage]=useState(1);
    const [limit,setlimit]=useState(50);

    const getProducts=async()=>{
        try {
            const res=await axios.get(`https://api.coincap.io/v2/assets`,{
                params:{
                    limit:limit
                }
            });
            const data=res.data;
            console.log(res);
            setProducts(data.data);
        } catch (error) {
            console.log('error',error)
        }
    }

    const handleIncrement=()=>{
        let lengthpage=products.length/limit;
        
            setPage(page+1)
            setlimit(limit+15)
         
    }
    const handleDecrement=()=>{
         
         
            setPage(page-1)
            setlimit(limit-15)
          
    }

    useEffect(()=>{
        getProducts();
    },[limit])
  return (
    <div>
         <table className='tableclass' >
            <thead>
            <tr className='tableheading' >
             <th>Rank</th>
            <th>Name</th>
            <th>Assets</th>
            <th>Exchange</th>
            <th>maxSupply</th>
            <th>Supply</th>
            <th>volumeUsd24Hr</th>
            <th>changePercent</th>
       </tr>
            </thead>

            <tbody>
            {products.map((el,i)=>{
        return(
            <tr className='tablebody' key={i}>
            <td>{el.rank}</td>
            <td><img className='image' src="https://assets.coincap.io/assets/icons/eth%402x.png" alt="pic" />{el.symbol}</td>
            <td>{el.name}</td>
          
            <td>{el.maxSupply/10}</td>
            <td>{el.marketCapUsd/10}</td>
            <td>{el.volumeUsd24Hr/100}</td>
            <td>{el.marketCapUsd/10}</td>
            <td>{el.changePercent24Hr}</td>
           </tr>
        )
     })}

            </tbody>
       
     
        </table>

        
    <div className='mainbutton'><button disabled={page==1} onClick={handleDecrement}>Show Less</button>
       <button onClick={handleIncrement}>Load More</button></div>
    </div>
  )
}
