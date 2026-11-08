import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TrackCard, { type TrackCardProps } from "./TrackCard";

gsap.registerPlugin(ScrollTrigger);

const tracks: TrackCardProps[] = [
    {
        image: "/research-track-artwork.svg",
        imageAlt: "Research and discovery pathway illustration",
        eyebrow: "Explore the why",
        title: "Research & discovery",
        description:
            "Ask better questions, understand people, and turn insight into a clear problem worth solving.",
        topics: "Problem framing · User research · Product thinking",
        tone: "blue",
    },
    {
        image: "/design-track-artwork.svg",
        imageAlt: "Design and creativity pathway illustration",
        eyebrow: "Make it meaningful",
        title: "Design & creativity",
        description:
            "Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.",
        topics: "UI/UX · Visual storytelling · Prototyping",
        tone: "yellow",
    },
    {
        image: "/development-track-artwork.svg",
        imageAlt: "Development pathway illustration",
        eyebrow: "Bring ideas to life",
        title: "Development",
        description:
            "Learn the tools, write the code, and build useful things with people who enjoy figuring it out.",
        topics: "Web & mobile · Cloud · AI foundations",
        tone: "green",
    },
];

export default function TrackDiscovery() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });

            tl.from(".gsap-track-header", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            })
            .from(
                ".gsap-track-card",
                {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                },
                "-=0.4"
            );
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} id="tracks" className="bg-[#F8F9FA]">
            <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <p className="gsap-track-header inline-flex items-center gap-2 rounded-full text-sm text-[#5F6368] uppercase">
                            <span
                                className="size-2 rounded-full bg-[#1967D2]"
                                aria-hidden="true"
                            ></span>
                            Find your starting point
                        </p>
                        <h2 className="gsap-track-header mt-4 text-4xl leading-tight font-bold tracking-[-0.035em] text-[#242424] sm:text-5xl">
                            Many interests.
                            <br className="hidden sm:block" /> One shared journey.
                        </h2>
                        <p className="gsap-track-header mt-5 max-w-xl text-base leading-7 text-[#5F6368]">
                            Follow what excites you. Explore a track, then connect the
                            dots with others.
                        </p>
                    </div>
                    <a
                        href="/overview"
                        className="gsap-track-header inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#1967D2] hover:underline"
                    >
                        See the overview <span aria-hidden="true">→</span>
                    </a>
                </div>

                <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3 lg:gap-6">
                    {tracks.map((track, index) => (
                        <TrackCard
                            key={index}
                            {...track}
                            className="gsap-track-card"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
