import React from 'react';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import Event from './CardFunction.jsx';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';

const Home = () => (
  <div className="container-fluid justify-content-around px-3 py-3 bg-black text-light">
    <h1 className="text-center text-danger mb-4 mt-1">
      Few Listed Events
      <i className="fas fa-chevron-down bounce text-success ms-3"></i>
    </h1>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      <div className="col mb-4">
        <Event
          title="UI Battles"
          date="9th Dec"
          time="10:30 AM - 2:30 PM"
          description="A thrilling web-based challenge that will put your design and coding skills to the test. Participate in this competition to showcase a compelling UI using HTML, CSS, JavaScript, and/or other CSS Libraries."
          image={image1}
          link="/register" 
        />
      </div>
      <div className="col mb-4">
        <Event
          title="Code Quest"
          date="9th Dec"
          time="07:30 PM - 9:30 PM"
          description="Armour up with all your coding gear for a showdown in this time-bound quest to test your coding skills. Prepare to face coding challenges, take down your opponents, and emerge victorious."
          image={image2}
          link="/register" 
        />
      </div>
      <div className="col mb-4">
        <Event
          title="Firepower"
          date="9th Dec"
          time="08:30 AM - 12:30 PM"
          description="Join our Valorant Offline Tournament for top-tier gameplay, strategic brilliance, and the chance to win incredible prizes! Experience intense competition,  and the thrill of victory!."
          image={image3}
          link="/register" 
        />
      </div>
      <div className="col mb-4">
        <Event
          title="Tech-Maze"
          date="9th Dec"
          time="09:30 AM - 4:30 PM"
          description="Dive into a high-tech adventure in this race against time to navigate through puzzles and tackle tech-themed challenges, which will present you with the key to escape the maze."
          image={image4}
          link="/register" 
        />
      </div>
    </div>
  </div>
);

export default Home;