import React, { useState, useEffect } from 'react';
import './HomePege.css'

function MindfulHomePage() {
  const [watered, setWatered] = useState(false);
  const [waterCount, setWaterCount] = useState(0);
  const [canWater, setCanWater] = useState(true);
  const [nextWaterTime, setNextWaterTime] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState('');

  const handleWatering = () => {
    if (canWater) {
      setWatered(true);
      setWaterCount(waterCount + 1);
      setCanWater(false);
      const now = new Date();
      const nextTime = new Date(now.getTime() + 3600000); 
      setNextWaterTime(nextTime);
    }
  };

  useEffect(() => {
    let timer;
    if (watered) {
      timer = setTimeout(() => {
        setWatered(false);
        setCanWater(true);
      }, 3600000);
    }
    return () => clearTimeout(timer);
  }, [watered]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (nextWaterTime) {
        const now = new Date();
        const timeDiff = Math.floor((nextWaterTime - now) / 1000);
        if (timeDiff > 0) {
          const minutes = Math.floor(timeDiff / 60);
          const seconds = timeDiff % 60;
          setTimeRemaining(`Next watering in ${minutes} min ${seconds} sec`);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [nextWaterTime]);


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
          onClick={handleWatering} 
        />
        <p>Click to care for your virtual plant. You've watered it {waterCount} times!<br />{watered ? `${timeRemaining}`: ``}</p>
      </div>

      <div className="unique-features">
        <div className="feature">
          <h2>Meditation Guide</h2>
          <p>Discover guided meditation sessions to calm your mind and body.</p>
        </div>
        <div className="feature">
          <h2>Breathwork Techniques</h2>
          <p>Explore various breathing exercises for stress relief and mindfulness.</p>
        </div>
        <div className="feature">
          <h2>Calming Animations</h2>
          <p>Immerse yourself in serene animations designed to reduce stress and anxiety.</p>
        </div>
        <div className="feature">
          <h2>Mindfulness Sleep</h2>
          <p>Explore calming sounds and guided exercises to aid relaxation and sleep.</p>
        </div>
        <div className="feature">
          <h2>Gratitude Journal</h2>
          <p>Start your gratitude journaling journey to promote positivity and mindfulness.</p>
        </div>
      </div>
      <div className="challenges">
        <h2>Challenges Tracker</h2>
        <ul>
          <li>Meditation: <span>0/10</span></li>
          <li>Breathing Exercises: <span>0/8</span></li>
          <li>Gratitude Journal: <span>0/5</span></li>
        </ul>
        <button>All Challenges</button>
      </div>
    </div>
  );
}

export default MindfulHomePage;
