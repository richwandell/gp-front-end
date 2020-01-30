import React from "react";
import Plot from 'react-plotly.js';

export default function LineGraph(props) {
    let x = props.dataPoints[0],
        y = props.dataPoints[1];
    return ([
        <Plot key={"linegraph-1"}
            style={{width: "100%"}}
              layout={{title: 'Line Graph<br>Separate axis'}}
              data={[
                  {
                      y: x,
                      type: 'scatter',
                      name: 'X Values'
                  },
                  {
                      y: y,
                      type: 'scatter',
                      name: 'Y Values'
                  }
              ]} />,
        <Plot key={"linegraph-2"}
              style={{width: "100%"}}
              layout={{title: 'Line Graph<br>X&Y line'}}
              data={[
                  {
                      x: x,
                      y: y,
                      type: 'scatter'
                  }
              ]} />
    ]);
};