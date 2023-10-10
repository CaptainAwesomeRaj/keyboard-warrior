import Nav from 'react-bootstrap/Nav';
import { AiFillHome, AiFillTrophy } from 'react-icons/ai';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './NavBar.css';
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
export default function NavBar() {
  const {setShowNotAvailableMessage} = useContext(AppContext);
  return (
    <Nav>
      <Nav.Item onClick={()=>{setShowNotAvailableMessage(true)}}>
        <Nav.Link>
            <div className='nav-bar-link'>
                <AiFillHome className='h4'/> Home
            </div> 
        </Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={()=>{setShowNotAvailableMessage(true)}}>
        <Nav.Link>
            <div className='nav-bar-link'>
                <FaUserPlus className='h4'/> Register
            </div> 
        </Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={()=>{setShowNotAvailableMessage(true)}}>
        <Nav.Link>
            <div className='nav-bar-link'>
                <FaSignInAlt className='h4'/> Login
            </div> 
        </Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={()=>{setShowNotAvailableMessage(true)}}>
        <Nav.Link>
            <div className='nav-bar-link'>
                <AiFillTrophy className='h4'/> Leaderboards
            </div> 
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
