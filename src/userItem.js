import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user }) => (
  <tr>
    <td>{user.name}</td>
    <td>{user.username}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
  </tr>
);

UserItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserItem;
