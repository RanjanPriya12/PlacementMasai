import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

export const Product = () => {
  const [item, setItem] = useState("");
  const { Id } = useParams();

  const productArr=JSON.parse(localStorage.getItem('wishlist'))||[];
  const wishlistHandler=(item)=>{
    console.log(item)
    const dupliactes=productArr.filter((cartItem)=>cartItem.Id===item.Id);
    if(dupliactes.length===0){
        const productToAdd={
            ...item
        }
        productArr.push(productToAdd);
    }
    console.log(productArr)
    localStorage.setItem('wishlist', JSON.stringify(productArr));
    alert('product is successfully added to favourite list')
  }

  const getItems = async () => {
    try {
      const res = await fetch(
        `https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088`
      );
      const data = await res.json();
      const el = data.filter((a) => {
        if (a.Id == Id) {
          return a;
        }
      });
      setItem(el[0]);
      //console.log(el);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getItems();
  }, [Id]);

  return (
    <div className="singlieProduct">
      <div className="productImg">
        <img
          src="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"
          alt="pic"
        />
        <h3>Product Image - {item.Id}</h3>
      </div>
      <div className="productDetails">
        <h2>Product Details</h2>
        <p><b>Menu_Category :</b> {item.Menu_Category}</p>
        <p> <b>Energy :</b> {item.Energy_kCal}</p>
        <p><b>Protein :</b> {item.Protein_g}</p>
        <p><b>Total_Sugar :</b> {item.Total_Sugars_g}</p>
        <p> <b>Sodium :</b> {item.Added_Sugars_g}</p>
        <p> <b>Cholesterols :</b> {item.Cholesterols_mg}</p>
        <p> <b>Per_Serve_Size :</b> {item.Per_Serve_Size}</p>
        <p> <b>Sat_Fat :</b> {item.Sat_Fat_g}</p>
        <p> <b>Total_carbohydrate :</b> {item.Total_carbohydrate_g}</p>
        <p> <b>Total_fat :</b> {item.Total_fat_g}</p>
        <p> <b>Trans_fat :</b> {item.Trans_fat_g}</p>
        <button className="wishlist" onClick={()=>wishlistHandler(item)}>
          Add To Favourite
        </button>
      </div>
    </div>
  );
};
