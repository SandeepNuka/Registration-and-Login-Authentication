
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Register from './components/Register'
import Login from './components/Login';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <h1>Mern Stack Project </h1>
      <div className='row'>
        <div className='col-md-6'>

          <Register/>

        </div>
        <div className ='col-md-6'>

         <Login/>

        </div>
      </div>

      <div className= 'row  justify-content-center'>
        <div className='col-md-8' >
        <UserList/>

      </div>
     
       </div>
      
    </div>
  );
}

export default App;
