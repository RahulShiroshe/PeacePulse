import React, { useState } from 'react';
import './HomePege.css'

function MindfulHomePage() {
  const [watered, setWatered] = useState(false);

  const handleWatering = () => {
    setWatered(true);
  };

  const completeMindfulnessSession = () => {
    handleWatering();
    // reset the plant after some time 
    setTimeout(() => {
      setWatered(false); 
    }, 24 * 60 * 60 * 1000); 
  };

  return (
    <div className="mindful-homepage">
      <header className="welcome-section">
        <h1>Welcome to <span>PeacePulse</span></h1>
        <p>Healthy Mind, Healthy Life</p>
      </header>

      <div className="water-plant">
        <img
          src={watered ? 'https://th.bing.com/th/id/OIP.n8UDR5xfSaqm2c80ImmcgwHaGF?w=220&h=181&c=7&r=0&o=5&dpr=1.5&pid=1.7' : 'https://th.bing.com/th/id/OIP.xMJoGRTQ6LBQb6amFfI3eAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7'}
          alt={watered ? 'Watered Plant' : 'Unwatered Plant'}
          onClick={completeMindfulnessSession} 
        />
        <p>Click to water your plant.</p>
      </div>

      <div className="unique-features">
        <div className="feature">
          <h2>Meditation Guide</h2>
          <p>Discover guided meditation sessions to calm your mind and body.</p>
        </div>
        <div className="feature">
          <h2>Mindfulness Sleep</h2>
          <p>Explore calming sounds and guided exercises to aid relaxation and sleep.</p>
        </div>
        <div className="feature">
          <h2>Calming Animations</h2>
          <p>Immerse yourself in serene animations designed to reduce stress and anxiety.</p>
        </div>
        <div className="feature">
          <h2>Breathwork Techniques</h2>
          <p>Explore various breathing exercises for stress relief and mindfulness.</p>
        </div>
      </div>
    </div>
  );
}

export default MindfulHomePage;
