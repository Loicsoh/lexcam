import Navbar from "./Navbar";

const Penal = () => {
    return ( 
        
        <div className="penal">
            <Navbar />

            <div className="container">
            <div className="penal-title">



                <h1><img src="/src/assets/images/img03.jpg" alt="" />Connaitre le code Penal du cameroun<img src="/src/assets/images/img03.jpg" alt=""/></h1>
            </div>

            <div className="form">
                <h2>Entrez numéro d&apos;article alineat du code Pénal</h2>
                 <form>
                    {/* <label htmlFor="alineatNumber">Numéro d&apos;alinéa:</label> */}
                    <input type="text" id="alineatNumber" name="alineatNumber" placeholder="Exemple: 64" />
                    <button type="submit">Rechercher</button>
                </form>
                </div>
            </div>
        </div>
     );
}
 
export default Penal;