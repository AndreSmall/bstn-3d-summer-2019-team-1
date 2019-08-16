import React from 'react'
import {Link} from 'react-router-dom';

class Main extends React.Component {
  render() {
    return(
      <main className='main'>
        <div className='main__hero'>
          <div className='main__title-wrapper'>
            <h1 className='main__title'>Welcome to FoodIndia!</h1>
            <h2 className='main__sub-title'>We are Hundreds of influencers use this</h2>
          <Link to='/page2' className='main__button'>Explore Now!</Link>
          </div>  
        </div>
      </main>
    )
  }
}
export default Main