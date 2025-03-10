
import './App.css';
import { ProductCard } from './components/ProductCard';
import { products } from './data';


function App() {
  console.log(products)
  return (
    <div className="App">
       {
        products.map((curr)=>{
          return(
            <ProductCard name={curr.name} category={curr.category} price={curr.price} stock={curr.stock}/>
          )
        })
       }
    </div>
  );
}

export default App;
