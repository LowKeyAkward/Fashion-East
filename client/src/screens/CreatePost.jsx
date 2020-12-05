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

              <div className="dropdown">
                <label className="label-cat">Select Category</label>
                <select
                  className="input-category"
                  value={post.category}
                  name="category"
                  required
                  onChange={handleChange}
                >
                  <option>Korean</option>
                  <option>Japanese</option>
                  <option>Hairstyle</option>
                </select>
              </div>
            </div>

            <input
              className="image-link"
              placeholder="image-url"
              value={post.image}
              name="image"
              required
              onChange={handleChange}
            />

            <input
              className="outfit-input"
              placeholder="Outfit Name"
              value={post.outfit}
              name="outfit"
              onChange={handleChange}
            />    

            <input
              className="price-input"
              placeholder="Price"
              value={post.price}
              name="price"
              onChange={handleChange}
            /> 
            
            <input
              className="tags-input"
              placeholder="tag"
              value={post.tags}
              name="tags"
              onChange={handleChange}
            />
            
            <textarea
              className="content-input"
              placeholder="Enter Text"
              value={post.content}
              name="content"
              required
              onChange={handleChange}
            />

            <button type="submit" className="submit-button">
             Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;