import { Route, Routes } from "react-router-dom";
import NavScroll from "./components/NavScroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Visit from "./pages/Visit";


function App() {
  return (
    <>
      <NavScroll />
      Pershendetje
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </>
  )
}

export default App
