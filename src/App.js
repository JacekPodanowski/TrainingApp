// src/App.js
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';

const localizer = momentLocalizer(moment);

function App() {
  // Przykładowe wydarzenia treningowe
  const treningi = [
    {
      id: 1,
      title: 'Trening biegowy - interwały',
      start: new Date(2025, 4, 8, 10, 0), // 8 maja 2025, 10:00
      end: new Date(2025, 4, 8, 11, 30),  // 8 maja 2025, 11:30
      desc: 'Interwały: 10x400m z przerwami 1 min',
    },
    {
      id: 2,
      title: 'Trening biegowy - tempo',
      start: new Date(2025, 4, 10, 18, 0), // 10 maja 2025, 18:00
      end: new Date(2025, 4, 10, 19, 0),   // 10 maja 2025, 19:00
      desc: 'Bieg tempowy: 5 km w tempie 4:30/km',
    },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Aplikacja do planowania treningów</h1>
        <p>Panel zarządzania treningami triathlonowymi</p>
      </header>
      
      <main className="app-content">
        <div className="sidebar left-sidebar">
          <h2>Biblioteka treningów</h2>
          <ul className="trening-lista">
            <li>Interwały</li>
            <li>Tempo</li>
            <li>Długi bieg</li>
            <li>Rozbieganie</li>
          </ul>
        </div>
        
        <div className="calendar-container">
          <Calendar
            localizer={localizer}
            events={treningi}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            views={['month', 'week', 'day']}
            defaultView='week'
            defaultDate={new Date(2025, 4, 8)}
            tooltipAccessor={event => event.desc}
          />
        </div>
        
        <div className="sidebar right-sidebar">
          <h2>Profil zawodnika</h2>
          <div className="zawodnik-info">
            <p><strong>Imię:</strong> Jan Kowalski</p>
            <p><strong>Cel:</strong> Półmaraton &lt; 1:45</p>
            <p><strong>Nadchodzące zawody:</strong></p>
            <p>Półmaraton Warszawski - 15 dni</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;