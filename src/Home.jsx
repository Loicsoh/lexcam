
// import Livrelist from "./Livrelist";
import { useState } from "react";
import Navbar from "./Navbar";
import Banniere from "./banniere";
import Searchlivre1 from "./Searchlivre1";
import Livre1 from "./Livre1"

const Home = () => {

  
  
  return (
    <div className="home">
        <Searchlivre1 />
        <Livre1 />
      <Navbar />
      <div className='container'>
        <h1>page d&apos;acceuil</h1>

        <Banniere />
        
      </div>
    </div>
  );
};

export default Home;