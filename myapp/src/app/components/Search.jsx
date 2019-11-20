import React, { useEffect, useState } from "react";
import axios from "axios";
import { CometSpinLoader } from 'react-css-loaders';
import { calculateAge } from '../utils/calculateAge';
import { convertToDate } from '../utils/convertToDate.js';
import { convertToDateTime } from '../utils/convertToDateTime';

const Search = () => {
  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(true)
  const [availableUsers, setavailableUsers] = useState([])
  const [searchNameValue, setsearchNameValue] = useState('')
  const [searchNumberValue, setsearchNumberValue] = useState('')

  const getUsers = () => {
    axios
      .get("http://localhost:8080/api/")
      .then(res => res.data)
      .then(data => {
        setisLoading(false)
        setusers(data)
        setavailableUsers(data)
      })
      .catch(err => console.log("Error from axios: ", err));
  };

  const filterByName = name => {
    console.log(name)
    if (searchNameValue === '' && searchNumberValue === '') {
      setavailableUsers(users)
    }
  }

  const filterByNumber = phone => {
    console.log(phone)
    if (searchNameValue === '' && searchNumberValue === '') {
      setavailableUsers(users)
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="search-body-container">
        <div id="heading-container">
          <h1>Search orders</h1>
        </div>
        <div id="search-container">
          <input type="search" name="search-name" id="search-input-name" placeholder="Search by Name" onChange={e => { filterByName(e.target.value);  }} />
          <input type="search" name="search-number" id="search-input-number" placeholder="Search by Number" onChange={e => { filterByNumber(e.target.value); setsearchNumberValue(e.target.value) }} />
        <br/>
        <br/>
        <br/>
        </div>
        <div id="table-heading-container">
          <h2>Orders</h2>
        </div>
        <table id="users-table">
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            {/* <th>Age (years)</th> */}
            <th>Birthday (DD-MM-YYY)</th>
            <th>Ordered on</th>
            <th>Ordered at</th>
            <th>Ordered Amount</th>
          </tr>
          {isLoading ? <CometSpinLoader /> : ''}
          {availableUsers.map((user, i) =>
            user.name.toLocaleLowerCase().startsWith(searchNameValue.toLocaleLowerCase()) && user.phone.startsWith(searchNumberValue) ? <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              {/* <td>{calculateAge(convertToDate(user.dob))}</td> */}
              <td>{(user.dob).toString().split('-').reverse().join('-')}</td>
              <td>{convertToDateTime(user.createdAt).toDateString()}</td>
              <td>{convertToDateTime(user.createdAt).toTimeString().substring(0, 5)} Hrs</td>
              <td>{user.amount}</td>
            </tr> : ''
          )}
        </table>
        <ol>

        </ol>
      </div>
    </>
  );
};

export default Search;
