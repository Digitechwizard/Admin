import React, { useState } from 'react';
import './FormStyle.css'; // Import your CSS file for styling

const SelectForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="select-container">
         {/* Marquee */}
      <div className="marquee-container">
        <marquee direction="left" behavior="scroll" scrollamount="5">
          <h6>Welcome To Bro999 Gaming Website</h6>
        </marquee>
      </div>
      {/* Heading */}
      <h1 className="text-left title_h1">Select Upline</h1>

      {/* Select Form */}
      <div className="form-container">
        <select className="select-box" value={selectedOption} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
      </div>
      
     
    </div>
  );
};

export default SelectForm;
