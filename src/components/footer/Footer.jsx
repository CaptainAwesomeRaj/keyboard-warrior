import { Stack } from "react-bootstrap";
import "./Footer.css"
import { AiFillFacebook,AiOutlineInstagram,AiOutlineTwitter,AiFillYoutube,AiFillLinkedin} from "react-icons/ai";

export default function Footer(){

    return(
        <>
            <Stack className="h2" direction="horizontal" >
                <AiFillFacebook/>
                <AiOutlineInstagram/>
                <AiOutlineTwitter/>
                <AiFillYoutube/>
                <AiFillLinkedin/>
            </Stack>
        </>
    )
}