import React, { useState, useEffect } from "react";
import './Help.css';

export const Filter = ({handleFilter}) => {
    
  return (
    <div>
        <b>Filter :</b>
      <select className="help" onChange={(e)=>handleFilter(e.target.value)}>
        <option value="nm">Menu Category</option>
        <option value="cm">Codiments Menu</option>
        <option value="bvm">Beverages Menu</option>
        <option value="gm">Gourmets Menu</option>
        <option value="dm">Dessert Menu</option>
        <option value="mcm">McCafe Menu</option>
        <option value="bm">Breakfast Menu</option>
        <option value="rm">Regular Menu</option>
      </select>
    </div>
  );
};
