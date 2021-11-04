import { useState } from "react";

function AddEvent(props) {
  const [title, setTitle] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");

  const submitEvent = (e) => {
    e.preventDefault();
    // check if any submitted field is empty
    if (!!!title || !!!venue || !!!date)
      return alert("Error, fields can not be empty");

    // else create event
    const event = {
      title,
      venue,
      date,
      id: Math.floor(Math.random() * 2000),
    };

    // pass event to parent component handler
    props.addEvent(event);
  };

  return (
    <form className='form' onSubmit={submitEvent}>
      <h1 className='title'>Add New Event</h1>
      <div className='form-group'>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='venue'>Venue:</label>
        <input
          type='text'
          id='venue'
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='date'>Date:</label>
        <input
          type='date'
          id='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button className='btn light'>Submit</button>
    </form>
  );
}

export default AddEvent;
