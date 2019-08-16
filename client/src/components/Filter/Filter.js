import React from 'react';

class Filter extends React.Component {

  
  render() {


    return (
      <main>
        <div className='hero'>
          <div className='filter__flex'>
            <iframe src='https://public.tableau.com/views/pie_chart_1_15659826080520/AggregateRatingall?:showVizHome=no&:embed=true' title='data' className='filter__graph'></iframe>
            <iframe src='https://public.tableau.com/views/pie_chart_2/TopAggregaterating?:showVizHome=no&:embed=true' title='data' className='filter__graph'></iframe>
          <iframe src='https://public.tableau.com/views/bar_cost/Top10mostexpensivefor2?:showVizHome=no&:embed=true' title='data' className='filter__graph'></iframe>
          </div>
        </div>
      </main>
    )
  }
}

export default Filter;
