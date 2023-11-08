import React, {useState} from 'react';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {User} from '../types';



function App() {

  const [user, setUser] = useState<User[]>([
    { name: 'User 1', email: 'name@example.com', isActive: true, role: 'user' },
    { name: 'User 2', email: 'name@example.com', isActive: false, role: 'editor' },
    { name: 'User 3', email: 'name@example.com', isActive: true, role: 'admin' },
  ]);

  return (
    <>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-6">
            <UserForm/>
          </div>
          <div className="col-6">
            <Users userData={user}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
