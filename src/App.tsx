import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="max-w-7xl mb-3 mx-auto p-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
