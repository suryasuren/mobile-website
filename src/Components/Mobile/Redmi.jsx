import React from 'react';
import { Container, Row } from 'reactstrap';
import './mobile.style.css';
import MenuItem from './menuitem'

import './mobile.style.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class RedmiMobiles extends React.Component {
constructor() {
    super()

    this.state = {
         
        redmiCollections : [
            {id: 1, name: "Redmi 6 pro", imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/4ORUoz-white-xiaomi-redmi-clipart-phone-mobile.png', spec: "6Gb/64Gb Slight Pink" },
            {id: 2, name: "Redmi note 5a pro",  imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/HqstMo-xiaomi-redmi-4-photos.png', spec: "6Gb/64Gb Slight Pink"  },
            {id: 3, name: "Redmi 4x", imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/4ORUoz-white-xiaomi-redmi-clipart-phone-mobile.png' , spec: "6Gb/64Gb Slight gold"},
            {id: 4, name: "Redmi 5 Plus",  imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/HqstMo-xiaomi-redmi-4-photos.png' , spec: "6Gb/64Gb Slight Pink"},
            {id: 5, name: "Redmi note 4g ",  imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/4ORUoz-white-xiaomi-redmi-clipart-phone-mobile.png', spec: "6Gb/64Gb Slight gold" },
            {id: 6, name: "Redmi 6 pro",  imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/HqstMo-xiaomi-redmi-4-photos.png' , spec: "6Gb/64Gb Slight Pink"},
            {id: 7, name: "Redmi 4x",  imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/4ORUoz-white-xiaomi-redmi-clipart-phone-mobile.png' , spec: "6Gb/64Gb Slight gold"},
            {id: 8, name: "Redmi 5 Plus",  imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/HqstMo-xiaomi-redmi-4-photos.png', spec: "6Gb/64Gb Slight Pink" },
            {id: 9, name: "Redmi note 4g ",  imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/4ORUoz-white-xiaomi-redmi-clipart-phone-mobile.png', spec: "6Gb/64Gb Slight gold" },
            {id: 10, name: "Redmi 6 pro",  imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/HqstMo-xiaomi-redmi-4-photos.png' , spec: "6Gb/64Gb Slight Pink"},
            {id: 11, name: "Redmi 4x",  imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/4ORUoz-white-xiaomi-redmi-clipart-phone-mobile.png' , spec: "6Gb/64Gb Slight gold"},
            {id: 12, name: "Redmi 5 Plus",  imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/HqstMo-xiaomi-redmi-4-photos.png' , spec: "6Gb/64Gb Slight Pink"},
            {id: 11, name: "Redmi 4x",  imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/4ORUoz-white-xiaomi-redmi-clipart-phone-mobile.png', spec: "6Gb/64Gb Slight gold" },
            {id: 12, name: "Redmi 5 Plus",  imageUrl: 'https://www.transparentpng.com/thumb/xiaomi-redmi/HqstMo-xiaomi-redmi-4-photos.png', spec: "6Gb/64Gb Slight Pink" },
            
            
            
        ]
    } 
}

    render() {
        const {redmiCollections} = this.state
        return (
           
            <React.Fragment>
                <div className="style-con "> 
                        <h3 className="head-1">SMARTPHONES</h3>
                    <Container>
                        <Row xs="1" sm="2" md="4">

                        {redmiCollections.map(({id, ...othersections}) => (                      
                                                    
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

export default RedmiMobiles;

