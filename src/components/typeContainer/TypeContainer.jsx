import { generate } from "random-words";
import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import './TypeContainer.css';
export default function TypeContainer(){
    const [text,setText] = useState([[1]]);
    const [word,setWord] = useState(0); //stores index for text
    const [char,setChar] = useState(0); //stores index for test[word]
    const [isTextFocussed,setIsTextFocussed] = useState(false);
    useEffect(
        ()=>{
            setText(generate(1000).map((str)=>str.split('')));
            var element = document.querySelector(".word" + word + "" + char);
        },[]
        )
    function textMapFunc(word,index){
        const arr =  word.map((ch,idx)=>{return <span className={"word"+index+""+idx} key={"word"+index +""+idx}>{ch}</span>});
        arr.push(<span key={index} className={"space"+index}>&nbsp; </span>);
        return arr;
    }
    function handleInput(event){
        var element;
        if(text[word].length == char){
            element = document.querySelector(".space"+word);
            element.style.borderBottom = "none";
            element = document.querySelector(".word"+(word+1) + "" +0)
            element.style.borderBottom = "2px solid white";
            setChar(0);
            setWord((x)=>x + 1);
        }
        else{
            element = document.querySelector(".word"+word+""+char);
            element.style.borderBottom = "none";
            if(char + 1 === text[word].length){
                element = document.querySelector(".space"+word);
            }
            else{
                element = document.querySelector(".word"+word+""+(char + 1))
            }
            element.style.borderBottom = "2px solid white";
            setChar((x)=>x + 1);
        }
        const key = event.key || String.fromCharCode(event.keyCode);
    }
    return(
        <>  
            <div className="type-container-wrapper">
                <Container className="type-container" tabIndex={0} 
                    onFocus={()=>{setIsTextFocussed(true)}} 
                    onBlur={()=>{setIsTextFocussed(false)}}  
                    onKeyDown={handleInput}
                    style={{fontFamily:'"Roboto Mono", "Roboto Mono", "Vazirmatn", monospace'}}
                >
                    {text.length && text.map(textMapFunc)}
                    {!isTextFocussed && <Alert variant="secondary" className="type-container-alert">Click here to start typing</Alert>}
                </Container>
            </div>
        </>
    )
}