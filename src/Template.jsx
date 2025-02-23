//

import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useInView } from 'react-intersection-observer';
import '/Template.css'; // Assurez-vous de créer ce fichier pour les styles de transition

const Template = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sections = [
        {
            id: 1,
            //  title: 'Bienvenu dans votre application LexCam',
             title: 'bhjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbk;;;;;;;;;;;;;;;kkkkkkkkkkkkkkkkkkkkkkkhhhhhhhhhhhhhhhhhhhhhhhhhhbbbbbbbbbbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkkkkkkkkkhhhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiiiittttttttttttttttttrrrrrrrrrrrrrrrrrdffffffffffffytttttttttttttttesswwwwqazxsrdtdddddtfygu',
            // content: 'Cette Application regroupe en un seul endroit des livres de loi du Cameroun vous permettant de maîtriser des lois du Cameroun',

            content: 'bhjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbk;;;;;;;;;;;;;;;kkkkkkkkkkkkkkkkkkkkkkkhhhhhhhhhhhhhhhhhhhhhhhhhhbbbbbbbbbbbbbbbbbbbbbbbbbbhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkkkkkkkkkhhhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiiiittttttttttttttttttrrrrrrrrrrrrrrrrrdffffffffffffytttttttttttttttesswwwwqazxsrdtdddddtfygu',
        },
        {
            id: 2,
            title: 'Section 2',
            content: 'Contenu de la section 2',
        },
        {
            id: 3,
            title: 'Section 3',
            content: 'Contenu de la section 3',
        },
    ];

    const { ref } = useInView({
        threshold: 0.1,
        onChange: (inView) => {
            if (inView) {
                setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
            }
        },
    });

    return (
        <div className="template">
            <TransitionGroup>
                {sections.map((section, index) => (
                    <CSSTransition
                        key={section.id}
                        timeout={500}
                        classNames="fade"
                        in={index === activeIndex}
                        unmountOnExit
                    >
                        <div className="message" ref={ref}>
                            <div className="firls">
                                <h1 className="firls-title">{section.title}</h1>
                                <p>{section.content}</p>
                            </div>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}

export default Template;