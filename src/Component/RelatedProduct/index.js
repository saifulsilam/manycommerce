import React from 'react'
import { CartState } from '../../Context/Context';
import './relatedProduct.css'

const RelatedProduct = ({category}) => {
    const{
        state:{products},
    } = CartState();
    let catItem=category;
    let relatedProducts= products.filter(function(item){

        return item.catagory === catItem;
    });
    const relatedItem=relatedProducts.slice(0, 5).map((item)=>{
        return(
            <div className='productItem'>
                <img src={`../${item.image}`}/>
            </div>
        );
    })
    console.log(relatedProducts);
  return (
    <>
       <section className='relatedProducts'>
        <h1>Related Product :</h1>
            <div className='relatedProduct'>
                {relatedItem}
            </div>
       </section>
    </>
  )
}

export default RelatedProduct