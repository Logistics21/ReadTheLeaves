import React from 'react';
import EventItem from './event_item';

const EventIndex = (
  { events, user, attendEvent, leaveEvent, removeEvent }) => {
  return (
    <div className="current-event-container">
      { Object.values(events).map((event) => {
        debugger
          return (<EventItem
            key={event.id}
            event={event}
            user={user}
            attendEvent={attendEvent}
            leaveEvent={leaveEvent}
            removeEvent={removeEvent} />
        )}
       )
      }
    </div>
  );
};

export default EventIndex;
