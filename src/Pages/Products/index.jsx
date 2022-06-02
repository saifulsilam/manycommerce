import { Filter, TopFilter } from "../../Component/Filter";
import ProductSection from "../../Component/ProductSection";
import { CartState } from "../../Context/Context";
import './main.css'
const Product = ()=>{
    const {
        state : {products},
        productState : {sort,byStock,byFastDelivery, searchQuery },

    } =CartState();

   
    let sortedProducts = products;
    const filteredProducts=()=>{
      
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
           <section className="products">
               
               <div className="filters">
                 <Filter />  
               </div>
                  
                <div className="ProductContainer">
                    {
                        sortedProducts.map((prod)=>(
                        <ProductSection prod={prod}/>
                        ))
                        
                    }
                  
                </div>   
           </section>
        </>
    );
}
export default Product;