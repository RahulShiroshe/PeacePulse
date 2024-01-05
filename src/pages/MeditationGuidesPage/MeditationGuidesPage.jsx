import React, { useState } from 'react';
import './MeditationGuides.css'

function MeditationGuidesPage() {
  const [meditationGuides] = useState([
    {
      id: 1,
      title: "Deep Healing & Relaxation Meditation",
      description: "Relaxation accelerates your body's recovery. Through guided visualization you can take control of your own healing process. The good feelings that arise from meditation will help to enhance your immune system. You can do this guided meditation as a part of your recovery programme and enjoy its healing benefits. If there are some places in your body where you find it difficult to hold the tension in your muscles for the count of five, just hold it for as long as it is comfortable for you.",
      duration: "14:38 mins",
      audioURL: "https://www.fragrantheart.com/audio/healing/deep-healing-and-relaxation-nomusic.mp3",
    },
    {
      id: 2,
      title: "Stress Relief Meditation",
      description: "This guided meditation brings your focus to your body and your breath. It enables you to relax and in so doing creates a sense of well being within yourself. Guided meditation helps to reduce stress, worry, agitation, and anxiety. Regular meditation can help lower high blood pressure or hypertension.",
      duration: "20:40 mins",
      audioURL: "https://www.fragrantheart.com/audio/relaxation/stress-relief-nomusic.mp3",
    },
    {
      id: 3,
      title: "Breathe Away Anxiety",
      description: "If you recall a time when you felt anxious, you’ll remember the feelings of agitation in your body and the never ending worrying thoughts.  Anxiety can lead to panic attacks and distress, which not only diminishes your self esteem and confidence but also compromises your immune system health. Listening to this 8 minute guided audio will help you to Breathe Away Anxiety.  This is a practice you can use whenever you are feeling anxious.  It will assist you in restoring calmness and tranquility to your whole body, leaving you relaxed and balanced once again.",
      duration: "7:49 mins",
      audioURL: "https://www.fragrantheart.com/audio/relaxation/breathe-away-anxiety-nomusic.mp3",
    },
    {
      id: 4,
      title: "Loving-Kindness Guided Meditation",
      description: "By silently repeating the words of loving kindness in this guided meditation you will deepen compassion and love for yourself, your family and loved ones, and for others around the world. It is a simple and profound practice that is deeply nourishing to your soul and spirit.",
      duration: "10:48 mins",
      audioURL: "https://www.fragrantheart.com/audio/love/loving-kindness-nomusic.mp3",
    },
    {
      id: 5,
      title: "Enhance Your Self Esteem Meditation ",
      description: "This guided audio meditation helps you to build and enhance your self esteem. It allows you to relax and to deepen your awareness so that you can take the necessary steps to build your self worth, your self respect and your self acceptance. How worthy you feel, how accepting and respectful you are of yourself, are all major factors in how you esteem yourself. This meditation helps you to release old beliefs about yourself and to make changes that will increase those positive feelings that come with a healthy self-esteem.",
      duration: "18:17 mins",
      audioURL: "https://www.fragrantheart.com/audio/self-esteem/enhance-your-self-esteem-nomusic.mp3",
    },
    {
      id: 6,
      title: "Going for a Job Interview Visualisation",
      description: "Are you planning a new career and about to go for a job interview? Going for an interview can be quite a nerve-wracking experience no matter how well qualified, or experienced we are. Use this guided visualization to enhance your success, to boost your confidence, and also to deepen your ability to relax, focus, and visualize. After doing this visualization a few times you may be amazed at how calm and self-assured you will be at your interview.",
      duration: "23:22 mins",
      audioURL: "https://www.fragrantheart.com/audio/self-esteem/going-for-a-job-interview-nomusic.mp3",
    },
  ]);

  const [selectedGuide, setSelectedGuide] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (audioURL) => {
    setSelectedGuide(audioURL);
    setIsPlaying(true);
  };

  const stopAudio = () => {
    setSelectedGuide(null);
    setIsPlaying(false);
  };

  return (
    <div className='meditation-guide-main'>
      <h1 className='meditation-guides-title'>Meditation Guides</h1>
      <div className="meditation-guides-container">
        {meditationGuides.map((guide) => (
          <div key={guide.id} className="meditation-guide">
            <h2>{guide.title}</h2>
            <div>
              {selectedGuide === guide.audioURL && isPlaying ? (
                <div>
                  <audio src={guide.audioURL} controls autoPlay />
                  <button onClick={stopAudio}>Stop Audio</button>
                </div>
              ) : (
                <button onClick={() => playAudio(guide.audioURL)}>Play Audio</button>
              )}
            </div>
            <p><strong>Duration:</strong> {guide.duration}</p>
            <p>{guide.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeditationGuidesPage;
