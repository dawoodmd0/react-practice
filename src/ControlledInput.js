import { useState } from "react";

function ControlledInput(){
     const [userInput,setUserInput] = useState('');
     
     const handleInput = (event) => {
           setUserInput(event.target.value);
     };

     const resetFn = ()=>{
        setUserInput("");
     }

     return (
        <>
            <h2>Dynamic Form input</h2>
              
            <label htmlFor="userIn">Enter something</label>
            <input id="userIn" placeholder="Enter something" value={userInput} onChange={handleInput} type="text"></input><br /><br />

            <button onClick={resetFn}>Reset</button>

            <p> Currently typed input is <b>{userInput}</b></p>
            
        </>
     );
}

export default ControlledInput;