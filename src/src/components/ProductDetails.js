import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ProductDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }
  //gets the details of a particular product
  getProductDetail(){
    let productId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/saal_pms_app_models/${productId}`)
      .then(response =>{
        this.setState({
          details: response.data
        }, ()=>{console.log(this.state)
        })
      }).catch(err =>{
      console.log(err)
    })
  }
  //Lifecycle method needed to show the products
  componentWillMount(){
    this.getProductDetail();
  }

  //Handles the button delete function
  onDelete(){
    let productId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/saal_pms_app_models/${productId}`)
      .then(response =>{
        this.props.history.push('/')
      })
      .catch(err => {console.log(err)})
  }

  render (){
    return(

      <div>
        <br/>
        <Link className="btn blue" to="/"> Back </Link>
        <h1>{this.state.details.productName}</h1>
        <ul className="collection">
          <li className="collection-item"><strong> Product Category:</strong>  {this.state.details.productCategory}</li>
          <li className="collection-item"><strong>Available Options:</strong>  {this.state.details.availableOption}</li>
          <li className="collection-item"><strong>Product Description:</strong>  {this.state.details.description}</li>
        </ul>
        <Link className="btn green darken-4" to={`/products/edit/${this.state.details.id}`}> <i className="fa fa-pencil"> </i> Edit </Link>
        <button onClick={this.onDelete.bind(this)} className="btn red darken-4 right"> <i className="fa fa-trash"> </i> Delete </button>
      </div>
    )
  }
}
export default ProductDetails;
