import { useState, useEffect } from 'react';
import {useParams, Link, Redirect} from "react-router-dom"
import { getAllComments } from '../services/comments';
import { destroyPost, getOnePost } from '../services/post';
import "./PostDetail.css"

function PostDetail(props) {
  const [post, setPost] = useState(null)
  const [comment, setComment] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(id)
      setPost(post)
      const comment = await getAllComments()
      setComment(comment)
      setIsLoaded(true)
      console.log(comment)
    }
    fetchPost()
  }, [id])

  const postComments = comment.filter(post => post.post_id == id).map((comments, index) => {
    return (
      <div className="comments" key={index }>{comments.content}</div>
    )
  })

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
      
      <div className="post-detail-div">
        
        <img
        className="post-detail-image"
        src={post.image}
        alt={post.title}
        />

        <div className="detail">
          
          <div className="detail-title">{post.title}</div>

          {/* <div className="detail-user">{post.user}</div> */}

          <div className="detail-content">{post.content}</div>
          
          <div className="detail-pricing">
           
            <div className="detail-outfit">Outfit name: {post.outfit}</div>

            <div className="detail-price">Price: ${post.price}</div>

          </div>
          
          <div className={props.id === post.user_id ? "detail-button-container" : "detail-button-container hidden" }>

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
      
      <div className = "comment-div" >{ postComments }</div>

    </div>
  );
}

export default PostDetail;