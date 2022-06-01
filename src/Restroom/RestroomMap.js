import React, {Component} from 'react';

export default class RestroomMap extends Component {
  render() {
    return(
      <>
        <h2>Map.</h2>
        <p> There will be a map here, centered at {this.props.latitude}, {this.props.longitude} </p>
      </>
    );
  }
}
