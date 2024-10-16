import React from 'react';

function EventDetails({ event, onBook }) {
  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Category: {event.category}</p>
      <p>Price: ${event.price}</p>
      <p>Available seats: {event.seats}</p>
      {event.seats > 0 ? (
        <button onClick={() => onBook(event.id)}>Book Ticket</button>
      ) : (
        <p>This event is fully booked.</p>
      )}
    </div>
  );
}

export default EventDetails;
