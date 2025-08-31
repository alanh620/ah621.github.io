import React from 'react';
import Form from '../components/form';


const Home = () => {
  return (
    <div className="App">
    <div className="flex aic justify-center flex-wrap content-center">
    <i class="fa-brands fa-ups"></i>
        <h1>Box Calculator</h1>
        <p><b>How to use:</b> Please input 3 measurements ( in inches) and the click the submit button. This calculator will take the volume of your inputs and compare them to the current box list and present the 6 best options. If you encounter any error with the calculator please try refreshing the page.</p>
    </div>
  <div>
    <Form />
  </div>
</div>
  );
};
  
export default Home;