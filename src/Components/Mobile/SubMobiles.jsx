import React from 'react';
import { Container, Row } from 'reactstrap';
import './mobile.style.css';
import MenuItem from './menuitem'

import './mobile.style.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import iphone from '../../Assets/Accessories/iphone.png'
import gpix from '../../Assets/Accessories/gp1.png'
import lg from '../../Assets/Accessories/lg.png'
class SubMobile extends React.Component {
constructor() {
    super()

    this.state = {
         
        mobileCollections : [
            {id: 1, name: "Apple", imageUrl: iphone },
            {id: 2, name: "Redmi",  imageUrl: 'https://www.transparentpng.com/thumb/apple-iphone/fORwQR-smartphone-apple-iphone-x-transparent-background.png' },
            {id: 3, name: "OnePlus", imageUrl: 'https://www.transparentpng.com/thumb/apple-iphone/fORwQR-smartphone-apple-iphone-x-transparent-background.png' },
            {id: 4, name: "Samsung",  imageUrl: 'https://www.transparentpng.com/thumb/apple-iphone/fORwQR-smartphone-apple-iphone-x-transparent-background.png' },
            {id: 5, name: "Sony",  imageUrl: 'https://www.transparentpng.com/thumb/apple-iphone/fORwQR-smartphone-apple-iphone-x-transparent-background.png' },
            {id: 6, name: "Oppo",  imageUrl: 'https://www.transparentpng.com/thumb/apple-iphone/fORwQR-smartphone-apple-iphone-x-transparent-background.png' },
            {id: 7, name: "GooglePix",  imageUrl: gpix },
            {id: 8, name: "LG",  imageUrl: lg },
            
            
            
        ]
    } 
}

    render() {
        const {mobileCollections} = this.state
        return (
           
            <React.Fragment>
                <div className="style-con "> 
                        <h3 className="head-1">SMARTPHONES</h3>
                    <Container>
                        <Row xs="1" sm="2" md="4">
                        {mobileCollections.filter(items => items.id <= 4).map(({id, ...othersections}) => (                      
                                                    
                                                    <div class="col">
                                    <MenuItem key={id} {...othersections}></MenuItem>
                                    </div>
                                                    
                                                ))}
                        </Row>
                        <Row xs="1" sm="2" md="4">
                        {mobileCollections.filter(items => items.id > 4).map(({id, ...othersections}) => (
                                
                                <div class="col">
                                    <MenuItem key={id} {...othersections}></MenuItem>
                                    </div>
                                ))}
                        </Row>
                    </Container>
                </div>
                           
            </React.Fragment>
        )
    }
}

export default SubMobile;

