import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function HeaderImage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const researchRef = useRef<HTMLDivElement>(null);
    const devRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(textRef.current, {
            text: "hello, possibilities",
            duration: 2,
            ease: "none",
            delay: 0.5,
        });
    }, { scope: containerRef });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

        gsap.to(researchRef.current, {
            x: x * -15,
            y: y * -15,
            rotationX: y * 5,
            rotationY: x * 5,
            ease: "power2.out",
            duration: 0.5,
        });

        gsap.to(devRef.current, {
            x: x * 20,
            y: y * 20,
            rotationX: y * -5,
            rotationY: x * -5,
            ease: "power2.out",
            duration: 0.5,
        });
    };

    const handleMouseLeave = () => {
        gsap.to([researchRef.current, devRef.current], {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            ease: "power3.out",
            duration: 0.8,
        });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-[2rem] bg-[#F8F9FA] will-change-transform"
            style={{ perspective: 1000 }}
        >
            <img
                src="/glass-tile-artwork.png"
                alt="Hero artwork"
                width="600"
                height="600"
                className="h-auto w-full"
            />

            <div
                ref={researchRef}
                className="absolute top-0 left-0 mx-auto w-66 max-w-70 md:max-w-none"
            >
                <img
                    src="/research-track-artwork.svg"
                    alt="Illustration of ideas and learning coming together"
                    width="451"
                    height="496"
                    className="h-auto w-full max-w-48 sm:max-w-none drop-shadow-[0_0_35px_rgba(25,103,210,0.6)]"
                />
            </div>

            <span className="absolute text-lg min-w-[236px] text-center bottom-20 left-5 px-4 py-2 bg-white rounded-full -rotate-8 z-5 font-bold">
                <span ref={textRef}></span>
                <span className="animate-pulse">_</span>
            </span>

            <div
                ref={devRef}
                className="absolute bottom-10 right-0 mx-auto w-full max-w-72 sm:max-w-96"
            >
                <img
                    src="/development-track-artwork.svg"
                    alt="Illustration of ideas and learning coming together"
                    width="451"
                    height="496"
                    className="h-auto w-full max-w-60 sm:max-w-none drop-shadow-[0_0_35px_rgba(24,128,56,0.7)]"
                />

            </div>
            <span className="absolute text-xs right-5 bottom-8 px-3 py-2 bg-white rounded-full shadow-sm">
                Built on <a className="font-bold">curiosity</a>. Rooted in <a className="font-bold">UGM</a>.
            </span>
        </div>
    );
}
