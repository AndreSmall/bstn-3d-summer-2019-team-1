import React from 'react';
import tableau from 'tableau-api';

class Graph extends React.Component {
    
        componentDidMount() {
            this.initViz()
        }
        
        
        initViz() {
            const vizUrl = 'https://public.tableau.com/views/Book1_test_15659692754240/Sheet4?:showVizHome=no&:embed=true';
            const vizContainer = this.vizContainer;
            let viz = new window.tableau.Viz(vizContainer, vizUrl)
        }
        
        
        render() {
            return (
                <div ref={(div) => { this.vizContainer = div }}>
                </div>
            )
        }
    }
export default Graph;