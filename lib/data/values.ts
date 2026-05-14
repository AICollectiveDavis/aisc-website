import { PersonStanding, LibraryBig, Globe } from 'lucide-react';

export const values = [
    {
        title: 'Accessibility',
        description: 'Promoting AI accessibility for all by breaking down the barriers to knowledge and opportunity.',
        icon: PersonStanding,
    },
    {
        title: 'Literacy',
        description: 'Empowering students with enriching resources and experiences to shape the future.',
        icon: LibraryBig,
    },
    {
        title: 'Diversity',
        description: 'Celebrating diversity in AI, fostering innovation through varied perspectives.',
        icon: Globe,
    },
] as const;
