import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from './userSlice';
import UserTable from './userTable';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    const loadUsers = async () => {
      dispatch(fetchUsersStart());
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        dispatch(fetchUsersSuccess(data));
      } catch (error) {
        dispatch(fetchUsersFailure(error.message));
      }
    };

    loadUsers();
  }, [dispatch]);

  return (
    <div>
      <h1>User Data</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <UserTable users={users} />
    </div>
  );
};

export default App;
