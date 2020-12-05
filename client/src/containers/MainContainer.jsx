import { useEffect, useState } from 'react';
import RecentPosts from '../components/RecentPosts';
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

  const recentPosts = posts.slice(0).reverse().map((post, index) => (
    <RecentPosts
      id={post.id}
      image={post.image}
      title={post.title}
      key={index}
    />
  ))

  return (
    <div className="recent-posts-container">
      <h3>Recent Posts</h3>
      <div>{recentPosts}</div>
    </div>
  );
}

export default MainContainer;