import React from 'react';
import {   Col } from 'reactstrap';
import { withRouter } from 'react-router';
import './mobile.style.css';
import { Link } from "react-router-dom";



const MenuItem = ({name, imageUrl, match, history, spec}) => (
  
  <div className="style-cons"  >
      <div className="mobile-content"> 
        <Col>
              <Link className="option-line"  to={name}><img className="img-item"  src={imageUrl} alt="Card cap" ></img></Link>
              <Link className="option-line"  to={name}><b>{name}</b> </Link>
        </Col>
  </div>
  </div>
)


export default withRouter(MenuItem);