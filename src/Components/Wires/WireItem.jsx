import React from 'react';
import { withRouter } from 'react-router';
import '../Mobile/mobile.style.css';
import { Link } from "react-router-dom";
import {  Col } from 'reactstrap';


const WireItem = ({name,  imageUrl, match, history}) => (

<div className="style-cons"  >
      <div className="mobile-content">
      
      <Col>
        
        <Link className="option-line"  to={name}> <img className="img-item"  src={imageUrl} alt="Card cap" ></img></Link>
        <Link className="option-line"  to={name}> <b>{name}</b></Link>
        </Col>
       
        
      </div>
    </div>


)

export default withRouter(WireItem);