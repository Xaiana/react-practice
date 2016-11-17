import ChildComponent from './ChildComponent.js';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "Hello World!",
      paragraph: "Hola Amigos!"
    }
  }
  render() {
    setTimeout(() => {
      this.setState({paragraph: "Como esta?"})
    }, 2000);
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <ChildComponent thisIsProps={this.state.paragraph}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
