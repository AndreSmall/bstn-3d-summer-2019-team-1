import React from 'react';

class Filter extends React.Component {

  state={
    graph:''
  }
  
  setGender = (event) => {
    let url = event.target.value
    this.setState({graph: url})

  }
  



  
  render() {


    return (
      <main>
        <div className='hero'>
          <form onChange={this.setGender}>
            <input type="radio" value="https://public.tableau.com/views/Book1_test_15659692754240/Sheet4?:showVizHome=no&:embed=true" name="gender"/> Graph 1
            <input type="radio" value="https://public.tableau.com/views/Book1_test_15659692754240/Sheet2?:showVizHome=no&:embed=true" name="gender"/> Graph 2
            
            <iframe src={this.state.graph} title='data' width='500' height='500'></iframe>

          </form>
        </div>
      </main>
    )
  }
}

export default Filter;
