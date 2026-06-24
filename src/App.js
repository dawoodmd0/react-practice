import { useState } from 'react';
import './App.css';
import UserProfileWithTimer from './UserProfileWithTimer';
// import MouseTracker from "./MouseTracker.js"
// import PostList from './PostList';
// import CountdownTimer from './CountdownTimer';
// import { useState } from 'react';
// import MyComponent from './useeffect_example';
// import ShoppingCart from './shoppingCart.js';
// import TodoList from './TodoList.js';
// import { useState } from "react";
//  import Counter from "./Counter.js"
// import UpdateArray from './UpdateArray.js';
// import ControlledInput from './ControlledInput.js';
// import UserProfileWithCorrectDeps from "./UserProfileWithCorrectDeps.js"
// function App() {
//    const currentuserID = 2;
//    return (
//     // <ControlledInput />
//     // <TodoList />
//     // <ShoppingCart  />
//     //  <MyComponent />
//     // <>
//     //  <UserProfile userId = {currentuserID} />

//     //  <button onClick={() => setCurrentUserId(count => count + 1)}> click me</button>
//     //  </>

//     <UserProfileWithCorrectDeps userId = {currentuserID} userToken={'12345'} />
//   );
// }

// // function App() {
// //   const [random] = useState(() => {
// //     console.log("Generating...");
// //     return Math.random();
// //   });

// //   return <h1 style={{fontSize:"20px" , alignItems : "center",display:'flex', justifyContent :'center',height:"100vh",position : 'absolute',top:'50%',left:'50%',transform : 'translate(-50%,-50%)'}}>{random}</h1>;
// // }


// import React,{useEffect,useState} from 'react';


// function App(){
//     const [scrollPos,setScrollPos] = useState(0);

//     const handeScroll = () => {
//       setScrollPos(window.scrollY);
//     }

//     useEffect( () =>{
//       console.log("Scroll event Mounted");

//       window.addEventListener('scroll' , handeScroll);

//       return () => {
//         console.log("Scroll Event Removed");
//         window.removeEventListener('scroll',handeScroll);
//       }
//     }
//     ,[]);

//     return (
//       <div>
//          <h1>Scroll Position : {scrollPos}px</h1>
//       </div>
//     )
// } 


function App() {
  const [userId, setUserID] = useState(1);

  return (
    // <PostList/>
    // <CountdownTimer initialTime={10} />
    // <MouseTracker />

    <div>
       <h1>Combined Effects Example</h1>
       <UserProfileWithTimer userId={userId} />
       <button onClick={() => setUserID(prevCount => prevCount + 1)}>Next User (ID : {userId + 1})</button>
    </div>
    
  );
}
export default App;
