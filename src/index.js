import ChildComponent from './ChildComponent.js';
import Button from './Button.js';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      title: "Hello World!",
      paragraph: "Hola Amigos!",
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date() });
  }

  render() {
    const divStyle = {
      color: 'blue',
      textAlign: 'center',
    };
    setTimeout(() => {
      this.setState({paragraph: "Como esta?"})
    }, 2000);
    return (
      <div style={divStyle}>
        <h1>{this.state.title}</h1>
        <ChildComponent thisIsProps={this.state.paragraph}/>
        <p>It is {this.state.date.toLocaleTimeString()}.</p>
        <Button />
      </div>
    );
  }
}
export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
