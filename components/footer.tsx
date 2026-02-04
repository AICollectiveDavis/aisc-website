'use client';

import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-dark-400 py-16 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* About */}
                    <div className="md:col-span-5">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            AI Student Collective
                        </h3>
                        <p className="text-white/70 max-w-lg text-base">
                            A global network of student organizations dedicated
                            to making AI literacy accessible for everyone.
                            Through pre-professional programs, hands-on events,
                            and industry connections, we&#39;re building a more
                            informed, diverse, and equitable future in AI.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4 mt-6">
                            {/* <a href="https://twitter.com/aistudentclub" target="_blank" rel="noopener noreferrer" 
                className="h-10 w-10 bg-dark-300/50 rounded-full flex items-center justify-center text-white/80 hover:text-primary hover:bg-dark-300 transition-all duration-200 group">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a> */}

                            <a
                                href="https://instagram.com/aiscdavis/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 bg-dark-300/50 rounded-full flex items-center justify-center text-white/80 hover:text-primary hover:bg-dark-300 transition-all duration-200 group"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg
                                    className="h-5 w-5 group-hover:scale-110 transition-transform duration-200"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>

                            <a
                                href="https://github.com/AIStudentCollective"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 bg-dark-300/50 rounded-full flex items-center justify-center text-white/80 hover:text-primary hover:bg-dark-300 transition-all duration-200 group"
                            >
                                <span className="sr-only">GitHub</span>
                                <svg
                                    className="h-5 w-5 group-hover:scale-110 transition-transform duration-200"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>

                            <a
                                href="https://linkedin.com/company/ai-student-collective"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 bg-dark-300/50 rounded-full flex items-center justify-center text-white/80 hover:text-primary hover:bg-dark-300 transition-all duration-200 group"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                    className="h-5 w-5 group-hover:scale-110 transition-transform duration-200"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/initiatives"
                                    className="text-base text-white/70 hover:text-primary transition-all duration-200 flex items-center"
                                >
                                    <svg
                                        className="h-4 w-4 mr-2 text-primary/70"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Initiatives
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/teams"
                                    className="text-base text-white/70 hover:text-primary transition-all duration-200 flex items-center"
                                >
                                    <svg
                                        className="h-4 w-4 mr-2 text-primary/70"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Teams
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-base text-white/70 hover:text-primary transition-all duration-200 flex items-center"
                                >
                                    <svg
                                        className="h-4 w-4 mr-2 text-primary/70"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/join"
                                    className="text-base text-white/70 hover:text-primary transition-all duration-200 flex items-center"
                                >
                                    <svg
                                        className="h-4 w-4 mr-2 text-primary/70"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Join
                                </Link>
                            </li>
                            {/* <li>
                <Link
                  href="/contact"
                  className="text-base text-white/70 hover:text-primary transition-all duration-200 flex items-center"
                >
                  <svg className="h-4 w-4 mr-2 text-primary/70" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Contact
                </Link>
              </li> */}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4">
                        <h3 className="text-white text-lg font-semibold mb-4">
                            Contact Us
                        </h3>
                        <div className="space-y-4 bg-dark-300/30 p-5 rounded-lg border border-white/5">
                            <div className="flex items-start">
                                <svg
                                    className="h-6 w-6 text-primary flex-shrink-0 mr-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-white/70 text-base">
                                    aistudentcollective@gmail.com
                                </span>
                            </div>
                            <div className="flex items-start">
                                <svg
                                    className="h-6 w-6 text-primary flex-shrink-0 mr-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span className="text-white/70 text-base">
                                    University of California, Davis
                                    <br />
                                    One Shields Avenue
                                    <br />
                                    Davis, CA 95616
                                </span>
                            </div>
                            <div className="flex items-start">
                                <svg
                                    className="h-6 w-6 text-primary flex-shrink-0 mr-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className="text-white/70 text-base">
                                    All Hands Meetings: Wednesdays, 7:00 PM, Walker 1330
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 mt-12 pt-6 text-center md:flex md:justify-between md:items-center">
                    <p className="text-white/50 text-sm">
                        © {currentYear} AI Student Collective. All rights
                        reserved.
                    </p>
                    <p className="text-white/50 text-sm mt-2 md:mt-0">
                        Made with ❤️ by Member Dev
                    </p>
                </div>
            </div>
        </footer>
    );
}
