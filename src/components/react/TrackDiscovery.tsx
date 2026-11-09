import { useRef, useEffect } from "react";
import { useStore } from '@nanostores/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TrackCard from "./TrackCard";
import { $tracks, $isLoading, $error, fetchTracks } from "../../stores/trackStores"; // Pastikan ini 'trackStore', bukan 'trackStores'

gsap.registerPlugin(ScrollTrigger);

export default function TrackDiscovery() {
    const containerRef = useRef<HTMLElement>(null);

    const apiTracks = useStore($tracks);
    const isLoading = useStore($isLoading);
    const error = useStore($error);

    useEffect(() => {
        if (apiTracks.length === 0) {
            fetchTracks();
        }
    }, [apiTracks.length]);

    useGSAP(
        () => {
            if (isLoading) return;

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
                clearProps: "all"
            });

            const cards = gsap.utils.toArray(".gsap-track-card");
            if (cards.length > 0) {
                tl.from(
                    cards,
                    {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power3.out",
                        clearProps: "all"
                    },
                    "-=0.4"
                );
            }
        },
        { scope: containerRef, dependencies: [isLoading, apiTracks] }
    );

    return (
        <section ref={containerRef} id="tracks" className="bg-[#F8F9FA] min-h-screen">
            <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">


                {isLoading ? (
                    <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
                        <span className="text-sm font-medium text-[#5F6368] animate-pulse">Loading...</span>
                    </div>
                ) : error ? (
                    <div className="flex h-[60vh] flex-col items-center justify-center gap-2 text-center">
                      <img
                          src="/t-rex-error.svg"
                          alt="t-rex-error"
                          width="465"
                          height="447"
                          className="w-36 object-contain"
                          loading="lazy"
                      />
                        <span className="text-base font-bold text-[#5F6368] uppercase">Error</span>
                        <span className="text-sm text-[#5F6368]">{error}</span>
                    </div>
                ) : (

                    <>
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

                        <div className="mt-10">
                            <div className="grid items-stretch gap-5 md:grid-cols-3 lg:gap-6">
                                {apiTracks.map((apiTrack, index) => {
                                    let toneType: "blue" | "yellow" | "green" = "blue";
                                    if (apiTrack.id === "design-creativity") toneType = "yellow";
                                    if (apiTrack.id === "development") toneType = "green";

                                    let imageUrl = "/research-track-artwork.svg";
                                    if (apiTrack.id === "design-creativity") imageUrl = "/design-track-artwork.svg";
                                    if (apiTrack.id === "development") imageUrl = "/development-track-artwork.svg";

                                    return (
                                        <TrackCard
                                            key={apiTrack.id || index}
                                            image={imageUrl}
                                            imageAlt={`${apiTrack.name} illustration`}
                                            eyebrow={apiTrack.tagline}
                                            title={apiTrack.name}
                                            description={apiTrack.description}
                                            topics={apiTrack.skills.join(" · ")}
                                            tone={toneType}
                                            className="gsap-track-card"
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </>
                )}

            </div>
        </section>
    );
}
