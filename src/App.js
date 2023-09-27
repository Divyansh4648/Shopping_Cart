import React from 'react';
import productList from './products';
import './App.css';
import ReactDOM from 'react-dom';
import Cart from './Component/Cart';


function App() {
  return (
    <div className="App">
      <Cart products={productList} />
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);

export default App ;
