import './App.css';
import logo from './logo.svg';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
      <Footer className="bottom-0"/>
    </Router>
  );
}

export default App;
