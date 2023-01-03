import "./style.scss";
import Main from "./component/Main";
import Product from "./component/Product";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">HOME</Link>
        <Link to="/Product">Product</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Product" element={<Product />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
