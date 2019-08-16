import React from 'react';
import './App.css';
// import Graph from './components/graph';
import Filter from './components/Filter/Filter'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Filter />
        {/* <iframe src='https://public.tableau.com/views/Book1_test_15659692754240/Sheet4?:showVizHome=no&:embed=true' title='data' width='500' height='500'></iframe> */}
      </div>
    )
  }
}

export default App;
