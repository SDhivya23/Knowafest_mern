//import  from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import First from './Components/First';
import CreatePost from './Components/CreatePost.jsx';
import Profile from './Components/Profile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



