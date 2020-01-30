import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../presentation/App";
import { setDataPoints } from "../../actions/"

const mapStateToProps = state => {
    return {
        dataPoints: state.rootReducer.dataPoints
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setDataPoints: (dataPoints) => {
            dispatch(setDataPoints(dataPoints));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);