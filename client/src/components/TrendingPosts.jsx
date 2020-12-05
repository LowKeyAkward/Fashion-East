import React from 'react';
import { Link } from 'react-router-dom'

function TrendingPosts(props) {
  return (
    <div className = "trending-posts">
      <Link to={`/posts/${props.id}/details`}>
      <img
        className="trending-image"
        src={props.image}
        alt={props.title}
      />
      </Link>
    </div>
  );
}

export default TrendingPosts;