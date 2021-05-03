import React from 'react';
import {useHistory} from 'react-router-dom';

function Home() {

  const history = useHistory();

  const handleClick = () => {
    alert('Going to animals page!');
    history.push('/animals');
  }
  
  return (
    <div>
      <h1>HOME</h1>
      <img src="https://pixy.org/download/4718707/" width={500}/>
      <button onClick={handleClick}>Go to the Animals Page</button>
    </div>
  );
}

export default Home;
