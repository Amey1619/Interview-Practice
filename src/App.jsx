import Header from "./components/Navbar/Header";
import Home from "./components/Home/Home";
import Posts from "./components/Postdetails/Posts"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
    <div className="app-container">
      <Header />
      <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:objectID" element={<Posts />} />
          </Routes>
      </div>
    </div>
    </Router>
  );
};

export default App;
