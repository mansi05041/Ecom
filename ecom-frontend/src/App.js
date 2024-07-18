import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AddProduct' element={<AddProduct/>}/>
      </Routes>
    </Router>
  );
}

export default App;
