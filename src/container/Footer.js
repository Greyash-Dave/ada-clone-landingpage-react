import './footer.css';
import fl1 from '../images/fl1.png';
import fl2 from '../images/fl2.png';
import fl3 from '../images/fl3.png';
import fl4 from '../images/fl4.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer--right'>
        <div className='sm--logo'>
        <img src={fl1}></img>   
        </div>
        <div className='sm--links'>
        <img src={fl2}></img> 
        <img src={fl3}></img> 
        <img src={fl4}></img> 
        </div>
      </div>
      <div className='footer--left'>
        <div className='c1'>
        <h3>Industries</h3>
        <p>Pricing</p>
        <p>Website Monitoring</p>
        <p>Newsletter Monitoring</p>
        <p>Blog</p>
        </div>
        <div className='c2'>
        <h3>Inspire</h3>
        <p>Notion Competitor<br/>
        Monitoring Template</p>
        <p>Competitor Analysis<br/> 
        Prompts</p>
        <p>Figma Competitor<br/> 
        SWOT Template</p>
        <p>Best Software Tools</p>
        </div>
        <div className='c3'>
        <h3>Legal</h3>
        <p>About Us</p>
        <p>Contact</p>
        <p>FAQ</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        <p>Imprint</p>
        </div>
      </div>
    </div>
  )
}

export default Footer