import React, {useState} from "react";
import ReactDOM from "react-dom";


function Price(){
const [price, setValue] = useState('');

    return(
    <div className="pricing">
        <label>Price: 
            <input type="radio" name="pricing" value="price" checked={price === 'price'} onChange={(e)=>{setValue(e.target.value)}} />
        </label>
        <label>Standard:
            <input type="radio" name="pricing" value="standard" checked={price === 'standard'} onChange={(e)=>{setValue(e.target.value)}} />
        </label>
        <label>Mid: 
            <input type="radio" name="pricing" value="mid" checked={price === 'mid'} onChange={(e)=>{setValue(e.target.value)}}/>
        </label>Fragile: 
            <input type="radio" name="pricing" value="fragile" checked={price === 'fragile'} onChange={(e)=>{setValue(e.target.value)}} />
        <label>Custom: 
            <input type="radio" name="pricing" value="custom" checked={price === 'custom'} onChange={(e)=>{setValue(e.target.value)}}/>
        </label>
    </div>    
    )
}




  
export default Price
