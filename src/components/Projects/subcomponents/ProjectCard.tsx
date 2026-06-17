import { GitBranch, ExternalLink } from 'lucide-react';
import type { Project } from '../projectsData';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card glass">
      <div className="project-image-container">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-image" 
          loading="lazy"
        />
        <div className="project-overlay">
          <a 
            href={project.githubUrl} 
            className="overlay-btn" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="צפייה בקוד ב-GitHub"
          >
            <GitBranch size={20} />
          </a>
          <a 
            href={project.demoUrl} 
            className="overlay-btn" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="הרצת הדגמה חיה"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
