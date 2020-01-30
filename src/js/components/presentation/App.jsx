import React, { Component } from "react";
import LineGraph from "./LineGraph";
import Histogram from "./Histogram";

class App extends Component {
    /**
     * Generate 50 random number pairs. (100 random numbers)
     */
    buttonClicked() {
        let x = [], y = [];
        for(let i = 0; i < 100; i++) {
            if (i >= 50) {
                x.push(Math.random());
            } else {
                y.push(Math.random());
            }
        }
        this.props.setDataPoints([x, y]);
    }

    render() {
        return (
            <div>
                <button onClick={(event) => this.buttonClicked(event)} >
                    Generate 100 Random Numbers
                </button>
                {this.props.dataPoints.length > 0 ?
                    [<LineGraph key={"linegraph-1"} dataPoints={this.props.dataPoints} />,
                    <Histogram key={"histogram-1"} dataPoints={this.props.dataPoints} />]
                    : ""}
            </div>
        )
    }
}

export default App;