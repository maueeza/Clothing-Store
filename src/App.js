import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js"
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductListing from "./pages/Home/ProductListing";

function App() {
  return (
     <div className="App">
    {/* //   <header className="App-header">
    //     <img src={logo} alt="mockBee logo" width="180" height="180" />
    //     <h1 className="brand-title">
    //       Welcome to <span>mockBee!</span>
    //     </h1>
    //     <p className="brand-description">
    //       Get started by editing <code>src/App.js</code>
    //     </p>
    //     <div className="links">
    //       <a
    //         href="https://mockbee.netlify.app/"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         Explore mockBee
    //       </a>
    //       <a
    //         href="https://mockbee.netlify.app/docs/api/introduction"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         API Documentation
    //       </a>
    //       <a
    //         href="https://github.com/neogcamp/mockBee"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         Contribute
    //       </a>
    //     </div>
    //   </header> */}
      <Routes>
        <Route path="/" element = {<Home/>}/> 
        <Route path="/mockbee" element = {<Mockman/>}/> 
        <Route path="/products" element = {<ProductListing/>}/> 
       </Routes>
       
    </div>
  );
}

export default App;
