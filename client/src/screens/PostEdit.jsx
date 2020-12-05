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
  
  


  return (
    <div>
      
    </div>
  );
}

export default PostEdit;