import React from 'react';

import * as d3 from 'd3';

import '../css/pages.css';
import { getSpotifyColor } from '../utils/color';


export class AnalyticsPage extends React.Component<{}, {}> {

  ref!: SVGSVGElement;  
  
  private buildGraph(data: any) {
    const width = 200,
    scaleFactor = 10,
    barHeight = 20;

    const graph = d3.select(this.ref)
      .attr("width", width)
      .attr("height", barHeight * 1);

    const bar = graph.selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", function(d, i) {
        console.log("test");
        console.log(d);
            return "translate(0," + i * barHeight + ")";
      })
      .style('fill', getSpotifyColor());

    bar.append("rect")
      .attr("width", function(d) {
                return 1 * scaleFactor;
      })
      .attr("height", barHeight - 1);
       
    bar.append("text")
      .attr("x", function(d) { 
        console.log("test");
        console.log(d);
        return (1 * scaleFactor); })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return "test"; });
    
  }
  
  componentDidMount() {

  }

  render() {
    return (<div className="svg">
      <svg className="container" ref={(ref: SVGSVGElement) => this.ref = ref} width='100' height='100'></svg>
    </div>);
  }

};