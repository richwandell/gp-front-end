import React, { Component } from "react";
import Plot from 'react-plotly.js';

export default function Histogram(props) {
    let x = props.dataPoints[0],
        y = props.dataPoints[1];
    return ([
        <Plot
            key={"histogram-1"}
            style={{width: "100%"}}
            layout={{title: '2d Histogram with color scale'}}
            data={[
                {
                    autosize: true,
                    x: x,
                    y: y,
                    autobinx: false,
                    xbins: {
                        start: 0,
                        end: 1,
                        size: 0.1
                    },
                    autobiny: false,
                    ybins: {
                        start: 0,
                        end: 1,
                        size: 0.1
                    },
                    type: 'histogram2d'
                }]} />,
        <Plot
            key={"histogram-2"}
            style={{width: "100%"}}
            layout={{title: 'Histogram with color scale'}}
            data={[
                {
                    autosize: true,
                    x: x,
                    autobinx: false,
                    xbins: {
                        start: 0,
                        end: 1,
                        size: 0.1
                    },
                    type: 'histogram',
                    name: 'X Values'
                }, {
                    autosize: true,
                    x: y,
                    autobinx: false,
                    xbins: {
                        start: 0,
                        end: 1,
                        size: 0.1
                    },
                    type: 'histogram',
                    name: 'Y Values'
                }]} />
    ]);
};