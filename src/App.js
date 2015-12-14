console.log('Hello World!');

//////////////////////////////////////
/// WEBPACK
//////////////////////////////////////
// 1. Start a new node project `npm init`
// 2. Install Webpack `npm install webpack --save-dev -g`
// 3. Create a `public` directory with the following structure

// public
//   - js
//   - css
//   - index.html

// 4. Create an `webpack.config.js` file with the following content:

// module.exports = {

// };

// 5. Define the entry file as this one:

// entry: './src/App.js'

// 6. Tell Webpack where to save the compiled file by defining `output`:

// output: {
//   path: './public/js',
//   filename: 'bundle.js'
// }

// 7. Include the bundled file in the body of index.html
// 8. Run `webpack` - this will create `bundle.js` in the public/js directory
// 9. Open `index.html` in a browser and you should see "Hello World!" in the console, as defined at the top of this file




//////////////////////////////////////
/// BABEL
//////////////////////////////////////\
// 1. Install the Babel loader for Webpack `npm install babel-loader --save-dev`
// 2. Install the Babel react preset `npm install babel-preset-react --save-dev`
// 3. Define it as a loader for Webpack:

// module: {
//   loaders: [
//     {
//       test: /\.js$/, // all files that end in '.js' will be ran through this loader
//       include: /src/, // only run through files located in the `src` directory
//       exclude: /node_modules/, // ignore the `node_modules` directory
//       loader: 'babel?presets[]=react'
//     }
//   ]
// }

// 4. Run `webpack` again and make sure you can still load `index.html` in a browser




//////////////////////////////////////
/// REACT BASICS: createClass
//////////////////////////////////////
// 1. Install `react` and `react-dom`: `npm install react react-dom --save`
// 2. Include the newly installed `react` & `react-dom node` modules into this file
// 3. Create a basic React component using `createClass` and `createElement`. Have it render out some basic text.
// 4. Using `ReactDOM.render`, render the React component into `react` div in `index.html`
// 5. Run `webpack` and make sure you can still load `index.html` in a browser




//////////////////////////////////////
/// JSX
//////////////////////////////////////
// 1. JSX comes built in with Babel, so we don't need to install anything additional
// 2. Convert `createElement` to JSX
// 3. Run `webpack` and make sure you can still load `index.html` in a browser




//////////////////////////////////////
/// REACT BASICS: lifecycle
//////////////////////////////////////
// 1. Add the most commonly used lifecycle methods to your React component: `getInitialState` and `componentDidMount`
// 2. Add a `console.log` into each lifecycle method so we can see the order in which they are called.
// 3. Run `webpack` and make sure you can still load `index.html` in a browser, check out the console logs to see the method order




//////////////////////////////////////
/// REACT BASICS: getInitialState
//////////////////////////////////////
// 1. Within 'getInitialState', define a new state variable within the component called `textToDisplay`, and set it's value to `Hello World!`
// 2. Replace the "World" text in the `render` method with the value of this new state variable: `this.state.textToDisplay`
// 3. Run `webpack` and make sure you can still load `index.html` in a browser




//////////////////////////////////////
/// REACT BASICS: setState
//////////////////////////////////////
// 1. Within 'componentDidMount', define a `setTimeout` method that will update the `textToDisplay` state value to your name after 2 seconds
// 2. Run `webpack` and make sure you can still load `index.html` in a browser
// 3. After 2 seconds, you should see the displayed text change from "Hello World!" to "Hello [Your Name]!" (hint: it won't work!)
// 4. Update `setTimeout` to use a fat-arrow method to avoid scope issues
// 5. Run 'webpack' and take another look...it should work now




//////////////////////////////////////
/// REACT BASICS: styles (css classes & inline styles)
//////////////////////////////////////
// 1. Give your React component a css class name by defining the `className` attribute
// 2. Use the css class name to change the displayed text to red
// 3. Run `webpack` and make sure you can still load `index.html` in a browser
// 3. Remove the class name and use the `style` attribute to change the displayed text to blue
// 3. Run `webpack` and make sure you can still load `index.html` in a browser




//////////////////////////////////////
/// REACT BASICS: events
//////////////////////////////////////
// 1. Create a new, custom method called `_handleClick`
// 2. Have this new method change the value of `textToDisplay` to something else
// 3. Set the `onClick` property of your React component to the new `_handleClick` method you just defined
// 3. Run `webpack` and make sure you can still load `index.html` in a browser
// 4. Wait 2 seconds to allow the text to change. Then click the text and watch it change again.