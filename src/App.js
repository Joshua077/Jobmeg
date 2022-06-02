import {
  
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home.page.';
import Users from './pages/Users';
import User from "./pages/user";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users/:users" element={<Users/>}/>
      <Route path="/individual/:user" element={<User/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
