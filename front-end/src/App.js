import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Main from './components/MainPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { useState } from 'react';

function App() {
  const [user,setUser]=useState(false)
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
