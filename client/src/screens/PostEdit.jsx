import { useState, useEffect } from 'react';
import { useParams, Redirect } from "react-router-dom"
import {getOnePost, putPost} from "../services/post"

function PostEdit(props) {
  const [post, setPost] = useState({
    title: "",
    image: "",
    content: "",
    price: "",
    tags: "",
    category: ""
  })

  const [isUpdated, setIsUpdated] = useState(false)

  let { id } = useParams()
  
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getOnePost(id)
      setPost(post)
    }
    fetchPost()
  },[id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let { id } = props.match.params
    const updated = await putPost(id, post)
    setIsUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />
  }

  return (
    <div user={props.currentUser}>
      
      <div className="post-edit">
        
        <form onSubmit={handleSubmit}>

          <label className="edit-title">Title</label>
          <input
            className="edit-title-input"
            placeholder="New Title"
            value={post.title}
            name="title"
            required
            onChange={handleChange}
          />

          <label className="edit-image">Title</label>
          <input
            className="edit-image-input"
            placeholder="New Image URL"
            value={post.image}
            name="image"
            required
            onChange={handleChange}
          />

          <label className="edit-content">Title</label>
          <textarea
            className="edit-content-input"
            placeholder="Enter Text"
            rows={10}
            cols={78}
            value={post.content}
            name="content"
            required
            onChange={handleChange}
          />
          
        </form>
      
      </div>
      
    </div>
  );
}

export default PostEdit;