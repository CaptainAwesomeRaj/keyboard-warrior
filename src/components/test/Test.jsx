import { AiOutlineReload } from "react-icons/ai";
import TimerContainer from "../timerContainer/TimerContainer";
import TypeContainer from "../typeContainer/TypeContainer";
import {Stack } from "react-bootstrap";
import { useEffect,useRef, useState } from "react";
import { generate } from "random-words";

function TestContainer() {
    const [isTestRunning,setIsTestRunning] = useState(false);
    const [totalTime,setTotalTime] = useState(60);
    const [timer,setTimer] = useState(60);
    const [text,setText] = useState([[]]);
    const [reset,setReset] = useState(0);
    const [correctWords,setCorrectWords] = useState(0);
    const [incorrectWords,setIncorrectWords] = useState(0);
    const {current} = useRef({wordIndex:0,charIndex:0,input:[[]],timerUpdator:[]});

    useEffect(
        ()=>{
            let arr = generate(1000);
            setText(arr.map((word)=>word.split("")));
            setIsTestRunning(false);
            setTimer(totalTime);
            arr = document.querySelectorAll(".type-container span");
            for(let i = 0; i < arr.length; ++i){
                let ele = arr[i];
                ele.style.backgroundColor = "inherit";
                ele.style.borderBottom = "none";
                ele.style.color = "white";
            }
            current.wordIndex = 0;
            current.charIndex = 0;
            current.input = [[]];
            for(let i = 0; i < current.timerUpdator.length; ++i){
                clearTimeout(current.timerUpdator[i])
            }
            current.timerUpdator = [];
        }
        ,[reset]
    )
    return ( 
        <Stack gap={5}>
            <div className="display-6">Hello, User</div>
            <TimerContainer 
                isTestRunning={isTestRunning} 
                totalTime={totalTime}
                timer={timer}
                setTotalTime={setTotalTime}
            />
            <TypeContainer 
                text={text}
                timer={timer}
                setTimer={setTimer}
                totalTime={totalTime}
                setTotalTime={setTotalTime}
                isTestRunning={isTestRunning}
                setIsTestRunning={setIsTestRunning}
                reset={reset}
                setReset={setReset}
                correctWords={correctWords}
                setCorrectWords={setCorrectWords}
                incorrectWords={incorrectWords}
                setIncorrectWords={setIncorrectWords}
                current={current}
            />
            <div className="d-flex justify-content-center cursor-pointer">
            <AiOutlineReload className='h2' 
                onClick={()=>{setReset((x)=>x + 1)}}
            />
            </div>
        </Stack>
    );
}

export default TestContainer;