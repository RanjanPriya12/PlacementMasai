import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Cart = ({ item }) => {
  return (
    <div>
      <h4>Menu_Cat : {item.Menu_Category}</h4>
      <p>Menu_Item:{item.Menu_Items}</p>
      <p>Energy: {item.Energy_kCal}</p>
      <p>Protein: {item.Protein_g}</p>
      <p>Total_Sugar: {item.Total_Sugars_g}</p>
      <p>Sodium: {item.Sodium_mg}</p>
    </div>
  );
};
