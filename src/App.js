import logo from './logo.svg';
import './App.css';
import ListProducts from './components/ListProducts.js';
import FormProducts from './components/FormProducts.js';


function App() {
  return (
    <div className="App">
      <header className="App-header"> 
      <ListProducts></ListProducts> 
      <FormProducts></FormProducts>

      </header>
    </div>
  );
}

export default App;
