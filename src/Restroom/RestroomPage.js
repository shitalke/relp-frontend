import React, {Component} from 'react';
import RestroomGallery from './RestroomGallery';
import RestroomInformation from './RestroomInformation';
import RestroomDiscussion from './RestroomDiscussion';
import RestroomTitle from './RestroomTitle';
import axios from "axios";

const restroom_id = "6297e0e2a3380b5be5b7139f";
export default class RestroomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        restroom_id: restroom_id
    }
  }

  componentDidMount = () => {

    axios.get("/restrooms/info/" + restroom_id).then(response => {
      console.log(response.data)
      this.setState({
        name: response.data.name
      })
    })
  }


  render() {
    return(
      <>
        <RestroomTitle name={this.state.name}/>

        <RestroomGallery />

        <RestroomInformation />

        <RestroomDiscussion id={this.state.restroom_id}/>
      </>
    );
  }
}
