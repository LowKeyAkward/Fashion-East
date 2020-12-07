import React from 'react';
import BlogImage from '../assets/images/blogimage.jpg'
import "./BlogContainer.css"

function BlogContainer(props) {
  return (
    <div className="blog-div">
      <img className="blog-image" src={BlogImage} alt="blog" />
      <div className="blog-content">
        <h2 className="blog-title">Winter Fashion Tips</h2>
        <p className="blog-text">
          When it comes to wearing a flirty dress in winter, layering is key.
          Pair a fit’n flare number with a cropped sweater, or throw an 
          oversized cardi or pullover on top so that your lightweight dress 
          peeks out at the bottom. Add sneakers or ankle boots to keep your 
          feet warm. Rock any strappy or sleeveless dress over a 
          thin fitted turtleneck (bulky items will make your summery 
          dress bulge) and pair with cool combat boots for a slightly 
          grunge look. This is a staple Korean winter fashion look 
          which allows for lots of creativity. Another great idea is 
          to match a basic white shirt with a sleeveless white dress: 
          it will give the illusion of a sophisticated one piece 
          looking très chic. Layer with a smart trench coat and 
          embellished boots.
          </p>
      </div>
      
    </div>
  );
}

export default BlogContainer;