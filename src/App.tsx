import React, {useState} from 'react';
import './App.css';


function App() {
   let [counter, setCounter] = useState(0)
   let [disabled, setDisabled] = useState(false)

   const onOnePlusHandler = () => {
      setCounter(counter + 1)
      if (counter === 4) {
         setDisabled(!disabled)
      } else setDisabled(false)
   }
   // const onFivePlusHandler = () => {
   //    setCounter(counter + 5)
   // }
   const onClearHandler = () => {
      setCounter(counter = 0)
      setDisabled(false)
   }

   return (
      <div className="App">
         <input type="number" value={counter} className={counter === 5 ? "inputA" : "input"}/>
         <div>
            <button onClick={onOnePlusHandler} className="button" disabled={disabled}>+</button>
            {/*<button onClick={onFivePlusHandler} className="button">+5</button>*/}
            <button onClick={onClearHandler} className="button" disabled={!disabled}>clear</button>

         </div>
      </div>
   );
}

export default App;
