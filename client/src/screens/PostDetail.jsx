import { useState, useEffect } from 'react';
import {useParams, Link, Redirect} from "react-router-dom"
import { destroyPost, getOnePost } from '../services/post';

function PostDetail(props) {
  const [post, setPost] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(id)
      setPost(post)
      setIsLoaded(true)
    }
    fetchPost()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading....</h1>
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const deleted = await destroyPost(post.id)
    setIsDeleted({ deleted })
  }

  if (isDeleted) {
    return <Redirect to="/home" />
  }

  return (
    <div className="post-detail">
      
      <img
        className="post-detail-image"
        src={post.image}
        alt={post.title}
      />

      <div className="detail">
        
        <div className="detail-title">{post.title}</div>

        {/* <div className="detail-user">{post.user}</div> */}

        <div className="detail-content">{post.content}</div>

        <div className="detail-outfit">{post.outfit}</div>

        <div className="detail-price">${post.price}</div>

        <div className="detail-button-container">

          <button className ="edit-button">
            <Link className="edit-link" to={`/posts/${post.id}/edit`}>
            Edit
            </Link>
          </button>

          <button className="delete-button" onClick={handleSubmit}>
            Delete
          </button>

        </div>

      </div>
      
    </div>
  );
}

export default PostDetail;