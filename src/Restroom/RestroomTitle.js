import React, {Component} from 'react';

export default class RestroomTitle extends Component {
  render() {
    return(
      <>
        <h1>{this.props.name}</h1>
      </>
    );
  }
}
