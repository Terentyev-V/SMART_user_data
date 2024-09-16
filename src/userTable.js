import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserItem from './userItem';

const UserTable = ({ users }) => {
  // State for search inputs
  const [nameSearch, setNameSearch] = useState('');
  const [usernameSearch, setUsernameSearch] = useState('');
  const [emailSearch, setEmailSearch] = useState('');
  const [phoneSearch, setPhoneSearch] = useState('');

  // Filter users based on the search input
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(nameSearch.toLowerCase()) &&
    user.username.toLowerCase().includes(usernameSearch.toLowerCase()) &&
    user.email.toLowerCase().includes(emailSearch.toLowerCase()) &&
    user.phone.toLowerCase().includes(phoneSearch.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          <th>
            Name
            <br />
            <input
              type="text"
              placeholder="Search by name"
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
            />
          </th>
          <th>
            Username
            <br />
            <input
              type="text"
              placeholder="Search by username"
              value={usernameSearch}
              onChange={(e) => setUsernameSearch(e.target.value)}
            />
          </th>
          <th>
            Email
            <br />
            <input
              type="text"
              placeholder="Search by email"
              value={emailSearch}
              onChange={(e) => setEmailSearch(e.target.value)}
            />
          </th>
          <th>
            Phone
            <br />
            <input
              type="text"
              placeholder="Search by phone"
              value={phoneSearch}
              onChange={(e) => setPhoneSearch(e.target.value)}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

UserTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserTable;
