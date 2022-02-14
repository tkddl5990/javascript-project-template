import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goDetail = () => navigate('/detail');

  return (
    <div>
      Home Page
      {process.env.REACT_APP_SERVICE_ENV}
      <button type='button' onClick={goDetail}>
        go Detail
      </button>
    </div>
  );
}

export default Home;
