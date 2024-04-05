import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthenticatingUser from "./pages/authentication";
import ShoppingCategories from "./pages/shoppingCategories";
import ProductPage from "./pages/productPage";
import Home from "./pages/home";
import Cart from "./pages/addToCart";
import Footer from "./components/footer";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kids_banner from "./assets/banner_kids.png";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthenticatingUser />} />

        <Route path="/men" element={<ShoppingCategories banner={men_banner} category={"men"} />} />
        <Route
          path="/women"
          element={<ShoppingCategories banner={women_banner} category={"women"} />}
        />
        <Route
          path="/kids"
          element={<ShoppingCategories banner={kids_banner} category={"kid"} />}
        />
        <Route path="/product" element={<ProductPage />}>
          <Route path=":productId" element={<ProductPage />} />
        </Route>
        <Route path="/addToCart" element={<Cart />} />
        <Route path="/footer" element={<Footer />} />

      </Routes>
    </div>
  );
}

export default App;
