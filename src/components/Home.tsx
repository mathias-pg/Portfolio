import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import img from '../assets/photo_identite.png';


const Home = () => {
    return(
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-30 ml-5 mr-5">
            <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0 text-primary">
                    Bonjour, <br/> je suis {" "} 
                    <span className="text-secondary">
                        Mathias 
                        <br/>Petibon-Gravier
                    </span> 
                </h1>   
                <p className="my-4 text-md text-center md:text-left">
                    Je suis étudiant en 2ème année de BUT Informatique à l'IUT d'Orsay 
                    <br/> en parcours A : Développement d'applications. <br/>
                    Je suis à la recherche d'une alternance pour une durée de 12 mois 
                    <br/>avec un rythme de 3 jours en entreprise / 2 jours en formation 
                    <br/>à partir de septembre 2025 pour ma 3ème année. <br/>
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-4">
                    <a href="#" className="btn btn-secondary md:btn-md text-white font-bold">
                        <Mail />
                        Mail
                    </a>
                    <a href="#" className="btn btn-secondary md:btn-md text-white font-bold">
                        <Github />
                        Github
                    </a>
                    <a href="#" className="btn btn-secondary md:btn-md text-white font-bold">
                        <Linkedin />    
                        Linkedin
                    </a>
                    <a href="#" className="btn btn-secondary md:btn-md text-white font-bold">
                        <Instagram />
                        Instagram
                    </a>
                </div>
            </div>
            <div>
                <img src={img} alt="" className="w-70 h-90 object-cover border-8 border-secondary shadow-xl ml-5"
                style = {{borderRadius: "74% 26% 75% 25% / 0% 100% 0% 100% " }}
                />
            </div>
        </div>
    )
}


export default Home;