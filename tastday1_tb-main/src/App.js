import React, { useState, useEffect } from 'react';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';
import Login from './components/Login';
import Register from './components/Register';
// Mock API Data
const mockEvents = [
  { id: 1, title: 'Concert', description: 'Music concert', category: 'Music', date: '2024-10-20', seats: 5, price: 100 },
  { id: 2, title: 'Art Exhibition', description: 'Modern art show', category: 'Art', date: '2024-11-01', seats: 0, price: 50 },
  { id: 3, title: 'Football Match', description: 'Exciting football game', category: 'Sports', date: '2024-12-12', seats: 10, price: 200 },
];

function App() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLogin, setShowLogin] = useState(true); // Toggle between login and registration

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setEvents(mockEvents);
      setFilteredEvents(mockEvents);
      setLoading(false);
    }, 1000);
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleBookTicket = (eventId) => {
    if (!loggedIn) {
      alert('Please log in to book tickets');
      return;
    }
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId && event.seats > 0 ? { ...event, seats: event.seats - 1 } : event
      )
    );
  };

  const handleFilter = (category) => {
    setFilteredEvents(events.filter((event) => event.category === category));
  };

  const handleSearch = (query) => {
    setFilteredEvents(events.filter((event) => event.title.toLowerCase().includes(query.toLowerCase())));
  };

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events</p>;

  return (
    <div className="App">
      {!loggedIn ? (
        showLogin ? (
          <>
            <Login setLoggedIn={setLoggedIn} />
            <p>
              Don’t have an account? <button onClick={() => setShowLogin(false)}>Register</button>
            </p>
          </>
        ) : (
          <>
            <Register setLoggedIn={setLoggedIn} />
            <p>
              Already have an account? <button onClick={() => setShowLogin(true)}>Login</button>
            </p>
          </>
        )
      ) : selectedEvent ? (
        <EventDetails event={selectedEvent} onBook={handleBookTicket} />
      ) : (
        <EventList
          events={filteredEvents}
          onEventClick={handleEventClick}
          onFilter={handleFilter}
          onSearch={handleSearch}
        />
      )}
    </div>
  );
}

export default App;
