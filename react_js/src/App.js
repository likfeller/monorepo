
import './App.css';

import React, { useState } from 'react';

function App() {
  const [currentStep, setCurrentStep] = useState('1/2');
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Anti Wrinkle Treatment', 'Secret RF',
    'HArmonyCA', 'Profhilo', 'Facials', 'Sclerotherapy', 'Led'
    , 'Fat Dissolve', 'Growth Factors', 'Special Package for Time clinic', 'Consulation'];

  const selectOption = (option) => {
    setCurrentStep('2/2');
    setSelectedOption(option);
  };

  const goBack = () => {
    setCurrentStep('1/2');
    setSelectedOption('');
  };

  if (currentStep === '1/2') {
    return (
      <div>
        <header className='App'>
          <h6 className='App'>Choose Service</h6>
          <h6 className='App'>Step {currentStep}</h6>
        </header>

        <div className='main'>
          <main className='App'>
            <div className='empty'>
              <div className='margin'>
              <div className='Options'>
            {options.map((option, index) => (
              <fieldset key={index} onClick={() => selectOption(option)} className='fields'>
                {option}  
              </fieldset>
            ))}
          </div></div>
          </div>
        </main>
        </div>
                
        <footer className='footer'>
          <fieldset>Not sure about consulation type? Pleasse call 02030405</fieldset>
        </footer>
      </div>
    );
  } else {
    return (
      <div>
        <header>
          <h1 className='App'>{currentStep}</h1>
        </header>

        <main className='App'>
          <h6>Selected Option: {selectedOption}</h6>
        </main>

        <footer className='App'>
          <button onClick={goBack}>Back</button>
        </footer>
      </div>
    );
  }
}


export default App;
