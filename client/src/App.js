import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import Card from './components/Card/Card'
class App extends React.Component {
  render() {
    return (
      <div>

        <Navigation/>
        <Card/>

      </div>
    )
  }
}

export default App;
