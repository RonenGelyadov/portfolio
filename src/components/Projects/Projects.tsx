import { useState } from 'react';
import { projectsData } from './projectsData';
import ProjectFilters from './subcomponents/ProjectFilters';
import ProjectCard from './subcomponents/ProjectCard';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Games', 'Web Apps'];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">פרויקטים</span> נבחרים
        </h2>
        
        <ProjectFilters 
          categories={categories} 
          activeFilter={filter} 
          onFilterChange={setFilter} 
        />
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
