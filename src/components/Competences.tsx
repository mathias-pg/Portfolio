import Title from "./Title";
import imgHTML from "../assets/technologies/html.png";
import imgCSS from "../assets/technologies/css.png";
import imgJS from "../assets/technologies/javascript.png";
import imgPHP from "../assets/technologies/php.png";
import imgJava from "../assets/technologies/java.png";
import imgCPlusPlus from "../assets/technologies/cplusplus.png";
import imgPython from "../assets/technologies/python.png";
import imgCSharp from "../assets/technologies/csharp.png";
import imgVBA from "../assets/technologies/vba.png";
import imgSQL from "../assets/technologies/sql.png";
import imgPLSQL from "../assets/technologies/plsql.png";
import imgSPARQL from "../assets/technologies/sparql.png";
import imgGitLab from "../assets/technologies/gitlab.png";
import imgGitHub from "../assets/technologies/github.png";
import imgDocker from "../assets/technologies/docker.png";
import imgMySQL from "../assets/technologies/mysql.png";
import imgPenpot from "../assets/technologies/penpot.png";
import imgVSCode from "../assets/technologies/vscode.png";
import imgEclipse from "../assets/technologies/eclipse.png";
import imgIntelliJ from "../assets/technologies/intellij.png";
import imgAndroidStudio from "../assets/technologies/android_studio.png";
import imgOracleSQL from "../assets/technologies/oracle_sql_developper.png";
import imgMicrosoftOffice from "../assets/technologies/microsoft.png";
import imgVisualParadigm from "../assets/technologies/visual_paradigm.png";
import imgCodeBlocks from "../assets/technologies/code_blocks.png";

const langages_prog = [
    { id: 1, name: "HTML", icon: imgHTML },
    { id: 2, name: "CSS", icon: imgCSS },
    { id: 3, name: "JavaScript", icon: imgJS },
    { id: 4, name: "PHP", icon: imgPHP },
    { id: 7, name: "Java", icon: imgJava },
    { id: 8, name: "C++", icon: imgCPlusPlus },
    { id: 9, name: "Python", icon: imgPython },
    { id: 10, name: "C#", icon: imgCSharp },
    { id: 11, name: "VBA", icon: imgVBA },
]

const langages_requetes = [
    { id: 1, name: "SQL", icon: imgSQL },
    { id: 2, name: "PL/SQL", icon: imgPLSQL },
    { id: 3, name: "SPARQL", icon: imgSPARQL },
]

const outils = [
    { id: 1, name: "GitLab", icon: imgGitLab },
    { id: 2, name: "GitHub", icon: imgGitHub },
    { id: 3, name: "Docker", icon: imgDocker },
    { id: 4, name: "MySQL", icon: imgMySQL },
    { id: 5, name: "Penpot", icon: imgPenpot },
    { id: 6, name: "Visual Studio Code", icon: imgVSCode },
    { id: 7, name: "Eclipse", icon: imgEclipse },
    { id: 8, name: "IntelliJ IDEA", icon: imgIntelliJ },
    { id: 9, name: "Android Studio", icon: imgAndroidStudio },
    { id: 10, name: "Oracle SQL Developer", icon: imgOracleSQL },
    { id: 11, name: "Microsoft Office", icon: imgMicrosoftOffice },
    { id: 12, name: "Visual Paradigm", icon: imgVisualParadigm },
    { id: 13, name: "Code::Blocks", icon: imgCodeBlocks },
]

// Composant pour une seule carte de compétence
const SkillCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="flex flex-col items-center bg-base-100 rounded-lg shadow-md hover:shadow-xl p-4 transition-all duration-300 hover:scale-105 border border-base-300">
      <div className="w-mb-20 h-20 flex items-center justify-center">
        <img src={icon} alt={name} className="max-w-full max-h-full object-contain" />
      </div>
      <span className="text-center font-medium">{name}</span>
    </div>
  );
};

// Composant pour une section de compétences
const SkillSection = ({ title, items, colorClass }: { title: string; items: { id: number; name: string; icon: string }[]; colorClass: string }) => {
  return (
    <div className="mb-12">
      <h3 className={`text-2xl font-bold mb-6 ${colorClass} pb-2 inline-block`}>
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <SkillCard key={item.id} name={item.name} icon={item.icon} />
        ))}
      </div>
    </div>
  );
};

const Competences = () => {
  return (
    <div className="py-20 px-5 bg-base-200 md:px-[5%]">
      <Title title="Compétences" /> 
      
      <div className="mt-8">
        <SkillSection 
          title="Langages de programmation" 
          items={langages_prog} 
          colorClass="text-primary" 
        />
        
        <SkillSection 
          title="Langages de requêtes" 
          items={langages_requetes} 
          colorClass="text-primary" 
        />
        
        <SkillSection 
          title="Outils et environnements" 
          items={outils} 
          colorClass="text-primary" 
        />
      </div>
    </div>
  );
};

export default Competences;