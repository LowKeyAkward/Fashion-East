import React from 'react';
import BlogContainer from '../containers/BlogContainer';
import MainContainer from '../containers/MainContainer';
import TrendingContainer from '../containers/TrendingContainer';
import "./Home.css"

function Home(props) {
  return (
    <div className = "home-div">
      <TrendingContainer />
      <BlogContainer/>
      <MainContainer/>
    </div>
  );
}

export default Home;