import React from 'react';
import BlogImage from '../assets/images/blogimage.jpg'

function BlogContainer(props) {
  return (
    <div className="blog-div">
      <img className="blog-image" src={BlogImage} alt="blog image" />
      <h2 className="blog-title">Winter Fashion Tips</h2>
      <p className="blog-text">When it comes to wearing a flirty dress in winter, layering is key. Pair a fit’n flare number with a cropped sweater, or throw an oversized cardi or pullover on top so that your lightweight dress peeks out at the bottom. Add sneakers or ankle boots to keep your feet warm.</p>
    </div>
  );
}

export default BlogContainer;