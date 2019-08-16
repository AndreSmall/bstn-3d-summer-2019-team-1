import React from 'react';
import Main from '../Main/Main'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

class PageOne extends React.Component {
  
  render() {
    return (

      <div>
        <Navigation/>
        <Main />
        <Footer />
      </div>
    )
  }
}

export default PageOne;

        //{/* <iframe src='https://public.tableau.com/views/Book1_test_15659692754240/Sheet4?:showVizHome=no&:embed=true' title='data' width='500' height='500'></iframe> */}
