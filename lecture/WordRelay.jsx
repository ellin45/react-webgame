const React = require('react');
const ReactDom = require('react-dom');
class WordRelay extends React.Component {
  state = {
    text: 'Hello, webpack',
  };
  render(){
      return <h1>{this.state.text}</h1>;
  }
}

module.exports = WordRelay;