import React, {useState} from "react";
import ReactDOM from "react-dom";
import textfile  from '../constants/newboxlist.json';
import {CSSTransition} from 'react-transition-group';


function roundToTwo(num) {
    let num2 = Math.round((num + Number.EPSILON) * 100)  / 100
    let num1 = parseFloat(num2).toFixed(2);
    return(num1);
}


  function Form(){ 
        var increase = 0;
        const [price, setValue] = useState('');
        const [inputWidth, setWidth] = useState("");
        const [inputLength, setLength] = useState("");
        const [inputHeight, setHeight] = useState("");
        const [outputOne, setoutput] = useState(
            {
                "postion": "A43",
                "width": 0,
                "length": 0,
                "height": 0,
                "price": 0,
                "fragile": 0,
                "standard": 0,
                "basic": 0
            });
        const [outPutTwo, setoutputTwo] = useState(
            {
                "postion": "A43",
                "width": 0,
                "length": 0,
                "height": 0,
                "price": 0,
                "fragile": 0,
                "standard": 0,
                "basic": 0
            });
        const [outPutThree, setoutputThree] = useState(
            {
                "postion": "A43",
                "width": 0,
                "length": 0,
                "height": 0,
                "price": 0,
                "fragile": 0,
                "standard": 0,
                "basic": 0
            });
        const [outPutfour, setoutputfour] = useState(
            {
                "postion": "A43",
                "width": 0,
                "length": 0,
                "height": 0,
                "price": 0,
                "fragile": 0,
                "standard": 0,
                "mid": 0
            });
        const [outPutfive, setoutputfive] = useState(
                {
                    "postion": "A43",
                    "width": 0,
                    "length": 0,
                    "height": 0,
                    "price": 0,
                    "fragile": 0,
                    "standard": 0,
                    "mid": 0
                });
        const [outPutsix, setoutputsix] = useState(
                    {
                        "postion": "A43",
                        "width": 0,
                        "length": 0,
                        "height": 0,
                        "price": 0,
                        "fragile": 0,
                        "standard": 0,
                        "mid": 0
                    });
        const options = [];   
        options.push(outPutTwo);
        options.push(outPutThree);
        options.push(outPutfour); 
        options.push(outPutfive);
        options.push(outPutsix);
        let results = [];
        switch(price) {
            case 'custom': increase= 4;break;
            case 'fragile': increase = 4;break;
            case 'standard': increase = 2;break;
            case 'basic': increase = 0;break;
            default : increase = 0;break;
        }
        //sorts the boxes by volume from smallest to largest 
        const newData = textfile.sort((a,b)=>( ( a.width * a.height * a.length > b.width * b.height * b.length)) ? 1:-1);
        

        const [show, setShow] = useState(false);
        const [InvShow, setInventroyShow] = useState(false);
        const handleSubmit = (event) => {
             event.preventDefault();
             const element = newData;
             let boxSize = [];
             let x = 0; 
             let inputArray = [parseInt(inputWidth)+increase,parseInt(inputLength)+increase,parseInt(inputHeight)+increase];
             let sortedInput =  inputArray.sort((a, b) => b-a);
             let results = [];
             let outPutTwo = {};
             let outPutThree = {};
             let outPutfour = {};
             let options = [];
             for (let index = 0; index < element.length; index++) {
                 boxSize = [element[index].width,element[index].length,element[index].height];
                 let highestToLowest = boxSize.sort((a, b) => b-a);
                 if( highestToLowest[0] >= sortedInput[0] && highestToLowest[1] >= sortedInput[1] && highestToLowest[2] >= sortedInput[2] ){
                    if(x < 6){results.push(element[index]);x++;}}}
             if(results.length == 0 || results.length == undefined){
                 return setoutput('No Box was found');
             }else{
                setoutput(results[0]);
                setoutputTwo(results[1]);
                setoutputThree(results[2]);
                setoutputfour(results[3]);
                setoutputfive(results[4]);
                setoutputsix(results[5]);
                options.push(outPutTwo);
                options.push(outPutThree);
                options.push(outPutfour);
                options.push(outPutfive);
                options.push(outPutsix);
             }
        
          }
       return(
    <div>
        <form onSubmit={handleSubmit} className="flex col-span-2 justify-center flex-wrap">
            <div className="SizeInputs flex justify-center">
                <label>Largest:
                    <input value={inputWidth} type="number" onChange={(e) => setWidth(e.target.value)} />
                </label>
                <label>Meduium:
                    <input value={inputLength} type="number" onChange={(e) => setLength(e.target.value)} />
                </label>
                <label>Smallest:
                    <input  value={inputHeight} type="number" onChange={(e) => setHeight(e.target.value)}/>
                </label>
            </div>
            <div className="pricing flex justify-center">
                <h2>Please Select One based on the packaging</h2>
                <div className="flex justify-center flex-wrap">
                    <label className="hidden"><b>Box Price </b>
                    <input type="radio" name="pricing" value="price" checked={price === 'price'} onChange={(e)=>{setValue(e.target.value)}} />
                    </label>
                    <label><b>Basic + 0<sub>in</sub></b>
                        <input type="radio" name="pricing" value="basic" checked={price === 'basic'} onChange={(e)=>{setValue(e.target.value)}} />
                    </label>
                    <label><b>Standard + 2<sub>in</sub></b>
                        <input type="radio" name="pricing" value="standard" checked={price === 'standard'} onChange={(e)=>{setValue(e.target.value)}} />
                    </label>
                    <label><b>Fragile + 4<sub>in</sub></b> 
                        <input type="radio" name="pricing" value="fragile" checked={price === 'fragile'} onChange={(e)=>{setValue(e.target.value)}} />
                    </label>
                    <label className="hidden"><b>Custom + 4<sub>in</sub></b> 
                        <input type="radio" name="pricing" value="custom" checked={price === 'custom'} onChange={(e)=>{setValue(e.target.value)}}/>
                    </label>
                </div>
            </div>    
            <input type="submit" className="btn"/>
        </form>
        <div className="best-fit column-1  md:columns-1">
            <div className="flex flex-wrap content-center">
                <h2>Best Fit:</h2><span className="fa-solid fa-box-open"></span>
                <span><b className='lable pl-2'>W: </b>{outputOne.width}</span>
                <span><b className='lable pl-2'>L: </b>{outputOne.length}</span>
                <span><b className='lable pl-2'>H: </b>{outputOne.height}</span>
                <span><b className='lable pl-2'>Price:</b> $ { roundToTwo( 
                                    price === 'fragile' ? outputOne.fragile : 
                                    price === 'standard' ? outputOne.standard : 
                                    price === 'basic' ? outputOne.basic : 0.00)}</span>
                <span><b className='lable pl-2'>Postion: </b>{outputOne.postion}</span>
            </div>
        </div>
        <div className="other-options flex justify-center flex-wrap">
            <button className="btn toggle-more" onClick={() => setShow(currentShow => !currentShow)}>
            Click Here for More Options <span className="fa-solid fa-dolly fa-bounce"></span>
            </button>
            {show ?  <CSSTransition in={show} timeout={350} classNames="test" onEnter={() => setShow(true)} onExited={() => setShow(false)}>
                <div className="moreOptions-dropdown flex w-full">
                    <div className="options flex justify-start flex-col w-full">
                        {options.map((options, index) => (
                            <div className="option" key={index}>
                                <span><b className='lable pl-2'>W: </b>{options.width}</span>
                                <span><b className='lable pl-2'>L: </b>{options.length}</span>
                                <span><b className='lable pl-2'>H: </b>{options.height}</span>
                                <span><b className='lable pl-2'>Price: </b>{ roundToTwo( 
                                    price === 'fragile' ? options.fragile : 
                                    price === 'standard' ? options.standard : 
                                    price === 'basic' ? options.basic : 0.00)}
                                </span>
                                <span><b className='lable pl-2'>Postion: </b>{options.postion}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </CSSTransition>:<CSSTransition in={show} timeout={350} classNames="test" onEnter={() => setShow(true)} onExited={() => setShow(false)}><div className="options"></div></CSSTransition> }
        </div>
    </div>
    )
  }


  
export default Form
