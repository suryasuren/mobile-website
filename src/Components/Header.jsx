import React, {useState} from 'react';

import { auth }  from '../Firebase/firebase.utils';
import '../index.css';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';


/* class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen : false

        }
/* 
        const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen); 
    }

    render () {
        
        {isOpen} = this.state;

        const {currentUser} = this.props
        return(
            <div >

    <Navbar className="nav-head" color="light" light expand="md">
        <Link className='Nav-logo options' to="/">ROPOS</Link>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                <NavItem className="nav-links">
                <Link className="options option " to="/mobile">Mobile</Link>
                </NavItem>
                
                <NavItem className="nav-links">
                <Link className="options option" to="/Accessories">Accessories</Link>
                </NavItem>
                <NavItem className="nav-links">
                <Link className="options option" to="/contact">Contact Us</Link>
                </NavItem>

                { currentUser ? (
                    <div className="options option" onClick={() => auth.signOut()}>
                        Sign Out
                    </div>  
                ) : (
                    <NavItem className="nav-links">
                        <Link className="options option" to="/signing">Sign-In</Link>     
                    </NavItem>
                )
        }
    </Nav>

      </Collapse>
    </Navbar>

  </div>
        )
    }
} */






const Header = ({currentUser}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);  
  
    
    return (
      <div>
        <Navbar className="nav-head" color="light" light expand="md">
                
                <Link className='Nav-logo options' to="/">ROPOS</Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={!isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                                    <NavItem className="nav-links">
                                    <Link className="options option " to="/mobile">Mobile</Link>
                                    </NavItem>
                                    
                                    <NavItem className="nav-links">
                                    <Link className="options option" to="/Accessories">Accessories</Link>
                                    </NavItem>
                                    <NavItem className="nav-links">
                                    <Link className="options option" to="/contact">Contact Us</Link>
                                    </NavItem>

                                    { currentUser ? (
                                        <div className="options option" onClick={() => auth.signOut()}>
                                            Sign Out
                                        </div>  
                                    ) : (
                                        <NavItem className="nav-links">
                                            <Link className="options option" to="/signing">Sign-In</Link>     
                                        </NavItem>
                                    )
                                    }
                        </Nav>

                    </Collapse>
            </Navbar>
      </div>
    );
  }
  
  export default Header;


 /* const Header = ( currentUser ) => (
  
  
     
return (
<div>
<Navbar className="nav-head" color="light" light expand="md">
                
                <Link className='Nav-logo options' to="/">ROPOS</Link>
                    <NavbarToggler onClick={toggleNavbar} />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav className="mr-auto" navbar>
                                    <NavItem className="nav-links">
                                    <Link className="options option " to="/mobile">Mobile</Link>
                                    </NavItem>
                                    
                                    <NavItem className="nav-links">
                                    <Link className="options option" to="/Accessories">Accessories</Link>
                                    </NavItem>
                                    <NavItem className="nav-links">
                                    <Link className="options option" to="/contact">Contact Us</Link>
                                    </NavItem>

                                    { currentUser ? (
                                        <div className="options option" onClick={() => auth.signOut()}>
                                            Sign Out
                                        </div>  
                                    ) : (
                                        <NavItem className="nav-links">
                                            <Link className="options option" to="/signing">Sign-In</Link>     
                                        </NavItem>
                                    )
                                    }
                        </Nav>

                    </Collapse>
            </Navbar>
    </div>
);
  */
    


