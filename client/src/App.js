import React from 'react';
import Filter from './components/Filter/Filter'
import Main from './components/Main/Main'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigation from "./components/Navigation/Navigation";
// import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import PageOne from './components/Page1/Page1'
import PageTwo from './components/Page2/Page2'
class App extends React.Component {
  
  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={PageOne}/>
          <Route path='/page2' exact component={PageTwo}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

        //{/* <iframe src='https://public.tableau.com/views/Book1_test_15659692754240/Sheet4?:showVizHome=no&:embed=true' title='data' width='500' height='500'></iframe> */}
