import React, { useEffect, useState } from "react";
import axios from "axios";
import { CometSpinLoader } from 'react-css-loaders';

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
          <h2>Search a user : </h2>
        </div>
        <div id="search-container">
          <input type="search" name="search-name" id="search-input-name" placeholder="Search by Name" onChange={e => { filterByName(e.target.value); setsearchNameValue(e.target.value) }} />
          <input type="search" name="search-number" id="search-input-number" placeholder="Search by Number" onChange={e => { filterByNumber(e.target.value); setsearchNumberValue(e.target.value) }} />
        </div>
        {isLoading ? <CometSpinLoader /> : ''}
        <table id="users-table">
          <tr>
            <th>S.no.</th>
            <th>Name</th>
            <th>Contact Number</th>
          </tr>
          {availableUsers.map((user, i) =>
            user.name.toLocaleLowerCase().startsWith(searchNameValue.toLocaleLowerCase()) && user.phone.startsWith(searchNumberValue) ? <tr key={user._id}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
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
