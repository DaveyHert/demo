import EventItem from "./EventItem";

function EventList({ events, removeItem }) {
  return (
    <div className='event-list'>
      {events.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          venue={event.venue}
          date={event.date}
          id={event.id}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
}

export default EventList;
