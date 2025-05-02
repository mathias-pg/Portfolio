import React from "react";
import Title from "./Title";
import { CalendarSync, LetterText } from "lucide-react";

const aboutSections =[
    {
        id: 1,
        title: "Etudiant en Informatique",
        description: "Actuellement en deuxième année de BUT Informatique à l'IUT d'Orsay en Parcours A - Développement d'applications",
        icon: <LetterText className="text-accent scale-150"/>,
    },
    {
        id: 2,
        title: "Recherche d'une alternance",
        description: "Pour ma 3ème année de BUT Informatique, je suis à la recherche d'une alternance de 12 mois  dans le domaine du développement avec un ryhtme de 3 jours en entreprise et 2 jours à l'IUT.",
        icon: <CalendarSync className="text-accent scale-150"/>,
    }
]
const About = () => {
    return(
        <div className="bg-base-300 py-20 px-5" id="About">
            <Title title="À propos"/>
            <div className="flex justify-center">
                <div className="md:ml-4 md:mr-4 space-y-4">
                    {aboutSections.map((section) => (
                        <div key={section.id} className="flex flex-col md:flex-row items-center mb-4 p-4 bg-base-100 shadow-lg rounded-lg">
                            <div className="m-6 flex justify-center items-center w-16 h-16 rounded-full bg-base-200">
                                {React.cloneElement(section.icon, { className: "text-secondary" })}
                            </div>
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
                                <p className="text-lg">{section.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default About;