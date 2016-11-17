import React from 'react';

export default class ChildComponent extends React.Component {
  render() {
    return(
      <p>{this.props.thisIsProps}</p>
    );
  }
}
