import React,{useState,useEffect} from "react";

function MouseTracker() {
     const [mousePositions,setMousePositions] = useState({x:0,y:0});
     
     const handleMouseMove = (event) => {
        setMousePositions({x: event.clientX, y: event.clientY});

     }

     useEffect( ()=> {
        console.log('Mouse move listener added.');

        window.addEventListener('mousemove',handleMouseMove);

        return () => {
            console.log("Mouse move listener removed.");

            window.removeEventListener('mousemove',handleMouseMove);
        }
     },[]);

     return(
        <div>
            <h1>
                Mouse Movement Tracker
            </h1>
            <p> Mouse X : {mousePositions.x}</p>
            <p>Mouse Y : {mousePositions.y}</p>
        </div>
     )

}

export default MouseTracker;