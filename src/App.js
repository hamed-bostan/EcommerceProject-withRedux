import "./App.css";
//products
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
// Context
import ProductsContextProvider from "./components/ProductsContextProvider";
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartContextProvider from "./components/CartContextProvider";
import Carts from "./components/Carts";
import SingUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="products/:productId" element={<ProductDetails />} />
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Carts />} />
            <Route path="/signup" element={<SingUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
