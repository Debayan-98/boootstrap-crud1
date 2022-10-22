import logo from './logo.svg';
import './App.css';
import {Home} from './Componenets/Home';
import {AllUser} from'./Componenets/AllUser';
import {AddUser}from'./Componenets/AddUser';
import { EditUser } from './Componenets/EditUser';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Navbar } from './Componenets/Navbar';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/alluser" element={<AllUser/>}/>
          <Route path="/adduser" element={<AddUser/>}/>
          <Route path="/edit/:id" element={<EditUser/>}/>

          </Routes>
      </Router>
    </div>
  );
}

export default App;
