import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Main from './components/MainPage'
import Login from './components/Login'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
