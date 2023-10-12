import React, { useContext,} from 'react';
import Modal from 'react-bootstrap/Modal';
import { AppContext } from '../../context/AppContext';

const ResultContainer = () => {
    const {showResult,setShowResult,setReset,correctWords,incorrectWords,totalTime,timer} = useContext(AppContext);
    function netSpeed() {
        return parseInt(correctWords / ((totalTime - timer) / 60));
    }
    function grossSpeed(){
        return parseInt((correctWords + incorrectWords) / ((totalTime - timer) / 60));
    }
    
  return (
    <Modal show={showResult} onHide={()=>{setShowResult(false); setReset((x)=>x + 1)}} centered>
        <div style={{backgroundColor:"#cfe2ff",color:"#052c65"}}>
            <Modal.Header closeButton>
                <Modal.Title>Results:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <pre>Net Speed       : {netSpeed()} &#40; words per minute &#41;</pre>
                <pre>Gross Speed     : {grossSpeed()} &#40; words per minute &#41;</pre>
                <pre>Correct Words   : { correctWords}</pre>
                <pre>Incorrect Words : { incorrectWords}</pre>
            </Modal.Body>
        </div>
    </Modal>
  );
};

export default ResultContainer;
