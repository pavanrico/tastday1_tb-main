import React, { useState } from 'react';

function EventList({ events, onEventClick, onFilter, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <h1>Event List</h1>
      <input
        type="text"
        placeholder="Search events"
        value={searchQuery}
        onChange={handleSearchChange}
      /><br></br>
      <div>
        <button onClick={() => onFilter('Music')}>Music</button>
        <button onClick={() => onFilter('Art')}>Art</button>
        <button onClick={() => onFilter('Sports')}>Sports</button>
      </div>
      <ul>
        {events.map((event) => (
          <u><li key={event.id} onClick={() => onEventClick(event)}>
            {event.title} - {event.category} - ${event.price} - {event.seats} seats available
          </li></u>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
