import React from 'react';
import EventItem from './event_item';

const EventIndex = ({events, currentUser, attendEvent,
                     leaveEvent, removeEvent}) => {
  return (
    <div className="current-event-container">
      {events.map((event, idx) => (
        <EventItem key={`event-item-${idx}`}
                   event={event}
                   currentUser={currentUser}
                   attendEvent={attendEvent}
                   leaveEvent={leaveEvent}
                   removeEvent={removeEvent} />
       ))
      }
    </div>
  );
};

export default EventIndex;
