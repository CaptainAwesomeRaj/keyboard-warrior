import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppContextProvider(params) {
    const [text,setText] = useState([[1]]);
    const [word,setWord] = useState(0); //stores index for text
    const [char,setChar] = useState(0); //stores index for test[word]
    const [isTextFocussed,setIsTextFocussed] = useState(false);
    const [correctWords,setCorrectWords] = useState(0);
    const [incorrectWords,setIncorrectWords] = useState(0);
    const [correctChars,setCorrectChars] = useState(0);
    const [incorrectChars,setIncorrectChars] = useState(0);
    const [currentInputWord,setCurrentInputWord] = useState("");
    return(
        <AppContext.Provider 
            value={
                {
                    text,
                    setText,
                    word,setWord,
                    char,setChar,
                    isTextFocussed,setIsTextFocussed,
                    correctWords,setCorrectWords,
                    incorrectWords,setIncorrectWords,
                    correctChars,setCorrectChars,
                    incorrectChars,setIncorrectChars,
                    currentInputWord,setCurrentInputWord
                }
            }
        >
            {params.children}
        </AppContext.Provider>
    )
}