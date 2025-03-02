

const Livrelist = ({Livrelist}) => {

    return ( 
        <div className="Livrelist">
            {
                Livrelist.map( (livre) => {
                    <div className="livre" key = {livre.id}>
                        <a href="" className="livre-titre">{livre.id}</a>
                        <span className="livre-chapitre">{livre.chapitres}</span>
                        <p className="livre-section">{livre.sections}</p>
                        <h4 className="livre-article">{livre.articles}</h4>

                    </div>
                })
            }
        </div>
     );
}
 
export default Livrelist;