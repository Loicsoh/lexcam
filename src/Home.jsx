
import Livrelist from "./Livrelist";
import Navbar from "./Navbar";

const Home = () => {

  
  return (
    <div className="home">
      <Navbar />
      <Livrelist />
      <div className='container'>
        <h1>page d&apos;acceuil</h1>
      </div>
    </div>
  );
};

export default Home;