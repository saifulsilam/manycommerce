import React from "react";
import { useParams } from "react-router-dom";
import { CartState } from "../../Context/Context";
import "./singlePage.css";

const SinglePost =()=>{
    
    const {
        state : {products,cart},
        dispatch,
     

    } =CartState();
    let cartProduct=cart;
 
    let { userid } = useParams();
    let product=[];
    // const product =  products.find((product)=>product.id === usd);
     product = products.find(function(item){
        let usd=Number(userid);
        return item.id === usd ;
      }); 
      
      let relatedProducts= products.filter(function(item){
          let cat = product.catagory;
          return item.catagory === cat;
      });
    //  get total price from quantity intput 
    console.log(cartProduct.length);
    return(
        
        <>
        <section className="product_detail">
            <section className="product_image">
                <img src={`../${product.image}`} alt="" id="productImg"/>
            </section>
            <section className="product_content">
                <p className="breadCum">Home / {product.catagory}</p>
                <h1>{product.name}</h1>
                <h4>{product.currency}{product.price}</h4>
                <select className="sizes">
                    <option value="">Select Size</option>
                    <option value="">XXL</option>
                    <option value="">XL</option>
                    <option value="">L</option>
                    <option value="">M</option>
                </select>

                <select className="colors">
                    <option value="">Select Color</option>
                    <option value="">Blue</option>
                    <option value="">Red</option>
                    <option value="">Black</option>
                    <option value="">Yellow</option>
                </select>
                {/* <input type="number" id="quantity" value={product.qty} onChange={(e)=>dispatch({type:"CHANGE_CART_QTY",payload:{id:product.id,qty:e.target.value,}})} placeholder="add the required quantity"/> */}
               
                {cart.some((p) => p.id === product.id) ? (
                    <button
                     className='dangerBtn'
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product,
                        })
                      }
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className='addCart'
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: product,
                        })
                      }
                      disabled={!product.inStock}
                    >
                      {!product.inStock ? "Out of Stock" : "Add to Cart"}
                    </button>
                  )}
          
                {/* <button
                     className="addCart"
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: product,
                        })
                      }
                      >ADD TO CART
                      </button> */}
                <h3>Product Details <i class="fa fa-indent"></i></h3>
                <br/>
                <p className="product_des">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                
            </section>
        </section>
        <section className="related_product">

        </section>
        </>
        
    );
}
export default SinglePost;