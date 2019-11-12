import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import img from '../assets/ballpen-blur.jpg'

const Example = props => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [dob, setdob] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    const ob = {
      payload: {
        name,
        dob,
        phone
      }
    };
    axios
      .post("http://localhost:8080/api", ob)
      .then(_ => console.log("Posted from AXIOS"))
      .then(_ => { props.history.push('/search'); alert("Successfully posted") })
      .catch(err => console.log("Error from axios: ", err));
  };
  return (
    <div style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: 20 }}>
      <section id="form-container">
        <Form>
          <h1 style={{ color: "white" }}>Register</h1>
          <br />
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input
              className="formElements"
              type="name"
              name="name"
              id="Name"
              placeholder="Enter the name"
              onChange={e => setname(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="number">Phone Number</Label>
            <Input
              className="formElements"
              type="number"
              name="number"
              id="number"
              placeholder="Enter phone number"
              onChange={e => setphone(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input
              className="formElements"
              type="date"
              name="date"
              id="exampleDate"
              placeholder="Select Date"
              onChange={e => setdob(e.target.value)}
            />
          </FormGroup>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default Example;
