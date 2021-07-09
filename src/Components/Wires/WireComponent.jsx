import React from 'react';
import WireItem from './WireItem'
import { Container, Row } from 'reactstrap';
import '../Mobile/mobile.style.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UsbCableNew from '../../Assets/Accessories/usbcable.png';
import neckbandnew from '../../Assets/Accessories/neckbandnew.png'
import PowerBank from '../../Assets/Accessories/PowerBank1.png';
import wired3 from '../../Assets/Accessories/wired3.png';
import charger from '../../Assets/Accessories/chargernew.png';
import airpod from '../../Assets/Accessories/airpod.png';
import smartwatch from '../../Assets/Accessories/smartwatch.png';
import headPhone from '../../Assets/Accessories/headphone.png';
class WireComponent extends React.Component {
constructor() {
    super()

    this.state = {
         
        wireCollections : [
            {id: 1, name: "USB", imageUrl: UsbCableNew },
            {id: 2, name: "Wired Earphone",  imageUrl: wired3 },
            {id: 3, name: "NeckBand", imageUrl: neckbandnew },
            {id: 4, name: "Adapter",  imageUrl: charger },
            {id: 5, name: "Power Bank",  imageUrl: PowerBank },
            {id: 6, name: "AirPod",  imageUrl: airpod },
            {id: 7, name: "SmartWatch", imageUrl: smartwatch},
            {id: 8, name: "Head Phone", imageUrl: headPhone}
            
            
            
        ]
    } 
}

    render() {
        const {wireCollections} = this.state
        return (
            <React.Fragment>
                    <div className="style-con Container-fluid"> 
                        <h3 className="head-1">ACCESSORIES</h3>
                            <Container>
                                <Row xs="1" sm="2" md="4">
                                {wireCollections.filter(items => items.id <= 4).map(({id, ...othersections}) => (
                                        
                                        <div class="col">
                                            <WireItem key={id} {...othersections}></WireItem>
                                            </div>
                                        ))}
                                </Row>





                                <Row xs="1" sm="2" md="4">
                                {wireCollections.filter(items => items.id > 4).map(({id, ...othersections}) => (
                                        
                                        <div class="col">
                                            <WireItem key={id} {...othersections}></WireItem>
                                            </div>
                                        ))}
                                </Row>
                        </Container>






                        {/* <div class="row ">
                            {wireCollections.filter(items => items.id <= 4).map(({id, ...othersections}) => (
                                
                                <div class="col">
                                    <WireItem key={id} {...othersections}></WireItem>
                                    </div>
                                ))}
                        </div>

                        <div class="row row-content">
                            {wireCollections.filter(items => items.id > 4).map(({id, ...othersections}) => (
                                
                                <div class="col">
                                    <WireItem key={id} {...othersections}></WireItem>
                                    </div>
                                ))}
                        </div> */}
                    </div>

                    
            </React.Fragment>
        )
    }
}

export default WireComponent;

