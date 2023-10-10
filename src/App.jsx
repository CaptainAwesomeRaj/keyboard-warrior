import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
import { Container, Stack } from 'react-bootstrap';
import TypeContainer from './components/typeContainer/TypeContainer';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
function App() {
  const {user} = useContext(AppContext);

  return (
    <>
      <div className="app-wrapper">
        <Container style={{height:'100%'}} className='pt-3'>
          <Stack gap={5} style={{height:'100%'}} >
            <Header/>

            <div className="display-6">Hello, {user}</div>
            <TypeContainer/>
            <Footer/>
          </Stack>
        </Container>
      </div>
    </>
  ); 
}

export default App;
