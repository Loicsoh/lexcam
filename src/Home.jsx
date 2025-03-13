
// import Livrelist from "./Livrelist";
import { useState } from "react";
import Navbar from "./Navbar";
import Banniere from "./banniere";

const Home = () => {

  
  
  return (
    <div className="home">
      <Navbar />
      <div className='container'>
        <h1>page d&apos;acceuil</h1>

        <Banniere />
        
      </div>
    </div>
  );
};

export default Home;