"use client";
import React, { useRef, useState } from "react";
import { CustomCardProps } from "../types";
import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";

const CustomCard = ({ species, className, size = "md", href }: CustomCardProps) => {
    const imageRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <Image
                src={species.image}
                alt={species.name}
                layout="fill"
                objectFit="cover"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="slider-image rounded-2xl"
                ref={imageRef}
            />
            <div
                className={`absolute ${
                    href ? "-bottom-5" : "bottom-4"
                } flex flex-col items-center text-center w-full font-semibold text-[2vw] md:text-lg ${className}`}
            >
                <p className="text-white mb-4">{species.name}</p>
                {href && (
                    <Link href={href}>
                        <div className="slider-link bg-sub-dark rounded-full py-[1vw] px-[2vw] md:py-3 md:px-4">
                            <Image src="/icons/arrow-right.svg" alt="arrow-right" width={10} height={10} />
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
};

export default CustomCard;
