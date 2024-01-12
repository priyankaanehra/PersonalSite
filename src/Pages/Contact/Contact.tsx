import { Row, Col} from 'react-bootstrap';
import './Contact.css'
import phone from '../../assets/phone.png'
import email from '../../assets/email.png'
import linkedin from '../../assets/linkedin.jpeg'
import location from '../../assets/location.png';
import { Link } from 'react-router-dom';

const Contact = () => {
   
  return (
    <div className='mainContactLayout'>
     <Row>
      <Col className='contactHeading'> 
        <h2>Contact Me</h2>
      </Col>
     </Row>
      <Row>
        <Col>
        <p>
        <img src={location} alt="logo" className="location"/>
                    New York, NY
        </p>
         <p><img src={phone} alt="phone" className="phone"/>  (804) 549 - 9819 </p>
         <p>
          <Link to="mailto:priyankaanehra@gmail.com?Subject="><img src={email} alt="email" className="email"/>
            priyankaanehra@gmail.com 
            </Link></p>
         <p><Link to="https://www.linkedin.com/in/priyanka-nehra-94386b155/" target='_blank'>
          <img src={linkedin} alt="email" className="linkedinLogo"/>  LinkedIn 
          </Link>
         </p>        
        </Col>
      </Row>
    </div>
  );
};

export default Contact;