import React from 'react';
import WideForm from '../components/wideForm';


const Wide = () => {
  return (
    <div className="App">
    <div className="flex aic justify-center flex-wrap content-center">
    <i class="fa-brands fa-ups"></i>
        <h1>Wide Format Calculator</h1>
        <p><b>How to use:</b> Input the length and Width of the print you would like to make. Please provide inputs in inches. This calculator will return
            the area in square feet and adjust price accordingly. Any bugs found please report to UPS corporate.</p>
    </div>
  <div>
    <WideForm />
  </div>
</div>
  );
};
  
export default Wide;