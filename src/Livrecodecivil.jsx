import { useEffect } from "react";

const Livrecodecivil = () => {

    const [datacodecivil , setDatacodecivil] = useState(null);
    const [openSections, setOpenSections] = useState({
        livre I: false,
        livre II: false,
        livre III: false,
        livre IV: false,
        livre V: false,
        livre VI: false,
    });

    // chargr les donnees a partir du fichier JSON

    useEffect (() => {
        fetch("data/codecivil.json")
        .then((response) => response.json())
        .then((data) => setDatacodecivil(data))
    })
    .catch (error => {
        console.error("Erreur lors du chargement des données:", error);
    }, []);

    // fonction d'ouverture et fermeture des chapitres 
    const toggleSection= (chapitre) => {
        setOpenSections ((prev) => ({
            ...prev,
            [chapitre]: !prev[chapitre],
        }));
    };

    // fonction de rendu des articles
    
    return ( 
        <h1>liste des livres du code civil du cameroun</h1>
     );
}
 
export default Livrecodecivil;