
import './App.css';
import { Crud } from './components/Crud';
import { FetchApi } from './components/FetchApi';
import { ProductCard } from './components/ProductCard';
import { Stopwatch } from './components/Stopwatch';
import { Counter } from './Counter';
import { products } from './data';


function App() {
  console.log(products)
  return (
    <div className="App">
       {/* <Crud/> */}
       {/* <FetchApi/> */}
       <Stopwatch/>
    </div>
  );
}

export default App;
