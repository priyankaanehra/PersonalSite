import linkedin from '../../assets/linkedin.jpeg'
import github from '../../assets/github-mark.png'
import './Footer.css'


export default function Footer(){
    return(
        <div className='footer'>
            
            <h3 className='copyright'> © 2024 PNDEV. All Rights Reserved. </h3>
            <a href="https://github.com/priyankaanehra" target='_blank'>
                <img src={github} alt="logo" className="ghfooter"/>
            </a>
        
            <a href="https://www.linkedin.com/in/priyanka-nehra-94386b155/" target='_blank'>
                <img src={linkedin} alt="logo" className="linkedfooter"/>
            </a>
              
        </div>
        )
}