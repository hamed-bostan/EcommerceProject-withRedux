import "./App.css";
//products
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carts from "./components/Carts";
import SingUp from "./components/SignUp";
import Login from "./components/Login";
// Redux
import store from "./components/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
