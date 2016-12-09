import React from 'react';
import Radium from 'radium';

 export default class Button extends Radium(Component) {
  static propTypes = {
    kind: React.propTypes.oneOf(['primary', 'warning']).isRequired
  };
  handleClick() {
    console.log('Great');
  }
  render() {
    const styles = {
      background: "green",
      display: "inline-block",
      padding: ".5rem",
      ':hover': {
        backgroundColor: "#FFA500"
      }
    }
    return(
      <div>
        <button kind="primary" style={styles} onClick={this.handleClick.bind(this)}>Click Me</button>
      </div>
    );
  }
}
