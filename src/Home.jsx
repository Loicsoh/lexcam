import { useEffect, useState } from "react";

import Livrelist from "./Livrelist";
import Navbar from "./Navbar";

const Home = () => {

  const [livres, SetLivre] = useState(null)

    useEffect( () => {
        fetch('http://localhost:5000/livres')
            .then( (res) => {
                return res.json();
            })
            .then ( (data) => {
                SetLivre(data);
                console.log(data);
            })
    }, [])
  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1>page d&apos;acceuil</h1>
      <Livrelist />
      </div>
    </div>
  );
};

export default Home;