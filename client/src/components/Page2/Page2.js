import React from 'react';
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Filter from '../Filter/Filter'


class PageTwo extends React.Component {
  
  render() {
    return (

      <div>
        <Navigation/>
        <div className='main__hero--filter'> 
          <div className='filter__flex'>
            <Filter />

          </div> 
          
        </div>
        <Footer />
      </div>
    )
  }
}

export default PageTwo;

        //{/* <iframe src='https://public.tableau.com/views/Book1_test_15659692754240/Sheet4?:showVizHome=no&:embed=true' title='data' width='500' height='500'></iframe> */}
