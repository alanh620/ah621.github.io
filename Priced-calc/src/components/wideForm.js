import React, { useState, useEffect } from "react";

const printPrices = [
    { name: 'Glossy', price: 6.00 },
    { name: 'Matt', price: 6.00 },
    { name: 'Canvas', price: 10.25 },
    { name: 'Regular Bond', price: 1.75 },
    { name: 'Banner', price: 10.25 },
    { name: 'Foambord', price:15.75},
];

const goframes = [
    {name: 36, price:85/8},
    {name: 24, price:73/8},
    {name: 20, price:60/8},
    {name: 18, price:56/8},
] 

function roundToTwo(num) {
    let num2 = Math.round((num + Number.EPSILON) * 100) / 100;
    let num1 = parseFloat(num2).toFixed(2);
    return (num1);
}

function Wideform() {
    const [options, setOptions] = useState([
        { 'name': 'Glossy', 'total': 0.00 },
        { 'name': 'Matt', 'total': 0.00 },
        { 'name': 'Canvas', 'total': 0.00 },
        { 'name': 'Regular Bond', 'total': 0.00 },
        { 'name': 'Banner', 'total': 0.00 },
        { 'name': 'Foambord', 'total':0.00},
    ]);

    const [inputWidth, setWidth] = useState("");
    const [inputLength, setLength] = useState("");
    const [paperType, setPaperType] = useState("Glossy"); // Default paper type
    const [results, setResults] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [goframeMatchExists, setGoframeMatchExists] = useState(false);
    const [goframePrice, setGoframePrice] = useState(0); 


// Function to check if inputWidth or inputLength matches any goframe name
const checkForGoframeMatch = () => {
    const widthNum = parseFloat(inputWidth);
    const lengthNum = parseFloat(inputLength);

    const matchingGoframelenght = goframes.find(goframe =>
        goframe.name === lengthNum
    );
    const matchingGoframewidth = goframes.find(goframe =>
        goframe.name === widthNum
    );

    // Initialize prices to 0
    let widthPrice = 0;
    let lengthPrice = 0;

    // Check if matchingGoframewidth is found before accessing its price
    if (matchingGoframewidth) {
        widthPrice = matchingGoframewidth.price * 2;
    }
    // Check if matchingGoframelenght is found before accessing its price
    if (matchingGoframelenght) {
        lengthPrice = matchingGoframelenght.price * 2;
    }
    // Calculate the total goframe price
    setGoframePrice(roundToTwo(widthPrice + lengthPrice));
};
// Use useEffect to run checkForGoframeMatch whenever inputWidth or inputLength changes
useEffect(() => {
    checkForGoframeMatch();
}, [inputWidth, inputLength]); // Rerun when inputWidth or inputLength changes

const handleSubmit = (event) => {
    event.preventDefault();

    const calculatedResults = inputWidth * inputLength / 144;
    setResults(roundToTwo(calculatedResults));

    const updatedOptions = options.map((option) => {
        const matchingPrintPrice = printPrices.find(
            (priceItem) => priceItem.name === option.name
        );

        if (matchingPrintPrice) {
            return {
                ...option,
                'total': roundToTwo(matchingPrintPrice.price * calculatedResults)
            };
        }
        return option;
    });
    setOptions(updatedOptions);
};
const handlePaperTypeChange = (event) => {
  setPaperType(event.target.value);
};
const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
        console.log("Goframe checkbox is checked!");
    } else {
        console.log("Goframe checkbox is unchecked!");
    }
};
// Determine if the checkbox should be disabled
const isGoframeCheckboxDisabled = paperType !== "Canvas";

return (
        <form onSubmit={handleSubmit} className="flex col-span-2 justify-center flex-wrap">
            <div className="SizeInputs flex justify-center">
                <label>
                Paper Type:
                <select value={paperType} onChange={handlePaperTypeChange}>
                    {printPrices.map((paper, index) => (
                    <option key={index} value={paper.name}>
                        {paper.name}
                    </option>
                    ))}
                </select>
                </label>
                <label>
                    Width:
                    <input
                        type="number"
                        value={inputWidth}
                        onChange={(e) => setWidth(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Length:
                    <input
                        type="number"
                        value={inputLength}
                        onChange={(e) => setLength(e.target.value)}
                        required
                    />
                </label>
                <div className="Options flex-col justify-center">
                    <h2>Options:</h2>
                    <div className="flex justify-center flex-wrap">
                        <label className="goframe">Goframe:</label>
                            <input type="checkbox" name="goframe" value="goframe" checked={isChecked} onChange={handleCheckboxChange} disabled={isGoframeCheckboxDisabled} // Disable if no goframe match
                            />
                    </div>
                </div>    
            </div>
            <input type="submit" className="btn"/>
            <div className="results flex-col justify-center">
            {results && <p> <label>Total Area:</label> {results} <sup>sq ft</sup></p>}
            <div className="flex-col w-full">
                {options.filter(option => option.name === paperType).map((option) => {
                    const numericOptionTotal = option.total;
                    const totalCanvasWrapPrice = parseFloat(numericOptionTotal) + parseFloat(goframePrice);
                    return (
                        <p className="paperprice flex-col w-full" key={option.name}>
                        <span><label>Wholesale {option.name}:</label> ${roundToTwo(numericOptionTotal * .55)}</span>
                        <span><label>{option.name}</label>: ${parseFloat(option.total).toFixed(2)}</span>
                        {isChecked && (
                            <p> <span><label>Go frame Price:</label> ${goframePrice}</span></p>)}
                        {paperType == "Canvas" && (
                            <span><label>Total Canvas Wrap Price:</label> ${roundToTwo(totalCanvasWrapPrice)}</span>)}
                        </p>
                        );
                    })}
            </div>
        </div>
    </form>
    );
}

export default Wideform;
