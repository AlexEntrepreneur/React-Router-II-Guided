import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const goToItemsPage = () => {
    history.push("/items-list");
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt=""
      />
      <button className="md-button shop-button" onClick={goToItemsPage}>
        Shop now!
      </button>
    </div>
  );
}

export default Home;
