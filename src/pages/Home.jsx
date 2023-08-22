import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/api';

const Home = () => {
  useEffect(() => {
    console.log('Home')
    getMovies()
  });

  return <div>HomePage</div>;
};

export default Home;
