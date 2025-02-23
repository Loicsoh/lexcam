const Navbar = () => {
    return ( 
        <div className="Navbar">
            <h1>Lexcam</h1>
                
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <a href="/">Code penal</a>
                </li>  

                <li className="navbar-item">
                    <a href="/">Code civil</a>
                </li>

                <li className="navbar-item">
                    <a href="/">Code du Travail</a>
                </li>
                
                <li className="navbar-item">
                    <a href="/">Code de la Route</a>
                </li>

                <li className="navbar-item">
                    <a href="/">Code des impots</a>
                </li>
            </ul>
        </div>
     );
}
 
export default Navbar;