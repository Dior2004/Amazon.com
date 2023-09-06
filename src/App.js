import "./css/App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import NavBar from "./components/navigation_bar/NavBar";
import Footer from "./components/footer/Footer";
import Suggestion from "./components/suggestion/Suggestion";
import SeeMore from "./routes/seemore/SeeMore";
import ShopNow from "./routes/shopnow/ShopNow";
import Account from "./routes/account/Account";
import Login from "./routes/login/Login";
import SignIn from "./routes/sign-in/SignIn";
import Cart from "./routes/cart/Cart";
import Backtotop from "./components/backtotop/Backtotop";
import LearnMore from "./routes/learn more/LearnMore";
import FalseLink from "./routes/false-link/FalseLink";
import { productsData } from "./static/products_data";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const [relatedProducts, setRelatedProducts] = useState(
    localStorage.getItem("relatedItems") || ""
  );

  useEffect(() => {
    localStorage.setItem("relatedItems", relatedProducts);
  }, [relatedProducts]);

  // console.log(relatedProducts);

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          productsData={productsData.filter((e) =>
            e.title.toLowerCase().includes(searchInput.toLowerCase())
          )}
          setRelatedProducts={setRelatedProducts}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                productsData={productsData}
                setRelatedProducts={setRelatedProducts}
              />
            }
          />
          <Route
            path="/seemore"
            element={
              <SeeMore
                productsData={productsData.filter((e) =>
                  e.title.toLowerCase().includes(relatedProducts.toLowerCase())
                )}
              />
            }
          />
          <Route path="/shopnow" element={<ShopNow />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/falselink" element={<FalseLink />} />
        </Routes>

        <Suggestion />
        <Backtotop />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
