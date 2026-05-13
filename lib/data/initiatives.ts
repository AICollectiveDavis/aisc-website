export interface Initiative {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    details: string[];
    image: string;
    accent: 'blue' | 'orange';
}

export interface InitiativePreview {
    title: string;
    desc: string;
    href: string;
}

export const initiatives: Initiative[] = [
    {
        id: 'bp',
        title: 'Beginner Projects',
        subtitle: 'Start Your Journey',
        description:
            'New to AI/ML? Start here with 6-week long group projects. Foundational learning and hands-on experience for all backgrounds.',
        details: [
            '6-week cycles with group mentorship',
            'No experience required',
            'Project-based learning with peers',
            'Showcase at end of cycle',
        ],
        image: '/pics/bp_wq_showcase.JPG',
        accent: 'blue',
    },
    {
        id: 'swe',
        title: 'Software Engineering',
        subtitle: 'Build Real Products',
        description:
            'Learn industry practices while developing a year-long project. Collaborate in teams, use GitHub, and ship real software.',
        details: [
            'Year-long technical projects',
            'Agile, code reviews, and CI/CD',
            'Portfolio and resume building',
            'Present at club events',
        ],
        image: '/pics/bp_wq_showcase.JPG',
        accent: 'orange',
    },
    {
        id: 'research',
        title: 'R&D',
        subtitle: 'Push Boundaries',
        description:
            'Collaborate on cutting-edge AI research initiatives. Paper reading, faculty mentorship, and original research projects.',
        details: [
            'Paper reading groups',
            'Faculty and grad student mentorship',
            'Research methods training',
            'Opportunities for publication',
        ],
        image: '/pics/r&d.jpeg',
        accent: 'blue',
    },
];

export const initiativePreviews: InitiativePreview[] = [
    { title: 'Beginner Projects', desc: '6-week group projects for newcomers', href: '/initiatives#bp' },
    { title: 'Software Engineering', desc: 'Year-long technical projects', href: '/initiatives#swe' },
    { title: 'R&D', desc: 'Cutting-edge AI research', href: '/initiatives#research' },
    { title: 'Forge', desc: 'Community hackathons', href: '/initiatives#forge' },
];
