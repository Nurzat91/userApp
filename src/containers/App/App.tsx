import {useState} from 'react';
import UserForm from '../../components/UserForm/UserForm';
import Users from '../../components/Users/Users';
import {User} from '../../../types';

function App() {

  const [user, setUser] = useState<User[]>([
    {id: 101, name: 'User 1', email: 'name@example.com', isActive: true, role: 'user' },
    {id: 202, name: 'User 2', email: 'name@example.com', isActive: false, role: 'editor' },
    {id: 303, name: 'User 3', email: 'name@example.com', isActive: true, role: 'admin' },
  ]);

  const addUsers = (user: User) =>{

    setUser((prev) => [...prev, user]);
  }

  return (
    <>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-6">
            <UserForm onSubmit={addUsers}/>
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
