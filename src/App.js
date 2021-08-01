import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
} from "./pages/index";
import { Navbar, Sidebar, Footer } from "./components/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />} />
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route path="*">
          <Error />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
