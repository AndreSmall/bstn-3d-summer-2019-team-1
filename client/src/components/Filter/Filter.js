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
            <input type="radio" value="https://public.tableau.com/views/pie_chart_1_15659826080520/Sheet6?:showVizHome=no&:embed=true" name="graph"/> Graph 1
            <input type="radio" value="https://public.tableau.com/views/pie_chart_2/Sheet62?:showVizHome=no&:embed=true" name="graph"/> Graph 2
            <input type="radio" value="https://public.tableau.com/views/bar_cost/Sheet63?:showVizHome=no&:embed=true" name="graph"/> Graph 3
            
            <iframe src={this.state.graph} title='data' width='1440' height='800'></iframe>

          </form>
        </div>
      </main>
    )
  }
}

export default Filter;
