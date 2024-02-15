import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
// import Products from "./components/products/products";
import FeaturedProducts from "./components/featured_products/FeaturedProducts";
import { MenuProvider } from "./menuContext";

function App() {
  return (
    <MenuProvider>
      <div className="app-container">
        <div className="header-hero-container">
          <Header />
          <Hero />
        </div>
        <FeaturedProducts />
        {/* <Products /> */}
        <Footer />
      </div>
    </MenuProvider>
  );
}

export default App;
