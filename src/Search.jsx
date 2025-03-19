const Search = () => {
    return ( 
        <div className="form">
                    <h2>Entrez un numéro d&apos;article pour avoir son alinéa</h2>
                    <form>
                        {/* <label htmlFor="alineatNumber">Numéro d&apos;alinéa:</label> */}
                        <input type="text" id="alineatNumber" name="alineatNumber" placeholder="Exemple: 64" />
                        <button type="submit">Rechercher</button>

                    </form>
                </div>
     );
}
 
export default Search;