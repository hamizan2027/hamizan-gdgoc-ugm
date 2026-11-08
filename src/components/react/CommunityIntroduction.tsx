import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                defaults: { ease: "power3.out", duration: 0.8 },
            });

            tl.from(".gsap-about-left", {
                y: 30,
                opacity: 0,
                stagger: 0.15,
            })
            .from(
                ".gsap-about-right",
                {
                    y: 30,
                    opacity: 0,
                    stagger: 0.15,
                },
                "-=0.5"
            );
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            id="about"
            className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-12"
        >
            <div>
                <p className="gsap-about-left inline-flex items-center gap-2 rounded-full text-sm text-[#5F6368] uppercase">
                    <span
                        className="size-2 rounded-full bg-[#1967D2]"
                        aria-hidden="true"
                    ></span>
                    A campus. A community.
                </p>
                <h2 className="gsap-about-left mt-4 max-w-xl text-4xl leading-tight font-bold tracking-[-0.035em] text-[#242424] sm:text-5xl">
                    Not just learning tech.
                    <br />
                    Finding your people.
                </h2>
                <a
                    href="#more"
                    className="gsap-about-left mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1967D2] hover:underline"
                >
                    More about GDGoC UGM <span aria-hidden="true">→</span>
                </a>
            </div>
            <div className="max-w-2xl lg:pt-1">
                <p className="gsap-about-right text-lg leading-8 text-[#5F6368]">
                    Google Developer Groups on Campus, Universitas Gadjah Mada brings
                    students together around one simple idea: we can go{" "}
                    <span className="font-semibold text-[#242424]">further</span>&nbsp;when
                    we
                    <span className="font-semibold text-[#242424]">&nbsp;learn</span>
                    &nbsp;with each other.
                </p>
                <p className="gsap-about-right mt-4 text-base leading-7 text-[#5F6368]">
                    From your first line of code to your next product idea, there’s room
                    to ask questions, share what you know, and try something new.
                </p>
                <div className="gsap-about-right mt-7 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#DADCE0] px-4 py-2 text-sm font-medium text-[#5F6368]">
                        Student-led
                    </span>
                    <span className="rounded-full border border-[#DADCE0] px-4 py-2 text-sm font-medium text-[#5F6368]">
                        Peer-powered
                    </span>
                    <span className="rounded-full border border-[#DADCE0] px-4 py-2 text-sm font-medium text-[#5F6368]">
                        Curiosity-first
                    </span>
                </div>
            </div>
        </section>
    );
}
