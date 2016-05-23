
## WEBPACK
- [ ] Start a new node project `npm init`
- [ ] Install Webpack `npm install webpack --save`
- [ ] Create an `webpack.config.js` file with the following content:

  ```javascript
  module.exports = {

  };
  ```

- [ ] Define the webpack entry file as this one:

  ```javascript
  module.exports = {
    entry: './src/App.js'
  };
  ```

- [ ] Tell Webpack where to save the compiled file by defining `output`.

  ```javascript
  module.exports = {
    entry: './src/App.js',
    output: {
      path: './public/js',
      filename: 'bundle.js'
    }
  };
  ```

- [ ] Create a new npm script that will run/watch webpack. By using an npm script, we'll use the webpck module installed in the project instead of a globally installed one.

  ```javascript
  "scripts": {
    "webpack": "webpack -w"
  }
  ```

- [ ] Include the bundled file in the body of index.html
- [ ] Run the npm script your created above: `npm run webpack` - [ ] this will create `bundle.js` in the public/js directory
- [ ] Open `index.html` in a browser and you should see "Hello World!" in the console, as defined at the top of this file.




## BABEL
- [ ] Install the following Babel modules and save them as dev dependencies: `npm install babel-core babel-loader babel-preset-react --save-dev`
- [ ] Define 'babel-preset-react' as a loader for Webpack:

  ```javascript
  module.exports = {
    entry: './src/App.js',
    output: {
      path: './public/js',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/, all files that end in '.js' will be ran through this loader
          include: /src/, only run through files located in the `src` directory
          exclude: /node_modules/, ignore the `node_modules` directory
          loader: 'babel-loader', use the babel-loader module
          query: {
            presets: ["react"] use the babel-preset-react preset
          }
        }
      ]
    }
  };
  ```

- [ ] Restart Webpack `npm run webpack` and make sure you can still load `index.html` in a browser.



## REACT BASICS

### createClass/JSX
- [ ] Install `react` and `react-dom`: `npm install react react-dom --save`
- [ ] Include the newly installed `react` & `react-dom` modules into App.js
- [ ] Create a basic React component called `App` using `React.createClass`.
- [ ] Define the `render` method and use JSX to return "Hello World!"
- [ ] Using `ReactDOM.render`, tell React which element in `index.html` it should place the returned JSX into.
- [ ] Webpack should have picked up your changes and recompiled bundle.js. Make sure you can still load `index.html` in a browser and it displays "Hello World!"



### lifecycle
- [ ] Add the most commonly used lifecycle methods to your React component: `getInitialState` and `componentDidMount`
- [ ] Add a `console.log` into each lifecycle method so we can see the order in which they are called.
- [ ] Go to `index.html` in a browser, check out the console logs to see the order in which the methods are ran.




### getInitialState
- [ ] Within 'getInitialState', define a new state variable within the component called `textToDisplay`, and set it's value to `Hello World!`
- [ ] Replace the text in the `render` method with the value of this new state variable: `this.state.textToDisplay`
- [ ] Check `index.html` in a browser and make sure it's still rendering "Hello World!"




### setState
- [ ] Within 'componentDidMount', define a `setTimeout` method that will update the `textToDisplay` state value to your name after 2 seconds
- [ ] After 2 seconds, you should see the displayed text change from "Hello World!" to "Hello [Your Name]!"




### styles (css classes)
- [ ] Give your React component a css class name by defining the `className` attribute
- [ ] Use the css class name to change the displayed text to red




### events
- [ ] Create a new, custom method called `_handleClick`
- [ ] Have this new method change the value of `textToDisplay` to something else
- [ ] Set the `onClick` property of your React component to the new `_handleClick` method you just defined
- [ ] Wait 2 seconds to allow the text to change. Then click the text and watch it change again.




## ES2015

### setup
- [ ] Install a new babel preset called `babel-preset-es2015` and save it as a dev dependency: `npm install babel-preset-es2015 --save-dev`
- [ ] Add the new preset to your Webpack config
- [ ] Since we changed the Webpack config, we'll need to restart it.




### conversion
- [ ] Make the following changes in `App.js`
- [ ] Change all of the React component methods to use the shorthand syntax.
- [ ] Change all of the variable declarations to use `const` if the value will never change, or `let` if the value will change after it's defined.
- [ ] Use a fat arrow method to define functions where we don't want/need a new scope.
