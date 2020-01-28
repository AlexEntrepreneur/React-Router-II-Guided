import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  console.log(history);
  
  const goToItemsPage = () => {
    history.push('/items-list');
  }

  const goToGoogle = () => {
    // history.createHref('https://google.com');
  }
  
	return (
		<div className="home-wrapper">
			<img
				className="home-image"
				src="https://source.unsplash.com/F6-U5fGAOik"
				alt=""
			/>
			<button className="md-button shop-button" onClick={goToItemsPage}>Shop now!</button>
		</div>
	);
}

export default Home;
