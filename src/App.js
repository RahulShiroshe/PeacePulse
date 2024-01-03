import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage.jsx';
import BreathingExercisesPage from './pages/BreathingExercise/BreathingExercisesPage.jsx';
import CalmingAnimationsPage from './pages/CalmingAnimation/CalmingAnimationsPage.jsx';
import GratitudeJournalPage from './pages/GratitudeJournal/GratitudeJournalPage.jsx';
import MindfulnessForSleepPage from './pages/MindfulnessForSleepPage/MindfulnessForSleepPage.jsx';
import MeditationGuidesPage from './pages/MeditationGuidesPage/MeditationGuidesPage.jsx';
import Navbar from './pages/Navbar/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/breathing-exercises" element={<BreathingExercisesPage/>} />
        <Route path="/meditation-guides" element={<MeditationGuidesPage/>} />
        <Route path="/mindfulness-sleep" element={<MindfulnessForSleepPage/>} />
        <Route path="/calming-animations" element={<CalmingAnimationsPage/>} />
        <Route path="/gratitude-journal" element={<GratitudeJournalPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
