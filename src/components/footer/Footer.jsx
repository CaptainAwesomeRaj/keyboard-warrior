import { Stack } from "react-bootstrap";
import { AiFillFacebook,AiOutlineInstagram,AiOutlineTwitter,AiFillYoutube,AiFillLinkedin} from "react-icons/ai";


export default function Footer(){

    return(
        <>
            <div className="mb-5">
                <Stack className="h2 flex-wrap" gap={3} direction="horizontal" >
                    <AiFillFacebook className="cursor-pointer" />
                    <AiOutlineInstagram className="cursor-pointer" />
                    <AiOutlineTwitter className="cursor-pointer" />
                    <AiFillYoutube className="cursor-pointer" />
                    <AiFillLinkedin className="cursor-pointer" />
                </Stack>
            </div>
        </>
    )
}