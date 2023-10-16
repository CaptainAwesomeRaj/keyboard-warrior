import { useState} from "react";
import { Alert, Container } from "react-bootstrap";
import './TypeContainer.css';
import ResultContainer from "../resultContainer/ResultContainer";



export default function TypeContainer({text,timer,current,setReset,isTestRunning,setIsTestRunning,totalTime,setTimer,correctWords,setCorrectWords,incorrectWords,setIncorrectWords}){
    const [isTextFocussed,setIsTextFocussed] = useState(false);
    // props for resultcontainer
    const [showResult,setShowResult] = useState(false);

    function displayResult() {
        for(let i = 0n; i < current.timerUpdator.length; ++i){
            clearTimeout(current.timerUpdator[i]);
        }
        let countCorrectWords = 0,countIncorrectWords = 0;
        for(let i = 0n; i < current.input.length; ++i){
            var enteredWord = current.input[i].join("");
            if(enteredWord){
                if(enteredWord.startsWith( text[i].join("")) && enteredWord.endsWith(" ")){
                    countCorrectWords++;
                }
                else{
                    countIncorrectWords++;
                }
            }
            else{
                break;
            }
        }
        setShowResult(true);
        setCorrectWords(parseInt(countCorrectWords));
        setIncorrectWords(parseInt(countIncorrectWords));
    }
    
    // 
    function textMapFunc(word,index){
        const arr =  word.map((ch,idx)=>{return <span className={"word"+index+""+idx} key={"word"+index +""+idx} style={{backgroundColor:"inherit",border:"none",color:"white"}}>{ch}</span>});
        arr.push(<span key={index} className={"space"+index}>&nbsp; </span>);
        return arr;
    }

    // 
    function handleInput(event){
        if(!isTestRunning){
            setIsTestRunning(true);
            
            current.timerUpdator.length = totalTime;
            for(let i = 1; i < totalTime; ++i ){
                current.timerUpdator[i - 1] = setTimeout(()=>{
                    setTimer((x)=>x - 1);
                },i * 1000);
            }
            current.timerUpdator.push(setTimeout( ()=>{
                setIsTestRunning(false);
                setTimer((x)=>{
                    displayResult();
                    return 0;
                })
            },totalTime * 1000))
        }

        var typeContainer = document.querySelector(".type-container");

        var element;
        var key = event.keyCode;

        // 13 is for enter
        if(key === 13){
            setIsTestRunning(false);
            displayResult();
        }

        if(current.input[current.wordIndex] === undefined){
            current.input[current.wordIndex] = [];
        }
        if(key === 8){  //8 is charCode for backspace
            current.input[current.wordIndex][current.charIndex] = "";
            if(current.wordIndex === 0 && current.charIndex === 0){
                return;
            }
            if(current.charIndex === text[current.wordIndex].length){
                element = document.querySelector(".space"+current.wordIndex);
                current.charIndex--;
            }
            else if(current.charIndex === 0){
                element = document.querySelector(".word" + current.wordIndex + "" + current.charIndex);
                current.charIndex = text[current.wordIndex - 1].length;
                current.wordIndex--;
            }
            else{
                element = document.querySelector(".word" + current.wordIndex + "" + current.charIndex);
                current.charIndex--;
            }
            element.style.borderBottom = "none";
            element = element.previousSibling;
            element.style.color = "white";
            element.style.backgroundColor = "inherit";
            element.style.borderBottom = "2px solid white";
            if(element.offsetTop - typeContainer.scrollTop < 4){
                typeContainer.scrollTop -= 36;
            }
            return;
        }


        // here comes if keyCode returns false
        key = event.key;
        current.input[current.wordIndex][current.charIndex] = key;
        if(text[current.wordIndex].length === current.charIndex){
            element = document.querySelector(".space"+current.wordIndex);
            element.style.borderBottom = "none";
            if(key === ' '){
                element.style.color = "green";
            }
            else{
                element.style.backgroundColor = "red";
            }
            element = document.querySelector(".word"+(current.wordIndex+1) + "" +0)
            element.style.borderBottom = "2px solid white";
            if(element.offsetTop - typeContainer.scrollTop >= 75){
                typeContainer.scrollTop += 36;
            }
            current.charIndex = 0;
            current.wordIndex++;
        }
        else{
            element = document.querySelector(".word"+current.wordIndex+""+current.charIndex);
            element.style.borderBottom = "none";
            if(key === text[current.wordIndex][current.charIndex]){
                element.style.color = "green";
            }
            else{
                element.style.backgroundColor = "red";
            }   
            if(current.charIndex + 1 === text[current.wordIndex].length){
                element = document.querySelector(".space"+current.wordIndex);
            }
            else{
                element = document.querySelector(".word"+current.wordIndex+""+(current.charIndex + 1))
            }
            element.style.borderBottom = "2px solid white";
            current.charIndex++;
        }
    }
    return(
        <>  
            <div className="type-container-wrapper">
                {
                    !isTextFocussed && 
                    <div id="alert-container"
                        style={
                            {
                                fontSize: "16px",
                                position:"absolute",
                                width:"100%",
                                height:"100%",
                                zIndex:"1"
                            }
                        }
                        tabIndex={0}
                        onClick={()=>{
                            let inputBox = document.querySelector(".type-container-input");
                            inputBox.focus();
                        }}
                    >
                        <Alert variant="primary"
                        style={
                            {height:"100%"}
                        }                              
                        
                        >Click here to start typing</Alert>
                    </div>
                }
                <input type="text" className="type-container-input" style={{position:"absolute", zIndex:"-1"}}
                    onFocus={()=>{setIsTextFocussed(true)}} 
                    onBlur={()=>{setIsTextFocussed(false)}}  
                    onKeyDown={handleInput}
                    />
                <Container className="type-container" tabIndex={0} 
                    style={{fontFamily:'"Roboto Mono", "Roboto Mono", "Vazirmatn", monospace'}}
                    >
                    {text.length && text.map(textMapFunc)}
                </Container>
                <ResultContainer timer={timer} totalTime={totalTime} correctWords={correctWords} incorrectWords={incorrectWords} showResult={showResult} setShowResult={setShowResult} setReset={setReset} current={current} />
            </div>
        </>
    )
}