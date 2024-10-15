import { useState } from "react";
import Modal from "./components/Modal";
function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleOpenModal}> Open Modal !</button>
        <Modal 
          open={modalOpen}
          onClose={handleCloseModal}>
          <h1>Hello From Modal</h1>
        </Modal>
      </header>
    </div>
  );
}

export default App;
