import React, { useContext,} from 'react';
import Modal from 'react-bootstrap/Modal';
import { AppContext } from '../../context/AppContext';

const ResultContainer = () => {
    const {showResult,setShowResult,correctWords,incorrectWords,netSpeed,grossSpeed} = useContext(AppContext);
  return (
    <Modal show={showResult} onHide={()=>{setShowResult(false);}} centered>
        <div style={{backgroundColor:"#cfe2ff",color:"#052c65"}}>
            <Modal.Header closeButton>
                <Modal.Title>Results:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <pre>Net Speed       : {netSpeed} &#40; words per minute &#41;</pre>
                <pre>Gross Speed     : {grossSpeed} &#40; words per minute &#41;</pre>
                <pre>Correct Words   : { correctWords}</pre>
                <pre>Incorrect Words : { incorrectWords}</pre>
            </Modal.Body>
        </div>
    </Modal>
  );
};

export default ResultContainer;
