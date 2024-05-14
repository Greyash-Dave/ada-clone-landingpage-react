import Button from '../components/Button';
import './header.css';
import h_image from '../images/1.png';


const Header = () => {
  return (
    <div className='header'>
      <div className='header--content'>
        <h1>A full customer service team, powered by AI</h1>
        <h3>Don't settle for a basic chatbot - your customers deserve
better. Get a fully stocked, AI-powered customer serviceautomation platform that resolves more inquiries with the least amount of effort.</h3>
      </div>
      <div className='header--buttons'>
      <Button color='#9977D4' text='See Ada in Action' text_color='white'/>
      <Button color='#1B1E23' text='Learn more' text_color='white'/>
      </div>
      <div className='header--image'><img src={h_image}></img></div>
      
    </div>
  )
}

export default Header