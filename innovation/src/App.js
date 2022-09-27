import { Navbar } from './components/navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Favourite } from './components/favourite/Favourite';
import { Product } from './components/product/Product';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
        <Route path="/products/:Id" element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
