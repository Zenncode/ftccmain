"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export type LogoItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

type LogoGridProps = {
  logos: LogoItem[];
  columnsClassName?: string;
};

export default function LogoGrid({
  logos,
  columnsClassName = "grid grid-cols-2 items-center gap-8 sm:grid-cols-4 md:grid-cols-8",
}: LogoGridProps) {
  const [visibleLogos, setVisibleLogos] = useState<boolean[]>(new Array(logos.length).fill(false));
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = logoRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setVisibleLogos((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    logoRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [logos.length]);

  return (
    <div className={columnsClassName}>
      {logos.map((logo, index) => (
        <div 
          key={`${logo.alt}-${index}`} 
          ref={(el) => {
            logoRefs.current[index] = el;
          }}
          className={`group relative transition-all duration-1000 ease-out ${
            visibleLogos[index] 
              ? "translate-y-0 opacity-100" 
              : "translate-y-16 opacity-0"
          }`}
          style={{
            transitionDelay: `${index * 100}ms`
          }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative z-10 flex items-center justify-center h-20">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={`${logo.className ?? "mx-auto"} max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


