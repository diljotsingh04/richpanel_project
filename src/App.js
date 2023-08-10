import Signup from './components/authentication/signup';
import Login from './components/authentication/login';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Signup/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/hero_page' element={<Home/>} ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
