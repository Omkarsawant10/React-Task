
import './App.css';
import { Crud } from './components/Crud';
import { FetchApi } from './components/FetchApi';
import { ProductCard } from './components/ProductCard';
import { Counter } from './Counter';
import { products } from './data';


function App() {
  console.log(products)
  return (
    <div className="App">
       {/* <Crud/> */}
       <FetchApi/>
    </div>
  );
}

export default App;
