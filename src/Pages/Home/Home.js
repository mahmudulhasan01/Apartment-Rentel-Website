import React from "react";
import Navber from "../Shared/Navber/Navber";
import OureServices from "./OurServices/OureServices";
import Properties from "./Pereoperties/Properties";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <OureServices></OureServices>
      <Properties></Properties>
    </div>
  );
};

export default Home;
