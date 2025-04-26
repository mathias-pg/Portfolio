import { Github, Instagram, Linkedin, Mail, FileDown } from "lucide-react";
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
                <p className="my-4 text-md text-center md:text-left text-xl">
                    Etudiant en Informatique passionné par les nouvelles technologies.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-4">
                    <a href="#" className="btn btn-secondary md:btn-md text-white font-bold">
                        <Mail />
                        Mail
                    </a>
                    <a href="https://github.com/mathias-pg" className="btn btn-secondary md:btn-md text-white font-bold">
                        <Github />
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/mathias-petibon-gravier/" className="btn btn-secondary md:btn-md text-white font-bold">
                        <Linkedin />    
                        Linkedin
                    </a>
                    <a href="https://www.instagram.com/_mathias.pg_?igsh=dXBmb3F4enA4bnRp" className="btn btn-secondary md:btn-md text-white font-bold">
                        <Instagram />
                        Instagram
                    </a>
                </div>
                
                <div className="flex justify-center md:justify-start mt-8">
                <a 
                    href="/CV_Mathias_Petibon-Gravier.pdf" 
                    download 
                    className="btn btn-primary btn-lg text-white font-bold shadow-lg transform transition-transform duration-300 hover:scale-105 px-8"
                >
                    <FileDown size={20} />
                    Télécharger mon CV
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