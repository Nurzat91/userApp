import React from 'react';

const UserForm = () => {
  return (
    <form>
      <h4>Add new users</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
        />
      </div>
      <div className="form-check my-2">
        <label htmlFor="checkbox">Active</label>
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          className="form-check-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select name="role" id="role" className="form-select">
          <option selected>User</option>
          <option>Editor</option>
          <option>Admin</option>
        </select>
      </div>
    </form>
  );
};

export default UserForm;