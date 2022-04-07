import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import "./bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home";
import ProductScreen from "./components/ProductScreen";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Header></Header>

        <Routes>
         
              {/* <h1>welcome to our capture eye shop</h1>? */}
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/product/:id" element={<ProductScreen></ProductScreen>}></Route>
           
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
