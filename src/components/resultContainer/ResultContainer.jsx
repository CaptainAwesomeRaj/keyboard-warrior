import React, { useContext,} from 'react';
import Modal from 'react-bootstrap/Modal';
import { AppContext } from '../../context/AppContext';

const ResultContainer = () => {
    const {showResult,setShowResult,setReset,correctWords,incorrectWords,totalTime,timer} = useContext(AppContext);
  return (
    <Modal show={showResult} onHide={()=>{setShowResult(false); setReset((x)=>x + 1)}} centered>
        <div style={{backgroundColor:"#cfe2ff",color:"#052c65"}}>
            <Modal.Header closeButton>
                <Modal.Title>Results:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <pre>Net Speed   : { correctWords / (totalTime - timer + 1)} &#40; words per minute &#41;</pre>
                <pre>Gross Speed : {(correctWords + incorrectWords) / (totalTime - timer + 1)} &#40; words per minute &#41;</pre>
            </Modal.Body>
        </div>
    </Modal>
  );
};

export default ResultContainer;
