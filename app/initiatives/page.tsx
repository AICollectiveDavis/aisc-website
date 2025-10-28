import Image from 'next/image';
import Link from 'next/link';

const initiatives = [
    {
        id: 'bp',
        title: 'Beginner Projects',
        description:
            'New to AI/ML? Start here with 6-week long group projects. Foundational learning and hands-on experience for all backgrounds.',
        details: [
            '6-week cycles with group mentorship',
            'No experience required',
            'Project-based learning with peers',
            'Showcase at end of cycle',
            'Great for building confidence and skills',
        ],
        image: '/pics/bp_board.jpg',
        icon: '🧑‍💻',
    },
    {
        id: 'swe',
        title: 'Software Engineering',
        description:
            'Learn industry practices while developing a year-long project. Collaborate in teams, use GitHub, and ship real software.',
        details: [
            'Year-long technical projects',
            'Mentorship from experienced members',
            'Agile, code reviews, and CI/CD',
            'Portfolio and resume building',
            'Present at club events',
        ],
        image: '/pics/bp_wq_showcase.JPG',
        icon: '💻',
    },
    {
        id: 'research',
        title: 'R&D',
        description:
            'Collaborate on cutting-edge AI research initiatives. Paper reading, faculty mentorship, and original research projects.',
        details: [
            'Paper reading groups',
            'Faculty and grad student mentorship',
            'Research methods training',
            'Opportunities for publication',
            'Interdisciplinary projects',
        ],
        image: '/pics/grad_25.jpg',
        icon: '🔬',
    },
    {
        id: 'forge',
        title: 'Forge',
        description:
            'Participate in local community hackathons. Build, learn, and network in a fast-paced, supportive environment.',
        details: [
            'Community hackathons',
            'Team-based rapid prototyping',
            'Workshops and prep sessions',
            'Prizes and recognition',
            'All skill levels welcome',
        ],
        image: '/pics/retreat.jpg',
        icon: '⚒️',
    },
    {
        id: 'uxr',
        title: 'User Experience Research',
        description:
            'Collect and analyze data to improve internal functions. Help shape the club’s direction and impact.',
        details: [
            'Surveys and interviews',
            'Data-driven club improvements',
            'Present findings to leadership',
            'Learn UX research methods',
            'Make a real impact',
        ],
        image: '/pics/friendsgiving.JPG',
        icon: '📊',
    },
];

export default function Initiatives() {
    return (
        <div className="bg-dark-100 min-h-screen pb-16">
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                    Our Initiatives
                </h1>
                <p className="text-lg text-white/80 mb-12">
                    Explore our core programs and projects designed to advance
                    AI literacy, technical skills, and community at AISC.
                </p>
                {initiatives.map((initiative) => (
                    <section
                        key={initiative.id}
                        id={initiative.id}
                        className="mb-16 bg-dark-200 rounded-2xl border border-dark-300 overflow-hidden shadow-lg"
                    >
                        <div className="md:flex">
                            <div className="md:w-1/3 relative h-56 md:h-auto">
                                <Image
                                    src={initiative.image}
                                    alt={initiative.title}
                                    fill
                                    className="object-cover object-center md:rounded-l-2xl"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    priority={initiative.id === 'bp'}
                                />
                                <div className="absolute top-4 left-4 z-10 bg-dark-300/80 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-2xl border border-dark-300">
                                    {initiative.icon}
                                </div>
                            </div>
                            <div className="md:w-2/3 p-8 flex flex-col justify-center">
                                <h2
                                    className="text-2xl md:text-3xl font-bold mb-2 text-white"
                                    id={initiative.id}
                                >
                                    {initiative.title}
                                </h2>
                                <p className="text-white/80 mb-4">
                                    {initiative.description}
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mb-4">
                                    {initiative.details.map((detail, idx) => (
                                        <li key={idx} className="text-white/70">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`#${initiative.id}`}
                                    className="inline-flex items-center text-accent hover:underline font-semibold mt-2"
                                >
                                    Learn more
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
