import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Notification = ({ show, onClose }) => {
  if (!show) return null;

  // Example notifications
  const notifications = [
    "Hackathon starts in 2 days! Get ready!",
    "Registration closes in 1 hour. Sign up now!",
    "New challenges have been added. Check them out!",
    "Don't forget to review the rules before starting.",
    "bye 🖐️"
  ];

  return (
    <div className="position-fixed p-4 bg-light border border-info rounded shadow-lg" 
         style={{ top: '10%', right: '2%', maxHeight: '90vh', overflowY: 'auto', zIndex: 1000, width: '300px' }}>
      <Button 
        onClick={onClose} 
        className="position-absolute top-0 end-1 p-2 fs-4 text-dark border-0 bg-transparent " 
        style={{ top: '10px', right: '10px', zIndex: 1050 }}
      >
        &times;
      </Button>
      <h5 className="mb-4 text-center text-success">Notifications</h5>
      <ListGroup variant="flush">
        {notifications.map((message, index) => (
          <ListGroup.Item key={index} className="bg-light border border-success text-black mb-2 rounded">
            {message}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Notification;
