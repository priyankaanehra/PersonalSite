import linkedin from '../../assets/linkedin.jpeg'
import './Home.css'
import pn from '../../assets/pn.jpeg'
import gh from '../../assets/github-mark.png'
import location from '../../assets/location.png'
import { Link } from 'react-router-dom'

export default function Home(){

    return(
        <div className='homecontainer'>
            <div className='row'>
                <div className='homebox col'>
                    <img src={pn} alt="pn" className="pnpic"/>
                </div>
                <div className='homebox col'>
                    <p className='locationNY'>
                    <img src={location} alt="logo" className="locationimg"/>
                    New York, NY
                    </p>
                    <h1 className='homename'>Priyanka Nehra
                    <span><a href="https://github.com/priyankaanehra" target='_blank'>
                            <img src={gh} alt="logo" className="githubimg"/>
                        </a>
                        <a href="https://www.linkedin.com/in/priyanka-nehra-94386b155/" target='_blank'>
                            <img src={linkedin} alt="logo" className="linkedinimg"/>
                        </a></span>
                        </h1>
                    
                    <p className='jobtitle'>Software Engineer</p>
                    <p className='jobtitle'>Hobbies: Photography, running, biking</p>
                    <Link to="/about">
                    <button className='resumebutton'>Resume</button>
                    </Link>
                </div>
            </div>
        </div>

        )
}