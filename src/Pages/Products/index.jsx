import { Filter, TopFilter } from "../../Component/Filter";
import ProductSection from "../../Component/ProductSection";
import { CartState } from "../../Context/Context";
import './main.css';
import {HeroSectionOne} from '../../Component/HeroSection'
const Product = ()=>{
    const {
        state : {products},
        productState : {sort,byStock,byFastDelivery, searchQuery },

    } =CartState();

    console.log(sort);
   
    
    const filteredProducts=()=>{
      let sortedProducts = products;
        if(sort){
          sortedProducts = sortedProducts.sort((a,b)=>
            sort === "lowToHigh" ? a.price-b.price : b.price-a.price 
            );
        }
        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
          }
        if (byFastDelivery) {
          sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
          }

          if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
              prod.name.toLowerCase().includes(searchQuery)
            );
        }
        return sortedProducts;
    };
  
    return(
        <>
           <section className="product">
             <HeroSectionOne />
             <div className="products">
                <div className="filters">
                  <Filter />  
                </div>
                    
                <div className="ProductContainer">
                      {
                      filteredProducts().map((prod)=>(
                          <ProductSection prod={prod}/>
                        ))
                        }
                    
                </div> 
             </div>
                
           </section>
        </>
    );
}
export default Product;