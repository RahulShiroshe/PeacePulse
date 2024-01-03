import React, { useState } from 'react';
import './GratitudeJournal.css'

function GratitudeJournalPage() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entryText) => {
    const newEntry = {
      id: new Date().getTime(), 
      text: entryText,
      date: new Date().toLocaleDateString(),
    };
    setEntries([...entries, newEntry]);
  };

  return (
    <div className="gratitude-journal">
      <h1>Gratitude Journal</h1>
      <EntryForm addEntry={addEntry} />
      <div className="entries-list">
        {entries.length > 0 ? (
          entries.map((entry) => (
            <div key={entry.id} className="journal-entry">
              <p>{entry.text}</p>
              <p>Date: {entry.date}</p>
            </div>
          ))
        ) : (
          <p>No entries yet. Start adding gratitude notes!</p>
        )}
      </div>
    </div>
  );
}

function EntryForm({ addEntry }) {
  const [entryText, setEntryText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entryText.trim() !== '') {
      addEntry(entryText);
      setEntryText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Write what you're grateful for..."
        value={entryText}
        onChange={(e) => setEntryText(e.target.value)}
      ></textarea>
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default GratitudeJournalPage;
