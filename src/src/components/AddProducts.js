import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class AddProducts extends Component {

  addNewProduct(newProduct){
   //console.log(newProduct);
   axios.request({
     method: "post",
     url: "http://localhost:3000/api/saal_pms_app_models",
     data: newProduct
   }).then(response => {
    this.props.history.push('/');
   }).catch(err => console.log(err))
  }

  onSubmit(e){
    const newProduct = {
      productName: this.refs.productName.value,
      productCategory: this.refs.productCategory.value,
      description: this.refs.description.value,
      availableOption:this.refs.availableOption.value
    };
    this.addNewProduct(newProduct);

    e.preventDefault();
  }


  render(){
    return (
      <div>
        <br/>
        <Link className="btn blue" to="/"> Back </Link>
        <h1>Add New Product</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field col-s3">
              <input type="text" name="productName" ref="productName"/>
              <label htmlFor="productName">Product Name</label>
            </div>
            <div className="input-field col-s3">
              <input type="text" name="productCategory" ref="productCategory"/>
              <label htmlFor="productCategory">Category</label>
            </div>
          <div className="input-field">
            <textarea className="materialize-textarea" type="text" name="description" id="description" ref="description"/>
            <label htmlFor="description" >Description</label>
          </div>
          <div className="input-field">
            <input type="text" name="availableOption" ref="availableOption"/>
            <label htmlFor="availableOption">Options/formats/Styles</label>
          </div>
          <input type="submit" className="btn waves-effect waves-light green darken-4" value="Save" />
        </form>
      </div>
    )
  }
}
export default AddProducts;
