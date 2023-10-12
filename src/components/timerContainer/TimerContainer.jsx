import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { Container, Stack ,Row, Col} from "react-bootstrap";
import { Form } from 'react-bootstrap';
import './TimerContainer.css';


export default function TimerContainer() {
    const {totalTime,timer,setTotalTime,isTestRunning} = useContext(AppContext);
    
    const handleTimerChange = (event) => {
        let time = parseInt(event.target.value);
        setTotalTime(time);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const remainingSeconds = timeInSeconds % 60;
    
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
      };

    if(isTestRunning)
    return(
        <Container> 
            <Row className="justify-content-center">
                <Col xs="auto">
                <div className="timer h5">{formatTime(timer)}</div>
                </Col>
            </Row>
        </Container>
    )
    else{
        return(
            <Container>
            <Stack direction="horizontal">
                <Form>
                    <Form.Group>
                    <Form.Label>Select Timer:</Form.Label>
                    <Form.Control as="select" className="timer-select" onChange={handleTimerChange} value={totalTime}>
                        <option className="timer-select-option" value={60}>1 Minute</option>
                        <option className="timer-select-option" value={120}>2 Minutes</option>
                        <option className="timer-select-option" value={300}>5 Minutes</option>
                    </Form.Control>
                    </Form.Group>
                </Form>
            </Stack>
            </Container>
        )
    }
    
}