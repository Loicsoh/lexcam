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

    const randerArticle = (articles) => {
        return (
            <ul className="article-list">
                {article.map((article.article) => (
                    <li key={article.articles} className="article-item">
                        <strong>Article{article.article}:{article.explication}</strong>
                    </li>
                ))}
            </ul>
        )
    };

    // fonction de rendu des chapitres

    const randerchapter = (chapitres) => {
        return(
            <div>
                {chapitres.map((chapitre) => (
                    <div key={chapitre.chapitre} className="chapitre">
                        <h3 className="article-item">{chapitre.name}</h3>
                        {randerArticle(chapitre.articles)
                        ? randerArticle(chapitre.articles)
                        : null}
                    </div>
                ))}
            </div>
        );
    };

    // fonction de rendu des livres
    const randerLivre = (livres) => {
        return(
            <div>
                {livres.map((livre) => (
                    <div key={livre.livre} className="livre">
                        <h2 className="article-item">{livre.name}</h2>
                        {randerchapter(livre.chapitres)}
                    </div>
                ))}
            </div>
        )
    }
    
    return ( 
        <h1>liste des livres du code civil du cameroun</h1>
     );
}
 
export default Livrecodecivil;