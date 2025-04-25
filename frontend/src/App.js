import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footers from './components/Footers';
import Home from './pages/Home';
import About from './pages/About';
import Men from './pages/Men';
import Women from './pages/Women';
import Trends from './pages/Trends';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Upload from './pages/Upload';
import Update from './pages/Update';
import Edit from './pages/Edit';
import Cart from './pages/Cart';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/trends' element={<Trends/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/edit/:id' element={<Edit/>} loader={({params})=>
        fetch(`http://localhost:6030/fish/${params.id}`)} />

      </Routes>
      <Footers/>
      </BrowserRouter>
    </div>
  );
}

export default App;
