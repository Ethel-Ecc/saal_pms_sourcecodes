import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItems extends Component {
  constructor(props){
    super(props);
    this.state = {
      myProducts: props.eachProduct
    }
  }
  render (){
    return(
        <li className="collection-item ">
         <Link to={`/products/${this.state.myProducts.id}`}> {this.state.myProducts.productName}</Link>
        </li>

    )
  }
}
export default ProductItems;
