import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditProducts extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:'',
      productName:"",
      productCategory:"",
      description:"",
      availableOption:""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  //gets the details of a particular product
  getEditProductDetail(){
    let productId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/saal_pms_app_models/${productId}`)
      .then(response =>{
        this.setState({
          id: response.data.id,
          productName: response.data.productName,
          productCategory: response.data.productCategory,
          description: response.data.description,
          availableOption: response.data.availableOption
        }, ()=>{
          console.log(this.state);
        })
      }).catch(err =>{
      console.log(err)
    })
  }

  //Lifecycle method needed to show the products
  componentWillMount(){
    this.getEditProductDetail();
  }

  //Will be called once the user clicks the save button..
  edited_Product(editedProduct){
    console.log(editedProduct);
    axios.request({
      method: "put",
      url: `http://localhost:3000/api/saal_pms_app_models/${this.state.id}`,
      data: editedProduct
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err))
  }


  //Similar to addProduct component, but it calls a different function after grabbing the values
  onSubmit(e){
    const editedProduct = {
      productName: this.refs.productName.value,
      productCategory: this.refs.productCategory.value,
      description: this.refs.description.value,
      availableOption:this.refs.availableOption.value
    };
    this.edited_Product(editedProduct);

    e.preventDefault();
  }

  //handleInputChange function, will be called during edit
  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return (
      <div>
        <br/>
        <Link className="btn blue" to="/"> Back </Link>
        <h1>Edit Product</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field col-s3">
            <input type="text" name="productName" ref="productName" value={this.state.productName} onChange={this.handleInputChange}/>
            <label htmlFor="productName" className="active">Product Name</label>
          </div>
          <div className="input-field col-s3">
            <input type="text" name="productCategory" ref="productCategory" value={this.state.productCategory} onChange={this.handleInputChange}/>
            <label htmlFor="productCategory" className="active">Category</label>
          </div>
          <div className="input-field">
            <textarea className="materialize-textarea" type="text" name="description" id="description" ref="description" value={this.state.description}
                      onChange={this.handleInputChange} />
            <label htmlFor="description" className="active">Description</label>
          </div>
          <div className="input-field">
            <input type="text" name="availableOption" ref="availableOption" value={this.state.availableOption} onChange={this.handleInputChange}/>
            <label htmlFor="availableOption" className="active">Options/formats/Styles</label>
          </div>
          <input type="submit" className="btn waves-effect waves-light green darken-4" value="Save" />
        </form>
      </div>
    )
  }
}
export default EditProducts;
