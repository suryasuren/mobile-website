import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../index.css'

class Contacts extends React.Component {
    constructor() {
        super()
        this.state = {
                Address : '222 Bussa Industrial Estate, Century Bazar Lane Prabhadevi, Mumbai, 400002',
                MobileNumber : '9010000011',
                MailId: 'www.Ropos@gmail.com',
                Website : 'www.ropos.com'
        }
    }


    render() {
        return(

            <React.Fragment>

                <Container className="contacts">

<Row xs="12">
    <Col xs="4">
                <h4>Contact Details</h4>
                <br></br>
                <h6>Addtess: {this.state.Address}</h6>
                <h6>Phone: {this.state.MobileNumber}</h6>
                <h6>Mail Id: <a href="mailto: www.ropos@gmail.com">{this.state.MailId}</a> </h6>
                <h6>Website: <a href="https://www.google.com">{this.state.Website}</a> </h6>
    </Col>
    <Col xs="8">
    <h4>About Us</h4>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corporis sed necessitatibus esse consectetur sapiente obcaecati velit itaque a facere 
                        laborum nemo omnis labore accusamus dolore, deleniti tempora et! Alias, ea? Lorem ipsum 
                        dolor sit amet, consectetur adipisicing elit. Distinctio accusamus assumenda excepturi 
                        sint voluptate sed accusantium. Vitae assumenda velit eum, fugiat aliquid pariatur maiores 
                        sint quae, nihil amet qui iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corporis sed necessitatibus esse consectetur sapiente obcaecati velit itaque a facere 
                        laborum nemo omnis labore accusamus dolore, deleniti tempora et! Alias, ea? Lorem ipsum 
                        dolor sit amet, consectetur adipisicing elit. Distinctio accusamus assumenda excepturi 
                        sint voluptate sed accusantium. Vitae assumenda velit eum, fugiat aliquid pariatur maiores 
                        sint quae, nihil amet qui iusto.
                    </h6>
    </Col>

</Row>

                    <h4>What We Do</h4>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corporis sed necessitatibus esse consectetur sapiente obcaecati velit itaque a facere 
                        laborum nemo omnis labore accusamus dolore, deleniti tempora et! Alias, ea? Lorem ipsum 
                        dolor sit amet, consectetur adipisicing elit. Distinctio accusamus assumenda excepturi 
                        sint voluptate sed accusantium. Vitae assumenda velit eum, fugiat aliquid pariatur maiores 
                        sint quae, nihil amet qui iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Corporis sed necessitatibus esse consectetur sapiente obcaecati velit itaque a facere 
                        laborum nemo omnis labore accusamus dolore, deleniti tempora et! Alias, ea? Lorem ipsum 
                        dolor sit amet, consectetur adipisicing elit. Distinctio accusamus assumenda excepturi 
                        sint voluptate sed accusantium. Vitae assumenda velit eum, fugiat aliquid pariatur maiores 
                        sint quae, nihil amet qui iusto.
                    </h6>
                

                <br></br>

                

                   
                </Container>
                    
            </React.Fragment>
        )
    }

}

export default Contacts