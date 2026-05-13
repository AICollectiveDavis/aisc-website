import { Users, Globe, Briefcase, Lightbulb } from 'lucide-react';

export const stats = [
    { value: 3000, suffix: '+', label: 'Students Impacted', icon: Users },
    { value: 5, suffix: '+', label: 'Global Chapters', icon: Globe },
    { value: 50, suffix: '+', label: 'Industry Events', icon: Briefcase },
    { value: 800, suffix: '+', label: 'Projects Completed', icon: Lightbulb },
] as const;
