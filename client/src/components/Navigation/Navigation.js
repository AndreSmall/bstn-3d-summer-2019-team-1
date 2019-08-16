import React from 'react';
import logo from '../../assets/icons8Food.png'


class Navigation extends React.Component{

    render(){

    return(
      <>
				<div className="Top-section">
					<div className="header">
						<span className='header__flex'>
            <img src={logo} className="header__pic" alt='header'/>
						<p className="header__logo">FOOD INDIA</p> 

						</span>
						<input className='navigation__search' type='search' name="search" placeholder='Start your food journey here!'/> 
					</div>  
					<nav >
						{/* <ul>
							<li className="nav-links">Name 1</li>
							<li className="nav-links">Name 2</li>
							<li className="nav-links">Name 3</li>
						</ul> */}
					</nav> 
			</div>    
      </> 
    
        )
    }
}

  


export default Navigation;