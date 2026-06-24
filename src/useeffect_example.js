import {useEffect, useState} from "react";

function MyComponent(){
    const [count,setCount] = useState(0);
    
    useEffect(() => {
        console.log(`The count is ${count}`);
    },[count])

    return(
        <div>
             <p>You clicked {count} times</p>
             <button onClick={() => setCount(prevCount => prevCount+1)}>Click me</button>
        </div>
    )
}

export default MyComponent;