const Penal = () => {
    return ( 
        <div className="container">
        <h1><img src="/src/assets/images/img03.jpg" alt="" />Connaitre le code Penal du cameroun<img src="/src/assets/images/img03.jpg" alt=""/></h1>

            <div className="form">
                <h2>Entrez numéro d'article alineat du code Pénal</h2>
                <form>
                    <label htmlFor="alineatNumber">Numéro d'alinéa:</label>
                    <input type="text" id="alineatNumber" name="alineatNumber" />
                    <button type="submit">Rechercher</button>
                </form>
            </div>
        </div>
     );
}
 
export default Penal;