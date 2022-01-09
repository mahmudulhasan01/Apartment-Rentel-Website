import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navber from "../Shared/Navber/Navber";
import OureServices from "./OurServices/OureServices";
import Properties from "./Pereoperties/Properties";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <OureServices></OureServices>
      <Properties></Properties>
      <Footer></Footer>
    </div>
  );
};

export default Home;
