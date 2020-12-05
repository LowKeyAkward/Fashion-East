import React from 'react';
import MainContainer from '../containers/MainContainer';
import TrendingContainer from '../containers/TrendingContainer';

function Home(props) {
  return (
    <div>
      <TrendingContainer/>
      <MainContainer/>
    </div>
  );
}

export default Home;