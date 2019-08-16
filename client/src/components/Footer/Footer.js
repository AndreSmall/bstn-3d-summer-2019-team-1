import React from 'react';
import logo from '../../assets/icons8Food.png'

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'r>
        <div className='footer__flex'>
          <span className='footer__logo-wrap'>
            <img src={logo} className="footer__logo" alt='new'/>
            <p className="footer__name">FOOD INDIA</p> 
          </span>
          <p>2019 Copyright</p>
        </div>
        <div className='footer__flex3'>
          <span className='footer__flex2'>
            <p>Explore</p>
            <p>Testimonials</p>
            <p>About Us</p>
            <p>Contact</p>
            <p>Careers</p>
            <p>Support</p>
            <p>Help</p>
          </span>
          <p>Follow us Insatgram</p>
        </div>
      </footer>
    )
  }
}

export default Footer;