import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Main from './components/MainPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/admin/Dashboard';
import jwt_decode from "jwt-decode";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/admin/*" onEnter={requireAuth} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
  );
}

const isLoggedIn=(()=>{
  let token=localStorage.getItem('token')
  const decoded = jwt_decode(token);
  console.log(decoded)
  return false
})

function requireAuth(nextState, replace, next) {
  if(isLoggedIn())
  {
    replace({
      pathname: "/",
      state: {nextPathname: nextState.location.pathname}
    });
  }
  next();
}

export default App;
