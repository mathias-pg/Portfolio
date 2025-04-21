import { CodeXml} from "lucide-react";

const Navbar = () => {
    return(
        <div className="flex justify-center md:justify-between items-center p-4">
            <a href="#" className="font-bold text-primary flex items-center gap-2 text-3xl md:text-xl">
                <CodeXml />
                MATHIAS
                <span className="text-secondary">DEV</span>
            </a>
            <ul
                className="hidden md:flex space-x-4">
                <li>
                    <a href="#" 
                    className="btn btn-sm btn-ghost text-primary hover:text-secondary transition-colors duration-200 text-lg">
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#" 
                    className="btn btn-sm btn-ghost text-primary hover:text-secondary transition-colors duration-200 text-lg">
                        À propos
                    </a>
                </li>
                <li>
                    <a href="#" 
                    className="btn btn-sm btn-ghost text-primary hover:text-secondary transition-colors duration-200 text-lg">
                        Expériences
                    </a>
                </li>
                <li>
                    <a href="#" 
                    className="btn btn-sm btn-ghost text-primary hover:text-secondary transition-colors duration-200 text-lg">
                        Projets
                    </a>
                </li>
                <li>
                    <a href="#" 
                    className="btn btn-sm btn-ghost text-primary hover:text-secondary transition-colors duration-200 text-lg">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}


export default Navbar;