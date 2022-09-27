
import { useEffect, useState } from "react";
import { Cart } from "../cart/Cart";
import './Products.css';
import { Link } from "react-router-dom";
import { Sorting } from "../help/Sorting";
import { Filter } from "../help/Filter";

export const Products = () => {
  const [products, setProducts] = useState([]);
  
   var newArr;
   const getData = async () => {
    try {
      const res = await fetch(
        `https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088`);
      const value= await res.json();
      newArr=[...value]
        setProducts(newArr);
        
      console.log(value);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    //getData();
    if(products.length==0){
      getData();
    }
  }, [products.length]);



  const handleFilter = (val) => { 

    if (val === "cm") {
      setProducts(
        products
          .filter((el) => el.Menu_Category === "Condiments Menu")
      );
    } else if (val === "bvm") {
      setProducts(
        products
          .filter((el) => el.Menu_Category === "Beverages Menu")
      );
    } else if (val === "gm") {
      setProducts(
        products
          .filter((el) => el.Menu_Category === "Gourmet Menu")
      );
    }
  else if (val === "bm") {
      setProducts(
        products
        .filter((el) => el.Menu_Category === "Breakfast Menu")
    );
  } else if (val === "rm") {
      setProducts(
        products
        .filter((el) => el.Menu_Category === "Regular Menu")
    );
  }
  else if (val === "dm") {
      setProducts(
        products
        .filter((el) => el.Menu_Category === "Desserts Menu")
    );
  } else if (val === "mcm") {
      setProducts(
        products
        .filter((el) => el.Menu_Category === "McCafe Menu")
    );
  } else if(val === "nm") {
    setProducts(products); 

    }
    
  };
  console.log(products)



  const handleSorting=(val)=>{
    if(val==='atz'){
        console.log(val)
        setProducts([...(products).sort((a, b) => a.Menu_Items < b.Menu_Items)]);
    }
    else if(val==='zta'){
        console.log(val)
        setProducts([...(products).sort((a, b) => b.Menu_Items > a.Menu_Items)]);
    }
    else if (val === "eg") {
      console.log(val)
      setProducts([...(products).sort((a, b) => b.Energy_kCal - a.Energy_kCal)]);
  } else if (val === "em") {
      console.log(val)
      setProducts([...(products).sort((a, b) => a.Energy_kCal - b.Energy_kCal)]);
  } 
    else if (val === "se") {
      console.log(val)
      setProducts([...(products).sort((a, b) => a.Total_Sugars_g - b.Total_Sugars_g)]);
  } else if (val === "sm") {
      console.log(val)
      setProducts([...(products).sort((a, b) => b.Total_Sugars_g - a.Total_Sugars_g)]);
  } 
  else if(val==='pe'){
      console.log(val)
      setProducts([...(products).sort((a, b) => a.Protein_g - b.Protein_g)]);
  }
  else if(val==='pm'){
      console.log(val)
      setProducts([...(products).sort((a, b) => b.Protein_g - a.Protein_g)]);
  }
    else {
        setProducts(products);
    }
}

  

  return (
  <div>
    <div className='flex'>
          <Filter handleFilter={handleFilter}/>
          <Sorting handleSorting={handleSorting}/>
        </div>
    <div className="grid">
    {products.map(item=>(
        <div key={item.Id} className='productCart'>
            <Link className='link1' to={`/products/${item.Id}`}><Cart item={item}/></Link>
        </div>
    ))}
  </div>
    </div>);
};
