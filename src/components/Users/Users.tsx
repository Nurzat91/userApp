import React from 'react';
import UserItem from './UserItem';
import {User} from '../../../types';

interface Props{
  userData: User[];
}

const Users: React.FC<Props> = ({userData}) => {
  return (
    <div>
      <h4>Users</h4>
      {userData.map((user) => (
        <UserItem key={user.id} userData={user} />
      ))}
    </div>
  );
};

export default Users;