import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  const goToItemsPage = () => {
    history.push('/items-list');
  }

  setTimeout(() => {
    goToItemsPage();
  }, 2000);
  
	return (
		<div className="home-wrapper">
			<img
				className="home-image"
				src="https://source.unsplash.com/F6-U5fGAOik"
				alt=""
			/>
			<button className="md-button shop-button">Shop now!</button>
		</div>
	);
}

export default Home;
