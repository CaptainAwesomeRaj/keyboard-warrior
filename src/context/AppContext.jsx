import { createContext, useEffect, useState } from 'react';
import { generate } from "random-words";

export const AppContext = createContext();

export function AppContextProvider(params) {
    const [text,setText] = useState([[1]]);
    const [word,setWord] = useState(0); //stores index for text
    const [char,setChar] = useState(0); //stores index for test[word]
    const [isTextFocussed,setIsTextFocussed] = useState(false);
    const [reset,setReset] = useState(0);
    
    useEffect(()=>{
        setText(generate(1000).map((str)=>str.split('')));
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
                    setReset
                }
            }
        >
            {params.children}
        </AppContext.Provider>
    )
}