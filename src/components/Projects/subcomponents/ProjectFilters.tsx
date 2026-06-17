

interface ProjectFiltersProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

const categoryTranslations: Record<string, string> = {
  All: 'הכל',
  Games: 'משחקים',
  'Web Apps': 'אפליקציות'
};

export default function ProjectFilters({
  categories,
  activeFilter,
  onFilterChange
}: ProjectFiltersProps) {
  return (
    <div className="project-filters">
      {categories.map(category => (
        <button
          key={category}
          className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {categoryTranslations[category] || category}
        </button>
      ))}
    </div>
  );
}
