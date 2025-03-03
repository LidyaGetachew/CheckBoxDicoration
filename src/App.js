import './App.css';
import React, { useState } from 'react';
function App() {
  const [isChecked, setIsChecked] = useState(false);


  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Custom checkbox
        </p>

      </header>
      <div className='container'>

      <div className="yourcheckBox">

        <p className="title">
          Your checkbox
        </p>
        <label className={isChecked ? 'checked' : ''}>

          <input
            type="checkbox"
            checked={isChecked}  // Bind the checked state to the checkbox
            onChange={handleCheckboxChange}  // Update state when checkbox is clicked
          />
          Complete the task!
        </label>
      </div>
      <div className="templete">

        <p className="title">
          Template
        </p>
        <label>
        <p>
          UnChecked
        </p>

          <input
            type="checkbox"
            checked={false}  // Bind the checked state to the checkbox
          />
          Complete the task!
        </label>
        <p>
          Checked
        </p>
        <label className='checked'>
        
          <input
            type="checkbox"
            checked={true}  // Bind the checked state to the checkbox
          />
          Complete the task!
        </label>
      </div>
      </div>

    </div>
  );
}

export default App;
