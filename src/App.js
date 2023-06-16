import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./cart/CartContext";
import Catalog from "./catalog/Catalog";
import Cart from "./cart/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
