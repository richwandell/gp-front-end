import React, { Component } from "react";
import Plot from 'react-plotly.js';

export default function Histogram(props) {
    let x = props.dataPoints[0],
        y = props.dataPoints[1];
    const plotStyle = {width: "50%", display: "inline-block"};
    return ([
        <Plot
            key={"histogram-1"}
            style={plotStyle}
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
            style={plotStyle}
            layout={{title: 'Histogram Side by Side'}}
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
                }]} />,
        <Plot
            key={"histogram-3"}
            style={plotStyle}
            layout={{
                title: 'Histogram Overlay',
                barmode: "overlay"
            }}
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
                    name: 'X Values',
                    opacity: 0.5,
                    marker: {
                        color: 'green',
                    }
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
                    name: 'Y Values',
                    opacity: 0.5,
                    marker: {
                        color: 'red',
                    }
                }]} />
    ]);
};