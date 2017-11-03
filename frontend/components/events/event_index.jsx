import React from 'react';
import EventItem from './event_item';

const EventIndex = ({events, user, attendEvent,
                     leaveEvent, removeEvent}) => {
  return (
    <div className="current-event-container">
      {events.map((event, idx) => (
        <EventItem key={`event-item-${idx}`}
                   event={event}
                   user={user}
                   attendEvent={attendEvent}
                   leaveEvent={leaveEvent}
                   removeEvent={removeEvent} />
       ))
      }
    </div>
  );
};

export default EventIndex;
