//This component fetches the products from the backend server.
// It uses the axios http client which is a lightweight js library for server aide actions.(get, post, delete, put)

import React, { Component } from 'react';
import axios from 'axios';
import ProductItems from './ProductItems';


//The products obtained from the database will be stored in a 'State' for easy accessibility in the component.
// Another component will be created for each product items that will be listed in the dashboard.
class Product extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }


  //This function makes the request to the backend server.
  getProducts(){
    axios.get('http://localhost:3000/api/saal_pms_app_models')
      .then(response =>{
        this.setState({
          products: response.data
        }, ()=>{console.log(this.state)
        })
      }).catch(err =>{
        console.log(err)
    })
  }
  // To run the getProducts methods, use the Lifecycle methods of React. here it is 'ComponentWillMount'
  componentWillMount(){
    this.getProducts()
  }


  render (){
    //A variable for easy iteration through the items in the array.
    const productItems = this.state.products.map((eachProduct, i) => {
      return (
        <ProductItems key={eachProduct.id} eachProduct={eachProduct} />
      )
    });
    return (
      <div>
        <h1>Products Dashboard</h1>
        <ul className="collection">
          {productItems}
        </ul>
      </div>
    )
  }
}
export default Product;
