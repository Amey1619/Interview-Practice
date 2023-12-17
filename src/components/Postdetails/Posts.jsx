import {useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Posts() {
    const [posts,setPosts]=useState(null);
    const {objectID}=useParams();
    console.log(objectID);
    useEffect(() => {
      const fetchPost= async ()=>{
        try {
            const response = await axios.get(
              ` http://hn.algolia.com/api/v1/items/${objectID}`
            );
            console.log(response.data);
            setPosts(response.data);
        } catch (error) {
             console.log("Errors is fetching data: ", error);
        }
      };
      fetchPost();
    }, [objectID])

     if (!posts) {
       return <div>Loading...</div>;
     }
    
  return (
    <div>
      <h2>{posts.title}</h2>
      <p>Points: {posts.points}</p>
      <h3>Comments:</h3>
      <ul>
        {posts.children &&
          posts.children.map((comment) => <li key={comment.id}>{comment.text}</li>)}
      </ul>
    </div>
  );
}

export default Posts