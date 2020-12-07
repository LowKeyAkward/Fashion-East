import React from 'react';
import "./RecentPosts.css"
import { Link } from 'react-router-dom'

function RecentPosts(props) {
  return (
      <Link to={`/posts/${props.id}/details`}>
      <img
        className="recent-image"
        src={props.image}
        alt={props.title}
      />
      </Link>
  );
}

export default RecentPosts;