import {useState,useEffect} from 'react';

function UserProfileWithCorrectDeps({userId,userToken}){
    const [userData , setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error , setError] = useState(null);

    useEffect(() => {
        let active = true;

        if (!userId || !userToken) {
            setUserData(null);
            setError("User ID and Token are required.");
            return;
        }

        setLoading(true);
        setError(null);
        console.log(`Fetching data for user ID: ${userId} with token: ${userToken}`);

        const fetchUserData = async () => {
            try {
                 await new Promise((resolve) => setTimeout(
                    () => resolve("Promise"),
                    1000
                ));
                
                if (!active) return;

                const data = {
                    id: userId,
                    name: `User ${userId} (Token ${userToken.substring(0, 4)}...)`
                };

                setUserData(data);
            } catch (err) {
                if (active) {
                    setError('Failed to Fetch Data');
                    console.error(err);
                }
            } finally {
                if (active) {
                    setLoading(false);
                }
            }
        };

        fetchUserData();

        return () => {
            active = false;
            console.log(`Cleaning up effect for user ID: ${userId}`);
        };
    }, [userId, userToken]);
    

    return (
        <>
           <h1>User Profile</h1>

           {loading && <p>Loading...</p>}

           {error && <p>{error}</p>}

           {userData && (
             <div>
                <p>ID : {userData.id}</p>
                <p>Name : {userData.name}</p>
             </div>
           )}
        </>
    )

}

export default UserProfileWithCorrectDeps;