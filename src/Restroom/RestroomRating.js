import React, {Component} from 'react';

export default class RestroomRating extends Component {
  render() {
    return(
      <>
        <h2>Rating.</h2>
        <p>There are {this.props.num_ratings} ratings on this restroom. </p>
        <p> Average Rating: {this.props.rating_total / this.props.num_ratings} </p>
      </>
    );
  }
}
