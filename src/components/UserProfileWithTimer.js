import React,{useState,useEffect} from "react";

function UserProfileWithTimer({userId}) {
      const [userData,setUserData] = useState(null);
      const [loading,setLoading] = useState(true);
      const [error,setError] = useState(null);
      

      const [count,setCount] = useState(0);

      useEffect(() => {
          const controller = new AbortController();
          const signal = controller.signal;

         const fetchUserData= async () => {
            if(!userId) {
                setLoading(false);
                setError("Please provide User Id");
                setUserData(null);
                return;
            }

            setLoading(true);
            setError(null);
            console.log(`Fetching data for user ID: ${userId}`);

            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{signal});

                  if(!response.ok){
                     throw new Error(`HTTP error! status: ${response.status}`);
                  }

                  const data = await response.json();

                  setUserData(data);

            }catch(err){
                 if(err.name === "AbortError"){
                    console.log("Fetch Aborted.");
                 }else{
                    setError("Failed to fetch user data..");
                    console.error('Error fetching user data:', err);
                 }
            }finally{
                setLoading(false);
            }
            
         }

         fetchUserData();

         return () =>{
            console.log(`Cleaning up user fetch for ID: ${userId}`);
            controller.abort();
         }

      },[userId]);


      useEffect(() => {
          console.log('Timer effect started.');
          const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
          },1000);

            return () =>{
                console.log('Timer effect cleanup: Clearing interval.');
                clearInterval(intervalId);
            }
      },[]);

      return (
        <div>
            <h1>User Profile & Timer</h1>

            <div>
                <h2>User Profile</h2>
                

               {loading && <p>Loading...</p>}

                {error && <p>{error}</p>}

               {userData && (
                <div>
                    <p><strong>Name : {userData.name}</strong></p>
                    <p><strong>Email : {userData.email}</strong></p>
                    <p><strong>Username : {userData.username}</strong></p>
                </div>
                )}
            </div>

            <div>
                <h2>Live Counter</h2>
                <p>Elapsed Time : {count}</p>
            </div>
            
        </div>
      );
}

export default UserProfileWithTimer;