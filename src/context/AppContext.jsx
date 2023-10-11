import { createContext, useEffect, useRef, useState } from 'react';
import { generate } from "random-words";

export const AppContext = createContext();

export function AppContextProvider(params) {
    const [text,setText] = useState([[1]]);
    const [word,setWord] = useState(0); //stores index for text
    const [char,setChar] = useState(0); //stores index for test[word]
    const [isTextFocussed,setIsTextFocussed] = useState(false);
    const [reset,setReset] = useState(0);
    const [user,setUser] = useState("User");
    const [showNotAvailableMessage,setShowNotAvailableMessage] = useState(false);
    const [totalTime,setTotalTime] = useState(60);
    const [timer,setTimer] = useState(60);
    const [correctWords,setCorrectWords] = useState(0);
    const [incorrectWords,setIncorrectWords] = useState(0);
    const [showResult,setShowResult] = useState(false);
    const input = useRef([]);

    useEffect(()=>{
        let arr = generate(1000).map((str)=>str.split(''));
        for(let i = 0n; i < arr.length; ++i){
            input.current[i] = [];
            input.current[i].length = arr[i].length + 1;
        }
        setText(arr);
        setWord(0);
        setChar(0);
        setIsTextFocussed(false);
    },[reset])

    return(
        <AppContext.Provider 
            value={
                {
                    text,
                    setText,
                    word,setWord,
                    char,setChar,
                    isTextFocussed,setIsTextFocussed,
                    setReset,
                    user,setUser,
                    showNotAvailableMessage,
                    setShowNotAvailableMessage,
                    totalTime,setTotalTime,
                    correctWords,setCorrectWords,
                    incorrectWords,setIncorrectWords,
                    input,
                    timer,setTimer,
                    showResult,setShowResult
                }
            }
        >
            {params.children}
        </AppContext.Provider>
    )
}