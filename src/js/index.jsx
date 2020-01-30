import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Container from "./components/container/"
import store from "./store/";
import '../index.html';

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById("root")
);



