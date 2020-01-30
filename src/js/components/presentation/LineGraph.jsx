import React from "react";
import Plot from 'react-plotly.js';

export default function LineGraph(props) {
    const x = props.dataPoints[0],
        y = props.dataPoints[1];
    let together = x.map((item, i) => [item, y[i]]);
    together.sort((a, b) => a[0] - b[0]);

    const plotStyle = {width: "50%", display: "inline-block"}
    return ([
        <Plot key={"linegraph-1"}
            style={plotStyle}
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
              style={plotStyle}
              layout={{title: 'Line Graph<br>X&Y together'}}
              data={[
                  {
                      x: x,
                      y: y,
                      type: 'scatter'
                  }
              ]} />,
        <Plot key={"linegraph-3"}
              style={plotStyle}
              layout={{title: 'Line Graph<br>X&Y together sorted by X'}}
              data={[
                  {
                      x: together.map((item) => item[0]),
                      y: together.map((item) => item[1]),
                      type: 'scatter'
                  }
              ]} />
    ]);
};