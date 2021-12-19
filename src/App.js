import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login'
import Posts from './components/Posts'
import Navbarpage from './components/Navbarpage'
import Home from './components/Home'
function App() {
  return (

    <div className="App">
          <BrowserRouter>
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>

      </BrowserRouter>

   
    </div>
  );
}

export default App;
