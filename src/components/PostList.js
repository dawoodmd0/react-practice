import React, {useState,useEffect} from "react";

function PostList(){
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect( () => {
        const fetchPosts = async () => {
            try{
                setLoading(true);
                setError(null);

                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                setPosts(data);
               
            }catch(err) {
                setError('Failed to fetch posts. Please try again later.');
                console.error('Error fetching posts:', err);
            }finally{
                setLoading(false);
            }
        }

        fetchPosts();

        return () => {
            console.log("Cleaning up ");
        };

    },[]);

    return (
        <div>
            <h1>Blog Posts</h1>
            {loading && <p>Loading Posts...</p>}
            {error && <p>{error}</p>}

            {!loading && !error &&(
                   <ul>
                      {posts.map((post) => (
                         <li key = {post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body.substring(0,100)}</p>
                         </li>
                      ))}     
                  </ul>
               )  
            }
        </div>

    )
}

export default PostList;