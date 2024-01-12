import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
  return (
    <div className='mainContactLayout'>
     <Row>
      <Col className='contactHeading'> 
        <h2>Contact Me</h2>
      </Col>
     </Row>

      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
        
          </Form>
        </Col>
        <Col md={6}>
        <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Type your message here" />
            </Form.Group>
            <div className='submitbutton'>
              <Button variant="primary" type="submit" className="btn btn-dark">
                Submit
              </Button>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;