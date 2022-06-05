import Navbar from "./Component/Navbar";
import Home from "./HomePage";
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Blog from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Product from "./Pages/Products";
import Footer from "./Component/Footer";
import Cart from "./Component/Cart";

function App() {
  return (
    <>
     
    <Router>
    <div className="App">
    <Navbar />
     
    </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        {/* <Route path="/about" element={<About/>} /> */}

        {/* Error 404  */}
        {/* <Route path ="*" element={<Error/>} /> */}
      </Routes> 

      <Footer /> 
    </Router>
    </>
    
   
  );
}

export default App;
