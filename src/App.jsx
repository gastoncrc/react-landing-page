import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import FeaturedProducts from "./components/featured_products/FeaturedProducts";
import { MenuProvider } from "./menuContext";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <MenuProvider>
      <div className="app-container">
        <div className="header-hero-container">
          <Header />
          <Hero />
        </div>
        <Routes>
          <Route path="/" element={<FeaturedProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </MenuProvider>
  );
}

export default App;
