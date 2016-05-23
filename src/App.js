const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  getInitialState () {
    console.log('getInitialState');

    return {
      textToDisplay: 'Hello World!'
    };
  },

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        textToDisplay: 'Hello Brandon!'
      })
    }, 2000);

    console.log('componentDidMount');
  },

  _handleClick () {
    this.setState({
      textToDisplay: "I've been clicked"
    });
  },

  render () {
    console.log('render');

    return (
      <div className='name' onClick={this._handleClick}>{this.state.textToDisplay}</div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('my-app'));

console.log('Hello World!');