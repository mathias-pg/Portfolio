import { Github, Instagram, Linkedin, Mail, FileDown, Code, ChevronDown } from "lucide-react";
import img from '../assets/photo_identite.png';
import { useState, useEffect } from "react";

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    
    return (
        <div className="min-h-screen flex flex-col" id="Home">
            <div className="flex-grow flex flex-col-reverse md:flex-row justify-center items-center py-20 md:py-32 px-5 container mx-auto relative overflow-hidden">
                <div className="fixed top-0 left-0 w-full h-full -z-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-base-100 opacity-90"></div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-5 left-5 w-96 h-96 rounded-full bg-primary opacity-20 blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-secondary opacity-20 blur-3xl"></div>
                        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-primary opacity-15 blur-3xl"></div>
                        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-secondary opacity-15 blur-3xl"></div>
                    </div>
                </div>
                
                <div className={`flex flex-col max-w-xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="mb-6">
                        <div className="flex items-center gap-2 text-secondary mb-3">
                            <Code size={20} />
                            <h2 className="font-mono text-lg tracking-widest">DÉVELOPPEUR</h2>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left text-primary">
                            Bonjour, <br/> je suis{" "}
                            <span className="text-secondary inline-block relative">
                                Mathias
                            </span>
                            <br/>
                            <span className="text-secondary inline-block relative">
                                Petibon-Gravier
                            </span>
                        </h1>
                    </div>
                    
                    <p className="my-4 text-xl text-center md:text-left leading-relaxed font-light">
                        Etudiant en <span className="text-secondary font-medium">Informatique</span> passionné par 
                        les <span className="text-primary font-medium">nouvelles technologies</span>.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
                        <a 
                            href="mailto:mathias.petibongravier@gmail.com"
                            className="btn border-none bg-base-200 hover:bg-secondary hover:text-white text-base-content font-medium transition-all duration-300 group flex items-center gap-2"
                        >
                            <Mail className="text-secondary group-hover:text-white transition-colors duration-300" size={18} />
                            <span>Mail</span>
                        </a>
                        <a 
                            href="https://github.com/mathias-pg" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn border-none bg-base-200 hover:bg-secondary hover:text-white text-base-content font-medium transition-all duration-300 group flex items-center gap-2"
                        >
                            <Github className="text-secondary group-hover:text-white transition-colors duration-300" size={18} />
                            <span>Github</span>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/mathias-petibon-gravier/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn border-none bg-base-200 hover:bg-secondary hover:text-white text-base-content font-medium transition-all duration-300 group flex items-center gap-2"
                        >
                            <Linkedin className="text-secondary group-hover:text-white transition-colors duration-300" size={18} />    
                            <span>Linkedin</span>
                        </a>
                        <a 
                            href="https://www.instagram.com/_mathias.pg_?igsh=dXBmb3F4enA4bnRp" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn border-none bg-base-200 hover:bg-secondary hover:text-white text-base-content font-medium transition-all duration-300 group flex items-center gap-2"
                        >
                            <Instagram className="text-secondary group-hover:text-white transition-colors duration-300" size={18} />
                            <span>Instagram</span>
                        </a>
                    </div>
                   
                    <div className="mt-8">
                        <a
                            href="/CV_Mathias_Petibon-Gravier.pdf"
                            download
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary to-secondary p-0.5 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <span className="relative flex items-center gap-2 rounded-md bg-primary px-8 py-3 transition-all duration-300 group-hover:bg-opacity-0">
                                <FileDown size={20} />
                                Télécharger mon CV
                            </span>
                        </a>
                    </div>
                </div>
                
                <div className={`relative mb-10 md:mb-0 md:ml-10 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="absolute inset-0 bg-secondary opacity-20 rounded-full blur-xl transform -translate-x-4 -translate-y-4"></div>
                    <img 
                        src={img} 
                        alt="Mathias Petibon-Gravier" 
                        className="relative w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-secondary shadow-xl"
                        style={{ borderRadius: "74% 26% 75% 25% / 0% 100% 0% 100%" }}
                    />
                    <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-full shadow-lg">
                        <Code size={24} className="text-secondary" />
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center pb-8">
                <a href="#About" className="animate-bounce">
                    <ChevronDown size={32} className="text-primary" />
                </a>
            </div>
        </div>
    );
};

export default Home;