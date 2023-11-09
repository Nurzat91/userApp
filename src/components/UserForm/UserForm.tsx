import React, { useState} from 'react';
import {User} from '../../../types';

interface Props{
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [userData, setUserData] = useState<User>({
    id: 1,
    name: '',
    email: '',
    isActive: false,
    role: 'user',
  });

  const changeUsers = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  };

  const checkboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setUserData((prev) => ({
      ...prev,
      isActive: value,
    }));
  };

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(userData);
    setUserData({
      id:  Math.floor(Math.random() * 10),
      name: '',
      email: '',
      isActive: false,
      role: 'user',
    });
  };


  return (
    <form onSubmit={onSubmitForm}>
      <h4>Add new users</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={userData.name}
          onChange={changeUsers}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={userData.email}
          onChange={changeUsers}
        />
      </div>
      <div className="form-check my-2">
        <label htmlFor="checkbox">Active</label>
        <input
          type="checkbox"
          name="isActive"
          id="checkbox"
          checked={userData.isActive}
          onChange={checkboxChange}
          className="form-check-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select name="role" id="role" className="form-select" value={userData.role} onChange={changeUsers}>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary mt-2">Create</button>
    </form>
  );
};

export default UserForm;