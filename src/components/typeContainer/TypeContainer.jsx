import { useContext, useEffect} from "react";
import { Alert, Container } from "react-bootstrap";
import './TypeContainer.css';
import { AppContext } from "../../context/AppContext";



export default function TypeContainer(){
    const {text} = useContext(AppContext);
    const {word,setWord} = useContext(AppContext); //stores index for text
    const {char,setChar} = useContext(AppContext); //stores index for test[word]
    const {isTextFocussed,setIsTextFocussed} = useContext(AppContext);
    let {input} = useContext(AppContext);
    const {setCorrectWords,setIncorrectWords} = useContext(AppContext);
    const {setShowResult} = useContext(AppContext);
    useEffect(()=>{
        const arr = document.querySelectorAll(".type-container span");
        arr.forEach((x)=>{
            x.style.backgroundColor="inherit";
            x.style.border="none";
            x.style.color="white";
        })
    },[text]);

    // 
    function displayResult() {
        let countCorrectWords = 0,countIncorrectWords = 0;
        for(let i = 0n; i < input.current.length; ++i){
            var enteredWord = input.current[i].join("");
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
        setCorrectWords(countCorrectWords);
        setIncorrectWords(countIncorrectWords);
        setShowResult(true);
    }
    
    // 
    function textMapFunc(word,index){
        const arr =  word.map((ch,idx)=>{return <span className={"word"+index+""+idx} key={"word"+index +""+idx} style={{backgroundColor:"inherit",border:"none",color:"white"}}>{ch}</span>});
        arr.push(<span key={index} className={"space"+index}>&nbsp; </span>);
        return arr;
    }

    // 
    function handleInput(event){
        var typeContainer = document.querySelector(".type-container");

        var element;
        var key = event.keyCode;
        if(key === 13){
            displayResult();
        }

        if(key === 8){  //8 is charCode for backspace
            input.current[word][char] = "";
            if(word === 0 && char === 0){
                return;
            }
            if(char === text[word].length){
                element = document.querySelector(".space"+word);
                setChar(char - 1);
            }
            else if(char === 0){
                element = document.querySelector(".word" + word + "" + char);
                setChar(text[word - 1].length);
                setWord(word - 1);
            }
            else{
                element = document.querySelector(".word" + word + "" + char);
                setChar(char - 1);
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
        input.current[word][char] = key;
        if(text[word].length === char){
            element = document.querySelector(".space"+word);
            element.style.borderBottom = "none";
            if(key === ' '){
                element.style.color = "green";
            }
            else{
                element.style.backgroundColor = "red";
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
            if(key === text[word][char]){
                element.style.color = "green";
            }
            else{
                element.style.backgroundColor = "red";
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