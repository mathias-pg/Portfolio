import Title from "./Title";
import { MapPin, Calendar, Building2 } from "lucide-react";
import institutOptique from "../assets/companies/institutOptique.png";
import auchan from "../assets/companies/auchan.png";
import iTek from "../assets/companies/itek.png";

const experiences = [
    {
        id: 1,
        role: "Stage de 3ème",
        company: "Institut d'Optique Graduate School",
        period: "Décembre 2019 - Décembre 2019",
        location: "Palaiseau, Essonne",
        image : institutOptique
    },
    {
        id: 2,
        role: "Equipier magasin",
        company: "Auchan",
        period: "Juillet 2023 - Août 2023 et Juillet 2024 - Août 2024",
        location: "Villebon-sur-Yvette, Essonne",
        image: auchan  
    },
    {
        id: 3,
        role: "Stage en développement informatique",
        company: "I-Tek",
        period: "Avril 2025 - Juillet 2025",
        location: "Trémeur, Côtes-d'Armor",
        image: iTek
    }
]

const Experiences = () => {
  return (
    <div className="py-20 px-5 bg-base-300 md:px-[5%]" id="Experiences">
      <div className="container mx-auto">
        <Title title="Expériences" />
        
        <div className="relative mt-8">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary opacity-20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center justify-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-base-300"></div>

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  <div className="bg-base-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img 
                          src={exp.image} 
                          alt={exp.company} 
                          className="w-full h-full object-contain rounded-lg bg-white p-2"
                        />
                      </div>
                      
                      <div className="flex-grow text-center md:text-left">
                        <h3 className="text-xl font-bold text-primary mb-1">{exp.role}</h3>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-lg text-secondary mb-2">
                          <Building2 size={18} />
                          <span>{exp.company}</span>
                        </div>
                        
                        <div className="flex flex-col gap-1 text-base-content/80">
                          <div className="flex items-center justify-center md:justify-start gap-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;