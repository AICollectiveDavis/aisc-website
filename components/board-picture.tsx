import Image from 'next/image';

export function BoardPicture() {
    return (
        <section className="pt-28 pb-12 relative">
            <div className="container relative z-10 mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold my-6 text-balance">
                        About Our Club
                    </h1>
                    <p className="text-muted-foreground text-lg text-pretty">
                        Building the next generation of AI leaders and innovators at UC Davis
                    </p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
                        <Image
                            src="/pics/aisc_board.jpg"
                            alt="AI Collective board"
                            width={1200}
                            height={675}
                            className="w-full h-auto object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                    <p className="text-center text-muted-foreground text-sm tracking-wide mt-4">
                        2025–26 Board Members
                    </p>
                </div>
            </div>
        </section>
    );
}
