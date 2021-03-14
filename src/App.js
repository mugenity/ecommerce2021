import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import Carousel from "./components/Carousel";
import GridImages from "./components/GridImages";
import Arrivals from "./components/Arrivals";
import VideoSection from "./components/VideoSection";
import Info from "./components/Info";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Carousel />
        <GridImages />
        <Arrivals />
        <VideoSection />
        <Info />
        <Instagram />
        <Subscribe />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
