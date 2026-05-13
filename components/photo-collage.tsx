import Image from 'next/image';

export function PhotoCollage() {
    return (
        <section className="py-16 bg-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-secondary/10 rounded-full blur-[80px]" />
            <div className="container relative z-10 mx-auto px-4">
                <div className="relative h-[600px] md:h-[700px] max-w-6xl mx-auto">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55%] md:w-[45%] z-10 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                        <div style={{ transform: 'rotate(-1deg) scale(1.02)' }} className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500">
                            <div className="relative aspect-video overflow-hidden rounded bg-muted">
                                <Image src="/pics/grad_25.jpg" alt="AI Collective team photo" width={500} height={300} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-muted text-sm pt-2 px-1 font-medium">Class of &#39;25 Grads!</p>
                        </div>
                    </div>
                    <div className="absolute left-[5%] md:left-[8%] top-[5%] w-[40%] md:w-[28%] z-20 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                        <div style={{ transform: 'rotate(4deg) scale(1)' }} className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500">
                            <div className="relative aspect-video overflow-hidden rounded bg-muted">
                                <Image src="/pics/bp_wq_showcase.JPG" alt="AI Workshop" width={250} height={250} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-muted text-sm pt-2 px-1 font-medium">WQ &#39;25 Beginner Projects</p>
                        </div>
                    </div>
                    <div className="absolute right-[5%] md:right-[8%] bottom-[5%] w-[38%] md:w-[26%] z-30 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                        <div style={{ transform: 'rotate(-3deg) scale(1)' }} className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500">
                            <div className="relative aspect-square overflow-hidden rounded bg-muted">
                                <Image src="/pics/r&d.jpeg" alt="R&D Team" width={250} height={250} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-muted text-sm pt-2 px-1 font-medium">R&D winning Best Research Award at CSS Escape 2025!</p>
                        </div>
                    </div>
                    <div className="absolute right-[12%] md:right-[15%] top-[15%] w-[35%] md:w-[24%] z-15 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                        <div style={{ transform: 'rotate(-5deg) scale(0.95)' }} className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500">
                            <div className="relative aspect-[4/3] overflow-hidden rounded bg-muted">
                                <Image src="/pics/WomenInTech.jpg" alt="Project Presentation" width={250} height={200} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-muted text-sm pt-2 px-1 font-medium">Annual Women in Tech Event</p>
                        </div>
                    </div>
                    <div className="absolute left-[2%] md:left-[5%] top-[45%] w-[32%] md:w-[22%] z-25 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                        <div style={{ transform: 'rotate(6deg) scale(0.92)' }} className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500">
                            <div className="relative aspect-square overflow-hidden rounded bg-muted">
                                <Image src="/pics/winter_kickoff.PNG" alt="Winter 2025 Kickoff" width={200} height={200} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-muted text-sm pt-2 px-1 font-medium">Quarterly Kickoff Meeting</p>
                        </div>
                    </div>
                    <div className="absolute left-[35%] md:left-[38%] bottom-[8%] w-[30%] md:w-[20%] z-35 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                        <div style={{ transform: 'rotate(2deg) scale(1)' }} className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500">
                            <div className="relative aspect-[3/4] overflow-hidden rounded bg-muted">
                                <Image src="/pics/tuff_ahh_merch.jpg" alt="Merch!" width={200} height={250} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-muted text-sm pt-2 px-1 font-medium">Merch!</p>
                        </div>
                    </div>
                    <div className="absolute left-[45%] md:left-[48%] top-[8%] w-[25%] md:w-[18%] z-40 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                        <div style={{ transform: 'rotate(-4deg)' }} className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500">
                            <div className="relative overflow-hidden rounded bg-muted">
                                <Image src="/pics/retreat.jpg" alt="Yosemite Winter Retreat" width={150} height={150} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-muted text-sm pt-2 px-1 font-medium">Yosemite Winter Retreat!</p>
                        </div>
                    </div>
                    <div className="absolute right-[2%] md:right-[4%] top-[55%] w-[28%] md:w-[19%] z-45 transition-all duration-500 hover:z-50 hover:scale-110 hover:rotate-0 cursor-pointer">
                        <div style={{ transform: 'rotate(7deg) scale(1.1)' }} className="bg-white p-3 rounded-lg shadow-xl border hover:shadow-2xl transition-shadow duration-500">
                            <div className="relative overflow-hidden rounded bg-muted">
                                <Image src="/pics/current_board.jpg" alt="AI Collective" width={400} height={500} className="w-full h-full object-cover" />
                            </div>
                            <p className="text-muted text-sm pt-2 px-1 font-medium">AI Collective</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
