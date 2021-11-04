export default function Modal({ children, closeModal }) {
  const closeBackdrop = (e) => {
    if (!e.target.classList.contains("modal")) {
      return;
    }
    closeModal();
  };

  return (
    <div className='modal' onClick={closeBackdrop}>
      {children}
      <button className='btn dark' onClick={closeModal}>
        Close
      </button>
    </div>
  );
}
