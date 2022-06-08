import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class RestroomReview extends Component {
  render() {
    return(
      <Form className="mb-2">
        <FormGroup>
            <Label>
              Write a Review!
            </Label>
            <Input
              type="textarea"
            />
        </FormGroup>
        <Button className="">
          Submit
        </Button>
      </Form>
    );
  }
}
