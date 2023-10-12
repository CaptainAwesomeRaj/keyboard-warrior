import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import { Alert, Container, Stack } from 'react-bootstrap';
import TypeContainer from './components/typeContainer/TypeContainer';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { AiOutlineReload } from 'react-icons/ai';
import ResultContainer from './components/resultContainer/ResultContainer';
import TimerContainer from './components/timerContainer/TimerContainer';
function App() {
  const {user} = useContext(AppContext);
  const {setReset,showNotAvailableMessage ,setShowNotAvailableMessage} = useContext(AppContext);
  return (
    <>
      <div className="app-wrapper">
        <ResultContainer/>
        <Alert show={showNotAvailableMessage} onClose={()=>{setShowNotAvailableMessage(false)} } dismissible> Sorry! Functionality not Available </Alert>
        <Container style={{height:'100%'}} className='pt-3'>
          <Stack gap={5} style={{height:'100%'}} className='justify-content-between'>
            <Header/>
            <Container>
              <div className="display-6">Hello, {user}</div>
            </Container>
            <TimerContainer/>
            <TypeContainer/>
            <div className="d-flex justify-content-center cursor-pointer">
              <AiOutlineReload className='h2' onClick={()=>{setReset((x)=>x + 1)}}/>
            </div>
            <Container>
              <Footer/>
            </Container>
          </Stack>
        </Container>
      </div>
    </>
  ); 
}

export default App;
