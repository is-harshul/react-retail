import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import img from '../assets/ballpen-blur.jpg'
import RetailModal from './atoms/RetailModal';

const Example = props => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [dob, setdob] = useState("");
  const [orderAmount, setorderAmount] = useState("");
  const [isFormComplete, setisFormComplete] = useState(true);
  const [formSuccess, setformSuccess] = useState(false)

  const toggle = () => setisFormComplete(!isFormComplete);

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '' || phone === '' || dob === '' || orderAmount === '') {
      setisFormComplete(false)
      return
    }
    else{
      setformSuccess(true)
    }
    const ob = {
      payload: {
        name,
        dob,
        phone,
        orderAmount
      }
    };
    axios
      .post("http://localhost:8080/api", ob)
      .then(_ => console.log("Posted from AXIOS"))
      .then(_ => { props.history.push('/search')})
      .catch(err => console.log("Error from axios: ", err));
  };
  return (
    <div style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: 20 }}>
      <section id="form-container">
        {!isFormComplete && <RetailModal isOpen={!isFormComplete} color="warning" toggle={toggle} title="Fill all the fields" />}
        {formSuccess && <RetailModal isOpen={!formSuccess} toggle={toggle} color="success" title="Successfully filled the data." />}
        <Form id='reg-form'>
          <h1>Enter your order details</h1>
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
              required
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
              required
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
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="orderAmount">Order Amount</Label>
            <Input
              className="formElements"
              type="number"
              name="orderAmount"
              id="orderAmount"
              placeholder="Enter Order Amount"
              onChange={e => setorderAmount(e.target.value)}
              required
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
