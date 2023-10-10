import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import { Container, Stack } from 'react-bootstrap';
import TypeContainer from './components/typeContainer/TypeContainer';
function App() {
  return (
    
    <>
      <div className="app-wrapper">
        <Container style={{height:'100%'}} className='pt-3'>
          <Stack gap={3} style={{height:'100%'}} className='justify-content-between'>
            <Header/>
            <TypeContainer/>
            <Footer/>
          </Stack>
        </Container>
      </div>
    </>
  ); 
}

export default App;
