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
import imgDocker from "../assets/technologies/docker.png";
import imgMySQL from "../assets/technologies/mysql.png";
import imgAPI from "../assets/technologies/api.png";
import imgBash from "../assets/technologies/bash.png";
import imgBootstrap from "../assets/technologies/bootstrap.png";
import imgC from "../assets/technologies/c.png";
import imgCICD from "../assets/technologies/cicd.png";
import imgDjango from "../assets/technologies/django.png";
import imgGit from "../assets/technologies/git.png";
import imgKubernetes from "../assets/technologies/kubernetes.png";
import imgLinux from "../assets/technologies/linux.png";
import imgMariaDB from "../assets/technologies/mariadb.png";
import imgOracleDatabase from "../assets/technologies/oracledatabase.png";
import imgPostreSQL from "../assets/technologies/postgresql.png";
import imgReact from "../assets/technologies/react.png";
import imgSQLite from "../assets/technologies/sqlite.png";
import imgSymfony from "../assets/technologies/symfony.png";
import imgTypeScript from "../assets/technologies/typescript.png";
import imgUML from "../assets/technologies/uml.png";

const langages_prog = [
    { id: 1, name: "HTML", icon: imgHTML },
    { id: 2, name: "CSS", icon: imgCSS },
    { id: 3, name: "JavaScript", icon: imgJS },
    { id: 4, name: "PHP", icon: imgPHP },
    { id: 5, name: "Java", icon: imgJava },
    { id: 6, name: "C++", icon: imgCPlusPlus },
    { id: 7, name: "Python", icon: imgPython },
    { id: 8, name: "C#", icon: imgCSharp },
    { id: 9, name: "SQL", icon: imgSQL },
    { id: 10, name: "PL/SQL", icon: imgPLSQL },
    { id: 11, name: "SPARQL", icon: imgSPARQL },
    { id: 12, name: "Bash", icon: imgBash },
]

const bdd = [
    { id: 1, name: "MySQL", icon: imgMySQL },
    { id: 2, name: "MariaDB", icon: imgMariaDB },
    { id: 3, name: "PostgreSQL", icon: imgPostreSQL },
    { id: 4, name: "SQLite", icon: imgSQLite },
    { id: 5, name: "Oracle Database", icon: imgOracleDatabase },
]

const frameworks = [
    { id: 1, name: "Django", icon: imgDjango },
    { id: 2, name: "Symfony", icon: imgSymfony },
    { id: 3, name: "Bootstrap", icon: imgBootstrap },
]

const outils = [
    { id: 1, name: "API REST", icon: imgAPI },
    { id: 2, name: "Git", icon: imgGit },
    { id: 3, name: "Docker", icon: imgDocker },
    { id: 4, name: "Kubernetes", icon: imgKubernetes },
    { id: 5, name: "CI/CD", icon: imgCICD },
    { id: 6, name: "Linux", icon: imgLinux },
    { id: 7, name: "Modélisation UML", icon: imgUML },
]

const notions = [
    { id: 1, name: "C", icon: imgC },
    { id: 2, name: "React", icon: imgReact },
    { id: 3, name: "TypeScript", icon: imgTypeScript },
    { id: 4, name: "VBA", icon: imgVBA },
]

// Composant pour une seule carte de compétence
const SkillCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="flex flex-col items-center bg-base-200 rounded-lg shadow-md hover:shadow-xl p-4 transition-all duration-300 hover:scale-105 border border-base-300">
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
    <div className="py-20 px-5 md:px-[5%]" id="Competences">
      <Title title="Compétences" /> 
      
      <div className="mt-8">
        <SkillSection 
          title="Développement" 
          items={langages_prog} 
          colorClass="text-primary" 
        />
        
        <SkillSection 
          title="Base de données" 
          items={bdd} 
          colorClass="text-primary" 
        />

        <SkillSection 
          title="Frameworks" 
          items={frameworks} 
          colorClass="text-primary" 
        />
        
        <SkillSection 
          title="Outils" 
          items={outils} 
          colorClass="text-primary" 
        />

        <SkillSection 
          title="Notions" 
          items={notions} 
          colorClass="text-primary" 
        />
      </div>
    </div>
  );
};

export default Competences;