import Title from "./Title";

const aboutSections =[
    {
        id: 1,
        title: "Etudiant en Informatique",
        description: "Actuellement en troisème année de BUT Informatique à l'IUT d'Orsay de l'Université Paris-Saclay (Parcours A - Développement d'applications) en alernance à Paris Musées.",
    },
    {
        id: 2,
        title: "Recherche d'une école d'ingénieur",
        description: "Pour la suite de mes études, je suis à la recherche d'une école d'ingénieur pour acquérir davantage de compétences techniques et professionnelles dans le domaine de l'informatique.",
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
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold text-primary mb-2">{section.title}</h2>
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