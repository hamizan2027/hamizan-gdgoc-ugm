import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HeaderImage from "./HeaderImage";

export default function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: { ease: "power3.out", duration: 1 },
            });

            tl.from(".gsap-text-reveal", {
                y: 30,
                opacity: 0,
                stagger: 0.15,
            })
            .from(
                ".gsap-image-reveal",
                {
                    scale: 0.95,
                    opacity: 0,
                    duration: 1.2,
                },
                "-=0.6"
            );
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            id="top"
            className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24"
        >
            <div className="max-w-2xl">
                <p className="gsap-text-reveal mb-6 inline-flex items-center gap-2 rounded-full text-sm text-[#5F6368] uppercase">
                    <span
                        className="size-2 rounded-full bg-[#1967D2]"
                        aria-hidden="true"
                    ></span>
                    GDGoC UGM <span aria-hidden="true">·</span> 2026/2027
                </p>
                <h1 className="gsap-text-reveal text-5xl leading-[1.05] font-bold tracking-[-0.045em] text-[#242424] sm:text-6xl lg:text-7xl">
                    Big ideas.
                    <br />
                    <span className="text-[#1967D2]">Built together.</span>
                </h1>
                <p className="gsap-text-reveal mt-7 max-w-xl text-lg leading-8 text-[#5F6368]">
                    A place for curious minds at{" "}
                    <span className="font-semibold text-[#242424]">
                        Universitas Gadjah Mada
                    </span>
                    &nbsp;to learn, connect, and build technology that matters.
                </p>
                <div className="gsap-text-reveal mt-9 flex flex-col gap-3 sm:flex-row">
                    <a
                        href="#tracks"
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1967D2] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1558B0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1967D2]"
                    >
                        Find your learning track <span aria-hidden="true">→</span>
                    </a>
                    <a
                        href="/overview"
                        className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#DADCE0] px-6 text-sm font-semibold text-[#242424] transition-colors hover:bg-[#F8F9FA]"
                    >
                        Get to know us
                    </a>
                </div>
                <div className="gsap-text-reveal mt-10 flex items-center gap-4">
                    <div className="flex -space-x-1" aria-hidden="true">
                        <span className="size-3 rounded-full border-2 border-white bg-[#4284F4]"></span>
                        <span className="size-3 rounded-full border-2 border-white bg-[#EA4335]"></span>
                        <span className="size-3 rounded-full border-2 border-white bg-[#F9AB00]"></span>
                        <span className="size-3 rounded-full border-2 border-white bg-[#34A853]"></span>
                    </div>
                    <p className="text-sm text-[#5F6368]">
                        Different backgrounds. A shared curiosity.
                    </p>
                </div>
            </div>

            <div className="gsap-image-reveal relative mx-auto w-full max-w-xl">
                <div className="absolute -left-4 top-12 size-40 rounded-full bg-[#EAF2FF] sm:-left-8 sm:size-40 blur-xl"></div>
                <div className="absolute -right-2 bottom-10 size-44 rounded-full bg-[#FFF7DF] sm:-right-6 sm:size-48 blur-xl"></div>

                <HeaderImage/>
            </div>
        </section>
    );
}
