import React from 'react';
import { Link } from 'react-router-dom'

function RecentPosts(props) {
  return (
    <div className = "recent-posts">
      <Link to={`/posts/${props.id}`} />
      <img
        className="recent-image"
        src={props.image}
        alt={props.title}
      />
    </div>
  );
}

export default RecentPosts;