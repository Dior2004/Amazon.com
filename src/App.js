import "./css/App.css";
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

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/seemore" element={<SeeMore />} />
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
