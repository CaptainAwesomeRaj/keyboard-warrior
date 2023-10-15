import React from 'react';
import Modal from 'react-bootstrap/Modal';
const ResultContainer = (props) => {
  function handleHide(e) {
    props.setShowResult(false);
    props.setReset((x)=>x + 1);
  }
  return (
    <Modal show={props.showResult} onHide={handleHide} centered>
        <div style={{backgroundColor:"#cfe2ff",color:"#052c65"}}>
            <Modal.Header closeButton>
                <Modal.Title>Results:</Modal.Title>
            </Modal.Header>
            <Modal.Body> 
                <pre>Net Speed (WPM)   : {parseInt((props.correctWords) / ((props.totalTime - props.timer) / 60))}</pre>
                <pre>Gross Speed (WPM) : {parseInt((props.correctWords + props.incorrectWords) / ((props.totalTime - props.timer) / 60))}</pre>
                <pre>Correct Words     : {props.correctWords}</pre>
                <pre>Incorrect Words   : {props.incorrectWords}</pre>
            </Modal.Body>
        </div>
    </Modal>
  );
};

export default ResultContainer;
