import Button from '../components/Button';
import './navbar.css';
import logo from '../images/logo.png';
import dd_arrow from '../images/dropdown-arrow.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar--title">
        <div className='navbar--logo'><img src={logo}></img></div>
        <h1>ada</h1>
      </div>
      <div className='navbar--links'>
        <div className='nb-link'><a href=''>Pricing</a></div>
        <div className='nb-link'><a href=''>Platform</a><img className='dd-arrow' src={dd_arrow}></img></div>
        <div className='nb-link'><a href=''>Solutions</a><img className='dd-arrow' src={dd_arrow}></img></div>
        <div className='nb-link'><a href=''>Resources</a><img className='dd-arrow' src={dd_arrow}></img></div>
      </div>
      <div className="navbar--buton"><Button color='#9977D4' text='Get a Demo' text_color='white'/></div>
    </div>
  )
}

export default Navbar