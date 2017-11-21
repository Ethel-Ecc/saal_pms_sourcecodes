import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Product from './Product';
import About from './About';
import ProductDetails from './ProductDetails';
import AddProducts from './AddProducts';
import EditProducts from './EditProducts';


const MainRoutes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Product}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/products/add" component={AddProducts}/>
      <Route exact path="/products/edit/:id" component={EditProducts}/>
      <Route exact path="/products/:id" component={ProductDetails}/>
    </Switch>
  </main>
);

export default MainRoutes;
