import { useState } from 'react';
import { Redirect } from "react-router-dom"

function CreatePost(props) {
  const [post, setPost] = useState({
    title: "",
    image: "",
    content: "",
    price: "",
    outfit: "",
    tags: "",
    category: ""
  })

  const [isCreated, setIsCreated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const created = await CreatePost(post)
    setIsCreated({created})
  }

  if (isCreated) {
    return <Redirect to="/home"/>
  }

  return (
    <div user={props.currentUser}>
      <h1 className="create-title"> Create Post</h1>
      <div className="form-container">
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="input-container">
            
            <div className="create-title-input">
              <input
                className="input-title"
                placeholder="Title"
                value={post.title}
                required
                autoFocus
                onChange={handleChange}
              />
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;