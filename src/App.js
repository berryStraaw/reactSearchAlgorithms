import './styles/App.css';
import Nav from './components/Nav';
import Knight from './components/Knight';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Knight/>}/>
        <Route path='/knight' element={<Knight/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
