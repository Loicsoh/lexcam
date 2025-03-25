
import Navbar from "./Navbar";
import Livrelist from "./Livrelist";
import Searchlivre1 from "./Searchlivre1";


const Penal = () => {

    

    return ( 
        
        <div className="penal">
            <Navbar />



            <div className="container">
                <div className="penal-title">
                    <h1><img src="/src/assets/images/img03.jpg" alt="" />Connaitre le code Penal du cameroun<img src="/src/assets/images/img03.jpg" alt=""/></h1>
                </div>
                <Searchlivre1 />
                <Livrelist />

                
            </div>
        </div>
     );
}
 
export default Penal;