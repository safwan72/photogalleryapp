import React, { Component } from "react";
import { Button, FormGroup, Label, Alert } from "reactstrap";
import { Form, Control, actions, Errors } from "react-redux-form";
import { connect } from "react-redux";
import axios from "axios";
const mapDispatchToProps = (dispatch) => {
  return { resetForm: () => dispatch(actions.reset("feedbackform")) };
};

const required = (val) => val && val.length;
const checknumber = (val) => !isNaN(Number(val));
const baseurl = "http://localhost:3001/";
class FeedBackForm extends Component {
  state = {
    alertisopen: false,
    alerttext: "",
    alertcolor: "",
  };

  submitHandler(val) {
    console.log(val);
    axios
      .post(baseurl + "feedbacks", val)
      .then((response) => {
        this.setState({
          alertcolor:'success',
          alertisopen:true,
          alerttext:"Comment Added Succesfully"
        })
        setTimeout(() => {
          this.setState({
            alertcolor:'',
            alertisopen:false,
            alerttext:"Comment Added Succesfully"
          })
        }, 2000);
      })
      .catch((err) =>{
        this.setState({
          alertcolor:'danger',
          alertisopen:true,
          alerttext:'Sorry... Comment Adding Failed, Try Again.'
        })
      setTimeout(() => {
        this.setState({
          alertcolor:'',
          alertisopen:false,
          alerttext:""
        })
      }, 2000);
      });

    this.props.resetForm();
  }

  render() {
    return (
      <>
        <Alert color={this.state.alertcolor} isOpen={this.state.alertisopen}>
          {this.state.alerttext}
        </Alert>
        <div className="container">
          <Form
            className="w-75 mx-auto my-5"
            model="feedbackform"
            onSubmit={(val) => this.submitHandler(val)}
          >
            <FormGroup>
              <Control.text
                className="form-control my-4 p-4 rounded-lg"
                style={{fontSize:'21px'}}
                model=".aname"
                placeholder="Enter Your Name Here"
                validateOn="change"
                validators={{
                  required,
                }}
              />
              <Errors
                model=".aname"
                show="touched"
                className="text-danger"
                messages={{
                  required: "Please Input Your Name !!!",
                }}
              />
            </FormGroup>
            <FormGroup>
              <Control.text
                model=".anumber"
                style={{fontSize:'21px'}}
                className="form-control my-4 p-4 rounded-lg"
                placeholder="Enter Your Number Here ( +880 )"
                validateOn="change"
                validators={{
                  checknumber,
                  required,
                }}
              />
              <Errors
                model=".anumber"
                show="touched"
                className="text-danger"
                messages={{
                  checknumber: "Please Input A Number !!!",
                  required: "Enter Your Number",
                }}
              />
            </FormGroup>

            <FormGroup>
              <Control.textarea
                model=".acomment"
                style={{fontSize:'21px'}}
                placeholder="Enter Your Comment Here"
                className="form-control my-4 p-3 rounded-lg"
                validateOn="change"
                validators={{
                  required,
                }}
              />
              <Errors
                model=".acomment"
                show="touched"
                className="text-danger"
                messages={{
                  required: "Please Enter Your Comment !!!",
                }}
              />
            </FormGroup>
            <FormGroup check className="mr-auto my-4">
              <Label check style={{fontSize:"18px"}}>
                <Control.checkbox
                  model=".acheck"
                  className="form-check-input "
                />
                Subscribe For NewsLetters
              </Label>
            </FormGroup>
            <Button type="submit" className='btn btn-lg'>Submit Comment</Button>
          </Form>
        </div>
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(FeedBackForm);
