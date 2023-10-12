import { Stack } from "react-bootstrap";
import { AiFillFacebook,AiOutlineInstagram,AiOutlineTwitter,AiFillYoutube,AiFillLinkedin} from "react-icons/ai";
import { useContext } from "react";
import {AppContext} from '../../context/AppContext';

export default function Footer(){
    const {setShowNotAvailableMessage} = useContext(AppContext);
    function triggerAlert(){
        setShowNotAvailableMessage(true);
    }
    return(
        <>
            <div className="mb-5">
                <Stack className="h2 flex-wrap" gap={3} direction="horizontal" >
                    <AiFillFacebook className="cursor-pointer" onClick={triggerAlert}/>
                    <AiOutlineInstagram className="cursor-pointer" onClick={triggerAlert}/>
                    <AiOutlineTwitter className="cursor-pointer" onClick={triggerAlert}/>
                    <AiFillYoutube className="cursor-pointer" onClick={triggerAlert}/>
                    <AiFillLinkedin className="cursor-pointer" onClick={triggerAlert}/>
                </Stack>
            </div>
        </>
    )
}