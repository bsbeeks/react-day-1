
## WEBPACK
1. Start a new node project `npm init`
2. Install Webpack `npm install webpack --save`

3. Create an `webpack.config.js` file with the following content:

```javascript
module.exports = {

};
```

4. Define the webpack entry file as this one:

```javascript
module.exports = {
  entry: './src/App.js'
};
```

5. Tell Webpack where to save the compiled file by defining `output`.

```javascript
module.exports = {
  entry: './src/App.js',
  output: {
    path: './public/js',
    filename: 'bundle.js'
  }
};
```

6. Create a new npm script that will run/watch webpack. By using an npm script, we'll use the webpck module installed in the project instead of a globally installed one.

```javascript
"scripts": {
  "webpack": "webpack -w"
}
```

8. Include the bundled file in the body of index.html
9. Run the npm script your created above: `npm run webpack` - this will create `bundle.js` in the public/js directory
10. Open `index.html` in a browser and you should see "Hello World!" in the console, as defined at the top of this file.




## BABEL
1. Install the following Babel modules and save them as dev dependencies: `npm install babel-core babel-loader babel-preset-react --save-dev`
2. Define 'babel-preset-react' as a loader for Webpack:

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

3. Restart Webpack `npm run webpack` and make sure you can still load `index.html` in a browser.



## REACT BASICS

### createClass/JSX
1. Install `react` and `react-dom`: `npm install react react-dom --save`
2. Include the newly installed `react` & `react-dom` modules into App.js
3. Create a basic React component called `App` using `React.createClass`.
4. Define the `render` method and use JSX to return "Hello World!"
5. Using `ReactDOM.render`, tell React which element in `index.html` it should place the returned JSX into.
6. Webpack should have picked up your changes and recompiled bundle.js. Make sure you can still load `index.html` in a browser and it displays "Hello World!"



### lifecycle
1. Add the most commonly used lifecycle methods to your React component: `getInitialState` and `componentDidMount`
2. Add a `console.log` into each lifecycle method so we can see the order in which they are called.
3. Go to `index.html` in a browser, check out the console logs to see the order in which the methods are ran.




### getInitialState
1. Within 'getInitialState', define a new state variable within the component called `textToDisplay`, and set it's value to `Hello World!`
2. Replace the text in the `render` method with the value of this new state variable: `this.state.textToDisplay`
3. Check `index.html` in a browser and make sure it's still rendering "Hello World!"




### setState
1. Within 'componentDidMount', define a `setTimeout` method that will update the `textToDisplay` state value to your name after 2 seconds
2. After 2 seconds, you should see the displayed text change from "Hello World!" to "Hello [Your Name]!"




### styles (css classes)
1. Give your React component a css class name by defining the `className` attribute
2. Use the css class name to change the displayed text to red




### events
1. Create a new, custom method called `_handleClick`
2. Have this new method change the value of `textToDisplay` to something else
3. Set the `onClick` property of your React component to the new `_handleClick` method you just defined
4. Wait 2 seconds to allow the text to change. Then click the text and watch it change again.




## ES2015

### setup
1. Install a new babel preset called `babel-preset-es2015` and save it as a dev dependency: `npm install babel-preset-es2015 --save-dev`
2. Add the new preset to your Webpack config
3. Since we changed the Webpack config, we'll need to restart it.




### conversion
1. Make the following changes in `App.js`
2. Change all of the React component methods to use the shorthand syntax.
2. Change all of the variable declarations to use `const` if the value will never change, or `let` if the value will change after it's defined.
3. Use a fat arrow method to define functions where we don't want/need a new scope.