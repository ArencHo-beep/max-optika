import { Route, Routes } from "react-router-dom";
import NavScroll from "./components/NavScroll";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Visit from "./pages/Visit";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavScroll />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
