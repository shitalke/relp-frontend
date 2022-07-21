import React, {Component} from "react";
import RestroomGallery from "./RestroomGallery";
import RestroomInformation from "./RestroomInformation";
import RestroomDiscussion from "./RestroomDiscussion";
import RestroomMap from "./RestroomMap";
import RestroomTitle from "./RestroomTitle";
import RestroomRating from "./RestroomRating";
import RestroomReview from "./RestroomReview";
import {Container} from "reactstrap";
import withParams from "../utils/withParams";

import axios from "axios";

// const restroom_id = "62911007df852dc6cadb3ba4";
class RestroomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creation_date: "2000-01-01T00:00:00",
      name: "",
      location: "",
      handicap: false,
      latitude: 0,
      longitude: 0,
      single_use: false,
      num_comments: 0,
      num_ratings: 0,
      rating_total: 0
    };
  }

  componentDidMount = () => {
    axios.get("/restrooms/info/" + (this.props.params.restroom_id)).then(response => {
      console.log(response.data);
      this.setState({
        creation_date: response.data.creation_date,
        name: response.data.name,
        location: response.data.location,
        handicap: response.data.handicap,
        latitude: response.data.latitude.$numberDecimal,
        longitude: response.data.longitude.$numberDecimal,
        single_use: response.data.single_use,
        num_comments: response.data.num_comments,
        num_ratings: response.data.num_ratings,
        rating_total: response.data.rating_total
      });
    });
  };

  render() {
    return (
      <Container className="bg-light border text-center" fluid="sm">
        <RestroomTitle name={this.state.name} location={this.state.location} />

        <RestroomGallery />

        <RestroomRating
          num_ratings={this.state.num_ratings}
          rating_total={this.state.rating_total}
        />

        <RestroomInformation
          handicap={this.state.handicap}
          single_use={this.state.single_use}
        />

        <RestroomMap
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          name={this.state.name}
        />

        <RestroomReview />

        <RestroomDiscussion
          id={this.props.params.restroom_id}
          num_comments={this.state.num_comments}
        />
      </Container>
    );
  }
}

export default withParams(RestroomPage);