import React, {Component} from 'react';
import RestroomGallery from './RestroomGallery';
import RestroomInformation from './RestroomInformation';
import RestroomDiscussion from './RestroomDiscussion';
import RestroomTitle from './RestroomTitle';

export default class RestroomPage extends Component {
  render() {
    return(
      <>
        <RestroomTitle />

        <RestroomGallery />

        <RestroomInformation />

        <RestroomDiscussion />
      </>
    );
  }
}
