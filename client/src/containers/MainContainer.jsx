import { useEffect, useState } from 'react';
import { getAllPosts } from '../services/post'


function MainContainer(props) {
  const [ posts, setPosts ] = useState([])
  
  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchPosts()
  }, [])

  return (
    <div>
      <h3>hello</h3>
    </div>
  );
}

export default MainContainer;