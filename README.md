# GP Front End
This app consists of two files compiled using webpack into a folder `dist`.
1. App.js
2. index.html

View this app on github pages https://richwandell.github.io/gp-front-end/dist/

## Running the App
### Using node
This app can run using Node by running `npm start` from the command line in the same folder that the app is installed.
This will use the `npx http-server` command to start a static http server and serve files from the `dist` folder.
This will serve the app at `localhost:8080`.

### Using Docker-Compose
This app can be run using Docker Compose by running `docker-compose up`. A docker file is provided in the root
of the folder which copies the `dist` folder into the default `nginx` directory.
```dockerfile
FROM nginx:stable
COPY ./dist/ /usr/share/nginx/html
```
The `docker-compose.yml` file is used to export the containers port 80 to the host machine port 8080. This
 will serve the app at `localhost:8080`.


## Entrypoint
Webpack compiles the app using the entrypoint file `src/js/index.jsx`. 

```jsx harmony
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Container from "./components/container/"
import store from "./store/";
import '../scss/style.scss';
import '../index.html';

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById("root")
);
```

This file wraps a "container component" with a redux "provider" which maps the redux state to the "presentation component props". 
The container component uses the redux provided method "connect" to connect the state and dispatch method mappers to the react component "App"
which is found in `src/js/components/presentation/App.jsx`.
```jsx harmony
export default connect(mapStateToProps, mapDispatchToProps)(App);
```
Finally, the "ReactDOM.render" method renders this provider into the document element with ID "root".

### App Component and Redux
The App Component renders a button tag with an "onClick" event handler.
```jsx harmony
<button onClick={(event) => this.buttonClicked(event)} >Generate 100 Random Numbers</button>
```
When the button is clicked the "buttonClicked" method is called. The button clicked method
generates 100 random numbers and adds them into two arrays. These arrays are then passed into the 
redux "setDataPoints" action. 
```jsx harmony
this.props.setDataPoints([x, y]);
```
The setDataPoints action is defined in `src/js/actions/index.js`. This action dispatches a redux state change. 
When the redux state is changed the "reducer" in `src/js/reducers/index.js` is used to 
return a new state based on the dispatched action with the accompanying payload.
```jsx harmony
return Object.assign({}, state, {
    dataPoints: action.payload
});
```
### Plot.ly
In the App component, if the "dataPoints" property is not empty, then the App will render
the Linegraph and Histogram components found in the `src/js/components/presentation` folder. 
Both the Linegraph and Histogram components use Plot.ly javascript library to render these numbers into 
charts. 

## Development
This app can be run in development mode by installing the node modules using `npm install` and then 
running the `webpack-development-server` with `npm run build-dev`. 

Running `npm install` will take some time. First it will install all of the modules required to run the app, then
it will build the app using the `postinstall` hook. 
```json
{"postinstall": "webpack --mode production --config webpack.prod.js"}
```
This will re generate the files in the `dist` folder.

Running `npm run build-dev` will start `webpack-dev-server` using the `webpack.dev.js` config. The dev server should 
automatically open a web browser at `localhost:8080` with a live reload enabled.

### Webpack
Webpack is configured with 3 files. `webpack.common.js` is used as the base configuration for the app. This file is imported
into the `webpack.dev.js` and `webpack.prod.js` files. 

`webpack.dev.js` sets the mode to `development`, enabled inline sourcemaps, and enables file system watching which will re compile files
when they are changed. This file is used when running `npm run build-dev`. 

`webpack.prod.js` sets the mode to `production` and uses the plugin `webpack.DefinePlugin` to set an environment variable
NODE_ENV to `production`. This will produce a smaller App.js file which is ready for loading in prod.

