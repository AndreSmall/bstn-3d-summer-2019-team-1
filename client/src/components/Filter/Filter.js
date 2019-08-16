import React from 'react';

class Filter extends React.Component {

  state={
    graph:'https://public.tableau.com/views/pie_chart_1_15659826080520/AggregateRatingall?:showVizHome=no&:embed=true'
  }
  
  setGender = (event) => {
    let url = event.target.value
    this.setState({graph: url})
  }
  



  
  render() {


    return (
      <main>
        <div className='hero'>
          <form onChange={this.setGender} className='filter__flex'>
            <input type="radio" value="https://public.tableau.com/views/pie_chart_1_15659826080520/AggregateRatingall?:showVizHome=no&:embed=true" name="graph"/> Overview
            <input type="radio" value="https://public.tableau.com/views/pie_chart_2/TopAggregaterating?:showVizHome=no&:embed=true" name="graph"/> Top Categories           
            <iframe src={this.state.graph} title='data' className='filter__graph'></iframe>
          <iframe src='https://public.tableau.com/views/pie_chart_1_15659826080520/Top10mostexpensivefor2?:showVizHome=no&:embed=true' title='data' className='filter__graph'></iframe>

          </form>
        </div>
      </main>
    )
  }
}

export default Filter;
