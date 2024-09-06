// client/src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import Header from './components/Header';
import './App.css'
import CustomItemContext from './context/ItemContext';
 
const App = () => {
    return (
        <CustomItemContext>
            <Header />
            <br></br>  <br></br>  <br></br>  <br></br>
            <ProductList />
        </CustomItemContext>
    );
};
 
export default App;