import React, { useState } from "react";
import { postRequest } from "../api/addProduct";

export default function AddNewProduct() {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [product, setProduct] = useState({
      title:"",
      category:"",
      price:"",
      employee:"",
      description:""
  });

  const validateProductObject =(product:any) =>{
    if(product.title==="") {setError("Title is missing"); return false} 
    if(product.category==="") {setError("Category is missing"); return false} 
    if(product.employee==="") {setError("Employee is missing"); return false} 
    if(product.price==="" || isNaN(product.price)) {setError("Price is Incorrect"); return false} 
    
    return true
    
    }

    const addProd=async ()=>{

     {
        validateProductObject(product) && await postRequest(product) && setVisible(false)  
     }   
      window.location.reload(true) 
    }

   

 
  return (
    <div>
        {!visible? 
      <div className="field mt-5">
        <p className="control">
          <button className="button is-success" onClick={(x)=>setVisible(!visible)}>Add new product</button>
        </p>
      </div>
:
      <div className="box">
        <p className="title">Add new product</p>

        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="text"  placeholder="Product Title" onChange={x => setProduct({...product ,"title": x.target.value})} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Category" onChange={x => setProduct({...product ,"category": x.target.value})} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Price" onChange={x => setProduct({...product ,"price": x.target.value})} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Employee" onChange={x => setProduct({...product ,"employee": x.target.value})} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Description" onChange={x => setProduct({...product ,"description": x.target.value})} />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
       {error}
        <div className="field">
          <p className="control">
            <button className="button is-success" onClick={x => { addProd() }}>Add Product</button>
          </p>
        </div>
      </div>
        }
    </div>
        
  );
}


