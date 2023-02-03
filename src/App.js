import "./App.css";
import Footer from "./containers/footer/Footer";
import Cta from "./components/cta/Cta";
import Brand from "./components/brand/Brand";
// import Feature from "./components/feature/Feature";
import NavBar from "./components/navbar/NavBar";
import Blog from "./containers/blog/Blog";
import Features from "./containers/features/Features";
import Header from "./containers/header/Header";
import Possibility from "./containers/possibility/Possibility";
import WhatGpt3 from "./containers/whatGpt3/WhatGpt3";
function App() {
  return (
    <div>
      <div className="gradient_bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Cta/>
      <Blog/>
      <Footer />
    </div>
  );
}

export default App;
