import { generate } from "random-words";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import './TypeContainer.css';
export default function TypeContainer(){
    const [text,setText] = useState([]);

    useEffect(
        ()=>{
            setText((generate(1000)))
        },[]
    )
    return(
        <>  
            <div className="type-container-wrapper">
                <Container className="type-container">
                    {text.length && text.map((word,index)=>{ return <span key={index}>{word} </span> })}
                </Container>
            </div>
        </>
    )
}