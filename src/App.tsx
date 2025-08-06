import './App.css'
import { Modal } from './components';
import { useModalContext } from './components/Modal/context';
function App() {
  const {setState} = useModalContext();

  const openModal = () => {
    setState(true);
  }

  return (
    <>
      <Modal>
        <div>
          <h1>Welcome to the Modal!</h1>
          <p>This is a simple modal example.</p> 
        </div>
      </Modal>
      <button onClick={openModal}>Open Modal</button>
    </>
  )
}

export default App