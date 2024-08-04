import React from 'react';
import Event from './CardFunction';
import './App.css';

const events = [
  {
    title: "UI Battles",
    date: "9th Dec",
    time: "10:30 AM - 2:30 PM",
    description: "A thrilling web-based challenge that will put your design and coding skills to the test. Participate in this competition to showcase a compelling UI using HTML, CSS, JavaScript, and/or other CSS Libraries.",
    image: require('../images/1.jpg'),
    link: "/register"
  },
  {
    title: "Code Quest",
    date: "9th Dec",
    time: "07:30 PM - 9:30 PM",
    description: "Armour up with all your coding gear for a showdown in this time-bound quest to test your coding skills. Prepare to face coding challenges, take down your opponents, and emerge victorious.",
    image: require('../images/2.jpg'),
    link: "/register"
  },
  {
    title: "Firepower",
    date: "9th Dec",
    time: "08:30 AM - 12:30 PM",
    description: "Join our Valorant Offline Tournament for top-tier gameplay, strategic brilliance, and the chance to win incredible prizes! Experience intense competition, and the thrill of victory!.",
    image: require('../images/3.jpg'),
    link: "/register"
  },
  {
    title: "Tech-Maze",
    date: "9th Dec",
    time: "09:30 AM - 4:30 PM",
    description: "Dive into a high-tech adventure in this race against time to navigate through puzzles and tackle tech-themed challenges, which will present you with the key to escape the maze.",
    image: require('../images/4.jpg'),
    link: "/register"
  },
  // New Event Data
  {
    title: "Data Duel",
    date: "10th Dec",
    time: "11:00 AM - 3:00 PM",
    description: "Challenge your data analysis skills in this competition. Use your knowledge to make sense of complex datasets and derive actionable insights.",
    image: require('../images/5.jpg'),
    link: "/register"
  },
  {
    title: "Design Sprint",
    date: "10th Dec",
    time: "02:00 PM - 5:00 PM",
    description: "Participate in a fast-paced design sprint to create innovative solutions in a short amount of time. Collaborate with peers and refine your design skills.",
    image: require('../images/6.jpg'),
    link: "/register"
  },
  {
    title: "Dev Challenge",
    date: "11th Dec",
    time: "09:00 AM - 1:00 PM",
    description: "Test your development skills in this coding challenge. Solve problems and build solutions that showcase your expertise in various programming languages.",
    image: require('../images/7.jpg'),
    link: "/register"
  },
  {
    title: "Cyber Quest",
    date: "11th Dec",
    time: "03:00 PM - 6:00 PM",
    description: "Dive into cybersecurity with challenges that test your ability to protect and attack. Learn about real-world security issues and enhance your skills.",
    image: require('../images/8.jpg'),
    link: "/register"
  },
  {
    title: "Innovation Expo",
    date: "12th Dec",
    time: "10:00 AM - 4:00 PM",
    description: "Showcase your innovative projects and ideas. Meet industry leaders and gain valuable feedback on your work from experts.",
    image: require('../images/9.jpg'),
    link: "/register"
  },
];

const Home = () => (
  <div className="container-fluid justify-content-around px-3 py-3 bg-black text-light">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      {events.map((event, index) => (
        <div className="col mb-4" key={index}>
          <Event
            title={event.title}
            date={event.date}
            time={event.time}
            description={event.description}
            image={event.image}
            link={event.link}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Home;
