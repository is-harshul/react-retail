import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import img from '../assets/ballpen-blur.jpg'
import RetailModal from './atoms/RetailModal';
import Alert from './atoms/RetailAlert';

const Example = props => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [dob, setdob] = useState("");
  const [orderAmount, setorderAmount] = useState("");
  const [isFormComplete, setisFormComplete] = useState(true);
  const [formSuccess, setformSuccess] = useState(false)

  const toggle = () => setisFormComplete(!isFormComplete);

  const handleSubmit = e => {
    // e.preventDefault();
    console.log(phone.length);
    if (name === '' || phone === '' || dob === '' || orderAmount === '') {
      setisFormComplete(false)
      return
    }
    const ob = {
      payload: {
        name,
        dob,
        phone,
        amount: orderAmount
      }
    };
    axios
      .post("http://localhost:8080/api", ob)
      .then(res => { ((res.status === 200 && res.data._id !== undefined) ? console.log("Posted from AXIOS with response =>", res) : console.log("Error from AXIOS, response =>", res)); return res; } )
      .then(res => (res.status === 200 && res.data._id !== undefined) ? setformSuccess(true) : console.log("Some Error"))
      // .then(_ => { props.history.push('/search')})
      .catch(err => console.log("Error from axios: ", err));
  };
  return (
    <div style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: 20 }}>
      <section id="form-container">
        {!isFormComplete && <RetailModal isOpen={!isFormComplete} color="warning" toggle={toggle} title="Fill all fields correctly." />}
        <Form id='reg-form'>
          <h1>ENTER YOUR ORDER DETAILS</h1>
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
        {formSuccess && <Alert style={{margin: "20px auto", width: "80%", textAlign: "center" }} type="success" body="Successfully placed" /> }
        </Form>
      </section>
    </div>
  );
};

export default Example;
