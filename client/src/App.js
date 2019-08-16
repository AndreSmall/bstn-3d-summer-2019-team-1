import React from 'react';
import './App.css';
// import Graph from './components/graph';
// import Filter from './components/Filter/Filter'
import Main from './components/Main/Main'

import Navigation from "./components/Navigation/Navigation";
import Card from './components/Card/Card'
class App extends React.Component {
  render() {
    return (
      <div>

        <Navigation/>
        <Main />
        <Card/>

      </div>
    )
  }
}

export default App;

        //{/* <iframe src='https://public.tableau.com/views/Book1_test_15659692754240/Sheet4?:showVizHome=no&:embed=true' title='data' width='500' height='500'></iframe> */}
