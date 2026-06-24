import React,{useState,useEffect} from "react";

function CountdownTimer({initialTime = 10}) {
     const [secondsRemaining,setSecondsRemaining] = useState(initialTime);


     useEffect( () => {
         if(secondsRemaining <= 0 ){
           console.log('Timer Finished');
           return;
          }
     
          console.log(`Timer started with ${secondsRemaining} seconds remaining.`);
          const intervalId = setInterval(() => {
              setSecondsRemaining((prevSecond) => {
                  const nextSeconds = prevSecond - 1;
                  if(nextSeconds === 0){
                      console.log('Timer finished inside interval.');
                  }

                  return nextSeconds;
              });
          }, 1000);

            return () => {
                console.log('Timer cleanup: Clearing interval.');
                clearInterval(intervalId);
            }
     },[secondsRemaining]);
     


    return (
        <div>
            <h1>Countdown Timer</h1>
            <p>Time remaining: {secondsRemaining} seconds</p>

            {secondsRemaining === 0 && <p>Time's Up</p>}
        </div>
    )
     
}

export default CountdownTimer;