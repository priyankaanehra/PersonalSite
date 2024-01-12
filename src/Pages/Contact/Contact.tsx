import { Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css'
import { useState } from 'react';

const Contact = () => {
    
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      // Handle the form submission here, e.g., send data to a server or perform other actions
      console.log('Form data submitted:', formData);
    };
    
  return (
    <div className='mainContactLayout'>
     <Row>
      <Col className='contactHeading'> 
        <h2>Contact Me</h2>
      </Col>
     </Row>

      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" onChange={handleChange} />
            </Form.Group>
        
          </Form>
        </Col>
        <Col md={6}>
        <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" onChange={handleChange} />
            </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Type your message here" onChange={handleChange} />
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