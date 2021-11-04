function EventItem({ title, venue, date, id, removeItem }) {
  return (
    <div className='event-item'>
      <h3 className='title'>{title}</h3>
      <p>{venue}</p>
      <span>{date}</span>
      <span className='delete' onClick={() => removeItem(id)}>
        x
      </span>
    </div>
  );
}

export default EventItem;
