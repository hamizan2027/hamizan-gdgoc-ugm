import { useRef } from "react";
import gsap from "gsap";

export type TrackCardProps = {
    image: string;
    imageAlt: string;
    eyebrow: string;
    title: string;
    description: string;
    topics: string;
    tone: "blue" | "yellow" | "green";
    className?: string;
}

const toneClasses = {
    blue: {
        surface: "bg-[#EAF2FF]",
        text: "text-[#1967D2]",
    },
    yellow: {
        surface: "bg-[#FFF7DF]",
        text: "text-[#8A5D00]",
    },
    green: {
        surface: "bg-[#EAF5ED]",
        text: "text-[#188038]",
    },
};

export default function TrackCard({
    image,
    imageAlt,
    eyebrow,
    title,
    description,
    topics,
    tone,
    className = "",
}: TrackCardProps) {
    const cardRef = useRef<HTMLElement>(null);
    const toneClass = toneClasses[tone];

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(cardRef.current, {
            rotationX: rotateX,
            rotationY: rotateY,
            scale: 1.03,
            transformPerspective: 1000,
            ease: "power2.out",
            duration: 0.4,
        });
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;

        gsap.to(cardRef.current, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "power3.out",
            duration: 0.6,
        });
    };

    return (
        <article
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`flex h-full flex-col overflow-hidden rounded-3xl border border-[#DADCE0] bg-white will-change-transform ${className}`}
        >
            <div className={`flex h-56 items-center justify-center p-6 ${toneClass.surface}`}>
                <img
                    src={image}
                    alt={imageAlt}
                    width="465"
                    height="447"
                    className="h-full w-full object-contain"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className={`text-sm font-semibold ${toneClass.text}`}>
                    {eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#242424]">
                    {title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#5F6368] sm:text-base sm:leading-7">
                    {description}
                </p>
                <p className="mt-6 border-t border-[#DADCE0] pt-4 text-xs leading-5 text-[#5F6368]">
                    {topics}
                </p>
                <a className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1967D2] hover:underline cursor-pointer">
                    Explore this track <span aria-hidden="true">→</span>
                </a>
            </div>
        </article>
    );
}
