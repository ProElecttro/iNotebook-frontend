import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

import NoteState from './contexts/note/notestate'

import Login from './components/login';
import SignUp from './components/signup';
import Alert from './components/alert';
import AlertState from './contexts/alert/alertState';
import Test from './reduxtest';

const App = () => {
  return (
    <AlertState>
      <NoteState>
        <BrowserRouter>
          <Navbar title="iNotebook" />
          <div style={{height: "50px"}}>
            <Alert />
          </div>
          <div className="container">
            <Routes>
              <Route path="/test" element={<Test />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </AlertState>
  );
}

export default App;