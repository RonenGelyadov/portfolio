import SkillBar from './SkillBar';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 100 },
      { name: 'TypeScript', level: 100 },
      { name: 'CSS / Tailwind', level: 100 },
      { name: 'State Management', level: 100 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 100 },
      { name: 'Python', level: 100 },
      { name: 'SQL / PostgreSQL', level: 100 },
      { name: 'MongoDB', level: 100 }
    ]
  },
  {
    title: 'AI & Data',
    skills: [
      { name: 'LLM Integration', level: 100 },
      { name: 'LangChain / LlamaIndex', level: 100 },
      { name: 'Vector Databases', level: 100 },
      { name: 'Prompt Engineering', level: 100 }
    ]
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git & GitHub Actions', level: 100 },
      { name: 'Docker', level: 100 },
      { name: 'AWS / Vercel', level: 100 },
      { name: 'Linux', level: 100 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">כישורים</span> וטכנולוגיות
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category glass">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
