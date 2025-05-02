import Title from "./Title";
import cwac from "../assets/projects/cwac.png";
import AgoraX from "../assets/projects/AgoraX.png";
import AgoraXAppli from "../assets/projects/AgoraXAppli.png";
import JOParis from "../assets/projects/JOParis.png";
import mathbattle from "../assets/projects/mathbattle.png";
import watersort from "../assets/projects/watersort.png";
import { Github, ExternalLink, Code } from "lucide-react";
import { useState } from "react";

interface Project {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    demoLink?: string;
    repoLink?: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        name: "Plateforme de démocratie participative AgoraX",
        description: "Site web de la plateforme de démocratie participative AgoraX. Permet de créer un groupe pour voter sur des propositions. Un groupe possède différents rôles : membre, administrateur, modérateur, assesseur, scrutateur et décideur. Un administrateur peut créer un groupe et gérer les membres. Un modérateur peut gérer les propositions et les commentaires. Un membre peut voter sur les propositions. Un assesseur peut gérer les votes. Un scrutateur peut gérer les résultats. Un décideur peut gérer les budgets.",
        technologies: ["HTML", "CSS", "PHP", "JavaScript"],
        demoLink: "https://projets.iut-orsay.fr/saes3-dteixei/ProjetS3/",
        repoLink: "https://github.com/mathias-pg/AgoraX",
        image: AgoraX
    },
    {
        id: 2,
        name: "Application AgoraX",
        description: "Application Java de la plateforme de démocratie participative AgoraX pour les décideurs",
        technologies: ["Java"],
        repoLink: "https://github.com/mathias-pg/Application-Decideur-AgoraX",
        image: AgoraXAppli
    },
    {
        id: 3,
        name: "Application de gestion des JO de Paris 2024",
        description: "Application Java qui permet la gestions des épreuves, des sessions, des athlètes, des équipes et du planning des JO de Paris 2024",
        technologies: ["Java"],
        repoLink: "https://github.com/mathias-pg/Application-JOParis2024",
        image: JOParis
    },
    {
        id: 4,
        name: "MathBattle",
        description: "Jeu de cartes revisité permettant l'apprentissage ludique des mathématiques",
        technologies: ["GDScript"],
        demoLink: "https://mathias-pg.itch.io/mathbattle",
        repoLink: "https://github.com/mathias-pg/MathBattle",
        image: mathbattle
    },
    {
        id: 5,
        name: "CWAC",
        description: "Site web d'une école fictive de survie en pleine nature",
        technologies: ["HTML", "CSS"],
        repoLink: "https://github.com/mathias-pg/CWAC",
        image: cwac
    },
    {
        id: 6,
        name: "WaterSort",
        description: "Jeu de tri de bouteilles d'eau",
        technologies: ["Python"],
        repoLink: "https://github.com/mathias-pg/Water-Sort",
        image: watersort
    }
];

const ProjectCard = ({ project }: { project: Project }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            className="bg-base-100 rounded-xl overflow-hidden shadow-lg border border-base-300 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-64 bg-base-200 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.name} 
                    className={`w-full h-full object-contain transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`} 
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                
                <div className={`absolute bottom-4 right-4 flex gap-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {project.repoLink && (
                        <a 
                            href={project.repoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-primary text-white p-2 rounded-full hover:bg-primary-focus transition-colors"
                            title="Code source"
                        >
                            <Github size={20} />
                        </a>
                    )}
                    {project.demoLink && (
                        <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-secondary text-white p-2 rounded-full hover:bg-secondary-focus transition-colors"
                            title="Démo live"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-2">{project.name}</h3>
                <p className="text-base-content/80 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, index) => (
                        <span 
                            key={index} 
                            className="px-3 py-1 text-sm font-medium bg-base-200 text-primary rounded-full"
                        >
                            <Code size={14} className="inline mr-1" /> {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return(
        <div className="py-20 px-5 md:px-[5%] bg-base-200 rounded-xl">
            <Title title="Projets"/>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;