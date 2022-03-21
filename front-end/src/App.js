import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Main from './Components/mainPage'
import Login from './Components/login'
import SignUp from './Components/signUp'
import Dashboard from './Components/admin/dashboard';
import jwt_decode from "jwt-decode";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/admin/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
  );
}



export default App;
