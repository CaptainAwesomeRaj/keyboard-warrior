import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import { Container, Stack } from 'react-bootstrap';
import TestContainer from './components/test/Test';
function App() {
  return (
    <>
      <div className="app-wrapper">
        {/* <Alert show={showNotAvailableMessage} onClose={()=>{setShowNotAvailableMessage(false)} } dismissible> Sorry! Functionality not Available </Alert> */}
        <Container style={{height:'100%'}} className='pt-3'>
          <Stack gap={5}>
            <Header/>
            <TestContainer/>
            <Footer/>
          </Stack>
        </Container>
      </div>
    </>
  ); 
}

export default App;
