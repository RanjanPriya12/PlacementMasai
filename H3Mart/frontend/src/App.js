
import './App.css';
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { TopNav } from './components/TopNav';

function App() {
  
  return (
    <div className="App">
      <TopNav/>
      <Navbar/>
      <Products/>
    </div>
  );
}

export default App;
