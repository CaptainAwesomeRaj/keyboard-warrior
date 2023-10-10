import { Stack } from "react-bootstrap";
import { BsKeyboard } from "react-icons/bs";
import './Header.css';
import NavBar from "../navbar/NavBar";

export default function Header(){
    return(
        <>  
            <header>
                <Stack gap={3}>
                    <Stack direction="horizontal" className="header-wrapper flex-wrap" gap={3}>
                        <div className="h2 pt-2">Keyboard Warrior</div>
                        <BsKeyboard className="display-2"/>
                    </Stack>
                    <NavBar/>
                </Stack>
            </header>
        </>
    )
}