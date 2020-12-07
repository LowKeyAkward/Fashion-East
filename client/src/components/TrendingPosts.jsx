import React from 'react';
import { Link } from 'react-router-dom'
import "./TrendingPosts.css"

function TrendingPosts(props) {
  return (
      <Link to={`/posts/${props.id}/details`}>
      <img
        className="trending-image"
        src={props.image}
        alt={props.title}
      />
      </Link>
  );
}

export default TrendingPosts;