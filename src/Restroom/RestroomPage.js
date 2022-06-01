import React, {Component} from 'react';
import RestroomGallery from './RestroomGallery';
import RestroomInformation from './RestroomInformation';
import RestroomDiscussion from './RestroomDiscussion';
import RestroomMap from './RestroomMap';
import RestroomTitle from './RestroomTitle';
import RestroomRating from './RestroomRating';
import axios from "axios";

const restroom_id = "6297e0e2a3380b5be5b7139f";
export default class RestroomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        creation_date:"2000-01-01T00:00:00",
        name: "",
        location: "",
        handicap: false,
        latitude: 0,
        longitude: 0,
        single_use: false,
        num_comments: 0,
        num_ratings: 0,
        rating_total: 0,
    }
  }

  componentDidMount = () => {

    axios.get("/restrooms/info/" + restroom_id).then(response => {
      console.log(response.data)
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
        rating_total: response.data.rating_total,
      })
    })
  }


  render() {
    return(
      <>
        <RestroomTitle name={this.state.name} location={this.state.location}/>

        <RestroomGallery />

        <RestroomRating num_ratings={this.state.num_ratings} rating_total={this.state.rating_total}/>

        <RestroomInformation handicap={this.state.handicap} single_use={this.state.single_use} />

        <RestroomMap latitude={this.state.latitude} longitude={this.state.longitude}/>

        <RestroomDiscussion id={restroom_id} num_comments={this.state.num_comments}/>
      </>
    );
  }
}
