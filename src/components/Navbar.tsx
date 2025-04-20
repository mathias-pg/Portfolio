import { Container } from "lucide-react";

const Navbar = () => {
    return(
        <div>
            <a href="#" className="font-bold text-primary flex items-center gap-2 text-3xl md:text-xl">
                <Container />
                MATHIAS
                <span className="text-secondary">DEV</span>
            </a>
            <ul
                className="flex gap-4 mt-4 text-sm md:text-base">
                <li>
                    <a href="#" 
                    className="btn btn-sm btn-ghost text-primary hover:text-secondary transition-colors duration-200">
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#" 
                    className="btn btn-sm btn-ghost text-primary hover:text-secondary transition-colors duration-200">
                        À propos
                    </a>
                </li>
                <li>
                    <a href="#" 
                    className="btn btn-sm btn-ghost text-primary hover:text-secondary transition-colors duration-200">
                        Expériences
                    </a>
                </li>
                <li>
                    <a href="#" 
                    className="btn btn-sm btn-ghost text-primary hover:text-secondary transition-colors duration-200">
                        Projets
                    </a>
                </li>
                <li>
                    <a href="#" 
                    className="btn btn-sm btn-ghost text-primary hover:text-secondary transition-colors duration-200">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}


export default Navbar;