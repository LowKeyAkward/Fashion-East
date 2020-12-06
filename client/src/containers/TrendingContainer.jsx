import { useEffect, useState } from 'react';
import TrendingPosts from '../components/TrendingPosts';
import { getAllPosts } from '../services/post'
import "./TrendingContainer.css"

function TrendingContainer(props) {

  const [ posts, setPosts ] = useState([])
  
  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchPosts()
  }, [])

  const trendingPosts = posts.filter(posts => posts.tags === "Trending").map((post, index) => (
    <TrendingPosts
    id={post.id}
    image={post.image}
    title={post.title}
    key={index}
    />
  ))

  return (
    <div >
      <h2>Trending</h2>
      <div className="slideshow-container">
        <div className="image-trending">{trendingPosts}</div>
      </div>
      
    </div>
  );
}

export default TrendingContainer;