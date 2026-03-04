import { GraduationCap, Search } from "lucide-react";
import Title from "./Title";

const aboutSections = [
    {
        id: 1,
        icon: GraduationCap,
        title: "Etudiant en Informatique",
        description: "Je suis actuellement en troisième année de BUT Informatique à l'IUT d'Orsay de l'Université Paris-Saclay (Parcours A - Réalisation d'applications) en alternance à Paris Musées.",
    },
    {
        id: 2,
        icon: Search,
        title: "À la recherche d'une école d'ingénieur et d'une alternance",
        description: "Pour la suite de mes études, je suis à la recherche d'une école d'ingénieur en alternance pour acquérir davantage de compétences techniques et professionnelles dans le domaine de l'informatique.",
    }
]

const About = () => {
    return (
        <div className="bg-base-300 py-20 px-5" id="About">
            <Title title="À propos" />
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mt-4">
                    {aboutSections.map((section) => {
                        const Icon = section.icon;
                        return (
                            <div
                                key={section.id}
                                className="group relative bg-base-100 rounded-xl shadow-lg p-6 border border-base-200 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-base-200 group-hover:bg-primary transition-colors duration-300">
                                        <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h2 className="text-lg font-bold text-primary leading-tight">{section.title}</h2>
                                </div>
                                <p className="text-base leading-relaxed text-base-content/80">{section.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default About;
