import React,{ useState, useEffect} from 'react';
import './Help.css';

export const Sorting = ({handleSorting}) => {

  return (
    <div>
        <b>Sort Product By: </b>
            <select className="help" onChange={(e)=>handleSorting(e.target.value)}>
              <option value="nm">Conditions</option>
              {/* <option value="atz">Menu Item A-To-Z</option>
              <option value="zta">Menu Item Z-To-A</option> */}
              <option value="eg">Energy Calory Increasing</option>
              <option value="em">Energy Calory Decreasing</option>
              <option value="se">Total Sugar Increasing</option>
              <option value="sm">Total Sugar Decreasing</option>
              <option value="pe">Protein Increasing</option>
              <option value="pm">Protein Decreasing</option>
            </select>
    </div>
  )
}
