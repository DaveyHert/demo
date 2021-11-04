import "./App.css";
import { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import AddEvent from "./components/AddEvent";
import EventList from "./components/EventList";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const data = useFetch("https://api.github.com/users");

  console.log(data);

  // AddEvent
  const submitEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
    closeForm();
  };

  const closeForm = () => setShowForm(false);
  const openForm = () => setShowForm(true);

  const removeItem = (id) => {
    console.log(id);
    setEvents((prevLists) => prevLists.filter((list) => list.id !== id));
  };

  return (
    <Fragment>
      <Navbar addEventForm={openForm} />
      {showForm && (
        <Modal title='Add Event' closeModal={closeForm}>
          <AddEvent addEvent={submitEvent} />
        </Modal>
      )}
      <EventList events={events} removeItem={removeItem} />
    </Fragment>
  );
}

export default App;
