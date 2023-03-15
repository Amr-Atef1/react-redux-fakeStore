import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Header,
  ProductComponent,
  ProductDetail,
  ProductListing,
  Loading
} from "./containers";
function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing/>} />
        <Route path="/product/:productId" element={<ProductDetail/>} />
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
