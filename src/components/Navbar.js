export default function Navbar({ title, addEventForm }) {
  return (
    <nav style={navStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <button className='btn light' onClick={addEventForm}>
        Add Event
      </button>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Event List App",
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "fff",
  boxShadow: "1px 1px 5px rgba(0,0,0,0.1)",
  color: "royalblue",
  height: "60px",
};

const titleStyle = {
  fontSize: "1.5rem",
  margin: "0 10px",
};
