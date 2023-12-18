import React from 'react';
import './home.css';
import Carousel from '../carousel/Carousel.jsx';
import Footer from '../footer/Footer.jsx';
import FullScreenDialog from '../chatbot/Chatbot.jsx';

const Home = () => {
  return (
    <div className="home-container">
    <h1>Welcome to Ministry of Power</h1>
      <div className="heading-container">
        <p>"We must encourage energy conservation and sustainable development. Young people are the ones who are most environmentally conscious in Ireland so that to some extent they are educating their parents. They are tackling issues of waste disposal and so on. The schools help because they put a lot of stress on environmental awareness."</p>
      </div>
      <div className="carousel-container">
        <Carousel />
      </div>
      <FullScreenDialog/>
      <Footer/>
    </div>
  );
};

export default Home;
