import Button from '../components/Button';
import Card from '../components/Card';
import './body.css';
import b_image from '../images/2.png';
import b2_image from '../images/3.png';
import trophy from '../images/trophy.png';
import l1 from '../images/l1.png';
import l2 from '../images/l2.png';
import l3 from '../images/l3.png';
import t1 from '../images/t1.png';
import b5_logo from '../images/b5_logo.png';
import al_arrow from '../images/dropdown-arrow.png';
import b5_profile from '../images/b5_profile.png';

const Body = () => {
  return (
    <div className='body'>
      <div className='body--content'>
        <h1>Basic chatbots have no business
representing your business</h1>
        <h3>Ditch code-heavy, old school scripted chatbots. Integrate Ada with
your existing business systems to resolve complex customer
inquiries in record time.</h3>
      </div>
      <div className='body--buttons'>
      <Button color='#9977D4' text='See Ada in Action' text_color='white'/>
      <Button color='#1B1E23' text='Learn more' text_color='white'/>
      </div>
      <div className='body--image'><img src={b_image}></img></div>
      <div className='body--cards'>
        <div className='body--card'><Card icon={trophy} title='Forrester' description= 'Conversational AI Wave Challenger'/></div>
        <div className='body--card'><Card icon={trophy} title='G2' description= 'High Performer Fall 2023'/></div>
        <div className='body--card'><Card icon={trophy} title='ITRG' description= 'Top Rated 2023'/></div>
        <div className='body--card'><Card icon={trophy} title='Globe & Mail' description= 'Top Growing Companies'/></div>
      </div>
      <div className='body2--content'>
        <div className='body2--img'><img src={b2_image}></img></div>
        <div className='body2--text'>
          <div><h1>Resolve more phone calls with voice AI</h1></div>
          <div><h3>Your customers are waiting — and they have been for some time — for the seamless experience only Ada’s platform can provide. Add intelligent phone automation using the same knowledge content in Ada’s easy-to-use platform.</h3></div>
          <div><Button color='#9977D4' text='Learn More About Ada Voice' text_color='white'/></div>
        </div>
      </div>
      <div className='body3--content'>
        <div className='body3--header'>
          <h1>4,272,090,866</h1>
          <h3>conversations automated</h3>
        </div>
        <div className='body3--cards'>
          <div className='cards--left'>
          <Card icon={t1} title='77%' description= 'of customer service interactions resolved through automation'/>
          <Card title='50+' description= 'languages supported instantly'/>
          </div>
          <div className='cards--right'>
          <Card icon={l1}  description= '6.7x ROI in year 1'/>
          <Card icon={l2}  description= '$750k savings / year'/>
          <Card icon={l3}  description= '95% recognition rate'/>
          </div>
        </div>
      </div>
      <div className='body4--content'>
        <div className='body4--background'>
        <div className='body4--text'>
          <h1>Automate your customer service with Ada</h1>
        </div>
        <div><Button color='#9977D4' text='Request a Demo' text_color='white'/></div>
        </div>
      </div>
      <div className='body5--content'>
        <div className='body5--box'>
          <div className='body5--left'>
            <h1>AI-powered<br />
              automation built<br />
              for CX teams</h1>
              <Button color='#9977D4' text='View all Case Studies' text_color='white'/>
          </div>
          <div className='body5--right'>
            <div className='body5--right--top'>
              <div className='logo'>
                <img src={b5_logo}></img>
              </div>
              <div className='anchor'>
                <h3>Read the Air Asia Case Study</h3>
                <img className='al-arrow' src={al_arrow}></img>
              </div>
            </div>
            <div className='body5--right--bottom'>
              <div className='body5--cards'>
              <Card className='body5--cards' title='75%' description= 'inquiries resolved'/>
              <Card className='body5--cards' title='11' description= 'languages supported'/>
              <Card className='body5--cards' title='8x' description= 'increase in product upsell'/>
              </div>
              <div className='body5--right--bottom--desc'>
                <div className='desc'>
                  <h3>“Ada has supported our customer's agents to contribute to the overall ancillary income through our Customer Happiness contact channels by selling eight times more ancillary products compared with 12 months ago.”</h3>
                </div>
                <div className='body5--profile'>
                <Card className='body5--profile' icon={b5_profile} title='Bayley Clark' description= 'Head of Customer Support Strategy'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body