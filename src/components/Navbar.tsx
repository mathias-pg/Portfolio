import { CodeXml, Home, User, Code, Briefcase, FolderGit2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [mobileView, setMobileView] = useState(false);
   
    const menuItems = [
        { name: "Accueil", icon: <Home size={16} /> },
        { name: "À propos", icon: <User size={16} /> },
        { name: "Compétences", icon: <Code size={16} /> },
        { name: "Expériences", icon: <Briefcase size={16} /> },
        { name: "Projets", icon: <FolderGit2 size={16} /> },    
        { name: "Contact", icon: <User size={16} /> }
    ];
    const checkScreenWidth = () => {
        const breakpoint = 1080;
        const currentWidth = window.innerWidth;
        if (currentWidth < breakpoint && !mobileView) {
            setMobileView(true);
            setShowMenu(false);
        }
        else if (currentWidth >= breakpoint && mobileView) {
            setMobileView(false);
            setShowMenu(true);
        }
    };
    useEffect(() => {
        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, [mobileView]);
    return (
        <div className="flex flex-col w-full shadow-md sticky top-0 z-50">
            <div className="flex justify-between items-center p-4 bg-base-100">
                <a href="#" className="font-bold text-primary flex items-center gap-2 text-3xl md:text-xl transition-all duration-300 hover:scale-105">
                    <CodeXml className="text-secondary" />
                    MATHIAS
                    <span className="text-secondary font-extrabold">DEV</span>
                </a>
               
                {/* Bouton hamburger pour mobile uniquement */}
                {mobileView && (
                    <button
                        className="p-2 rounded-lg hover:bg-base-200 transition-colors"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        {showMenu ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
                    </button>
                )}
               
                {/* Menu horizontal pour desktop */}
                {!mobileView && (
                    <ul className="flex space-x-2">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href="#"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-primary hover:bg-base-200 hover:text-secondary transition-all duration-200 text-xl"
                                >
                                    {item.icon}
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
           
            {/* Menu vertical pour mobile */}
            {mobileView && showMenu && (
                <div className="bg-base-100 w-full shadow-inner">
                    <ul className="flex flex-col w-full">
                        {menuItems.map((item) => (
                            <li key={item.name} className="w-full">
                                <a
                                    href="#"
                                    className="flex items-center w-full px-4 py-3 hover:bg-base-200 text-primary hover:text-secondary transition-all duration-200 text-xl"
                                >
                                    <span className="flex items-center gap-2">
                                        {item.icon}
                                        <span className="text-lg">{item.name}</span>
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
export default Navbar;