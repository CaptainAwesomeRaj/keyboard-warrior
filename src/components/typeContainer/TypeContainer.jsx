import { generate } from "random-words";
import { useContext, useEffect} from "react";
import { Alert, Container } from "react-bootstrap";
import './TypeContainer.css';
import { AppContext } from "../../context/AppContext";
export default function TypeContainer(){
    const {text,setText} = useContext(AppContext);
    const {word,setWord} = useContext(AppContext); //stores index for text
    const {char,setChar} = useContext(AppContext); //stores index for test[word]
    const {isTextFocussed,setIsTextFocussed} = useContext(AppContext);
    const {correctWords,setCorrectWords} = useContext(AppContext);
    const {incorrectWords,setIncorrectWords} = useContext(AppContext);
    const {correctChars,setCorrectChars} = useContext(AppContext);
    const {incorrectChars,setIncorrectChars} = useContext(AppContext);
    const {currentInputWord,setCurrentInputWord} = useContext(AppContext);
    useEffect(
        ()=>{
            setText(generate(1000).map((str)=>str.split('')));
        },[setText]
        )
    function textMapFunc(word,index){
        const arr =  word.map((ch,idx)=>{return <span className={"word"+index+""+idx} key={"word"+index +""+idx}>{ch}</span>});
        arr.push(<span key={index} className={"space"+index}>&nbsp; </span>);
        return arr;
    }
    function handleInput(event){
        var typeContainer = document.querySelector(".type-container");

        const key = event.key || String.fromCharCode(event.keyCode);
        var element;
        if(text[word].length === char){
            element = document.querySelector(".space"+word);
            element.style.borderBottom = "none";
            if(key === ' '){
                if(text[word].join("") === currentInputWord){
                    setCorrectWords(correctWords+1);
                }
                else{
                    setIncorrectWords(incorrectWords+1);
                }
                element.classList.add("text-success");
                setCorrectChars(incorrectChars+1);
            }
            else{
                setIncorrectWords(incorrectWords+1);
                element.classList.add("bg-danger");
                setIncorrectChars(incorrectChars);
            }
            element = document.querySelector(".word"+(word+1) + "" +0)
            element.style.borderBottom = "2px solid white";
            if(element.offsetTop - typeContainer.scrollTop === 76){
                typeContainer.scrollTop += 36;
            }
            setChar(0);
            setWord((x)=>x + 1);
        }
        else{
            element = document.querySelector(".word"+word+""+char);
            element.style.borderBottom = "none";
            setCurrentInputWord(currentInputWord + key);
            if(key === text[word][char]){
                element.classList.add("text-success");
                setCorrectChars(correctChars + 1);
            }
            else{
                element.classList.add("bg-danger");
                setIncorrectChars(incorrectChars + 1);
            }   
            if(char + 1 === text[word].length){
                element = document.querySelector(".space"+word);
            }
            else{
                element = document.querySelector(".word"+word+""+(char + 1))
            }
            element.style.borderBottom = "2px solid white";
            setChar((x)=>x + 1);
        }
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
                    {
                        !isTextFocussed && 
                        <Alert variant="primary"
                            style={
                                {
                                    fontSize: "16px",
                                    position:"absolute",
                                    top:document.querySelector(".type-container")?.scrollTop,
                                    width:"100%",
                                    height:"100%",
                                }
                            }
                        >Click here to start typing</Alert>
                    }
                </Container>
            </div>
        </>
    )
}