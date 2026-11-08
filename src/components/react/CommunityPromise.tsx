import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const promises = [
    "Learn by doing",
    "Connect across disciplines",
    "Build with purpose",
];

export default function CommunityPromise() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            gsap.from(".gsap-promise-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            aria-label="Our community promise"
            className="border-y border-[#DADCE0] bg-white"
        >
            <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-3 sm:px-8 lg:px-12">
                {promises.map((promise, index) => {
                    const colors = ["text-[#1967D2]", "text-[#C5221F]", "text-[#188038]"];
                    const colorClass = colors[index] || "text-[#242424]";

                    return (
                        <div
                            key={index}
                            className="gsap-promise-item flex items-center gap-3 sm:justify-center lg:justify-start"
                        >
                            <span
                                className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${colorClass}`}
                                aria-hidden="true"
                            >
                                ■
                            </span>
                            <p className="font-semibold text-[#242424]">{promise}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
