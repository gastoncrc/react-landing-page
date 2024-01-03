import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
// import Products from "./components/products/products";
import FeaturedProducts from "./components/featured_products/FeaturedProducts";

function App() {
  return (
    <div className="app-container">
      <div className="header-hero-container">
        <Header />
        <Hero />
      </div>
      <FeaturedProducts />
      {/* <Products /> */}
      <Footer />
    </div>
  );
}

export default App;
