import type { LucideIcon } from 'lucide-react';

interface PillarProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Pillar({ icon: Icon, title, description }: PillarProps) {
  return (
    <div className="pillar glass">
      <Icon className="pillar-icon" size={24} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
