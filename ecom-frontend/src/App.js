import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavbarImplementation from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<NavbarImplementation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
