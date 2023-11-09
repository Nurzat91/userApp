import React from 'react';
import {User} from '../../../types';

interface Props{
  userData: User;
}
const UserItem: React.FC<Props> = ({userData}) => {
  return (
    <div className="card mb-2">
      <div className="row no-gutters">
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">Name: {userData.name}</h5>
            <p className="card-text">Email: {userData.email}</p>
            <p className="card-text">Active: {userData.isActive}</p>
            <p className="card-text">Role: {userData.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;