import React from "react";
import { CustomCardProps } from "../types";
import Image from "next/image";
import Link from "next/link";

const CustomCard = ({ species, className, size = "md", href }: CustomCardProps) => (
    <div className="aspect-square rounded-2xl shadow-md-offset relative w-full">
        <Image src={species.image} alt={species.name} layout="fill" objectFit="cover" style={{ borderRadius: "15px" }} />

        <div className={`absolute ${href ? "-bottom-5" : "bottom-4"} flex flex-col items-center w-full font-semibold text-lg ${className}`}>
            <p className="text-white mb-4">{species.name}</p>
            {href && (
                <Link href={href}>
                    <div className="bg-sub-dark rounded-full py-3 px-4 ">
                        <Image src="/icons/arrow-right.svg" alt="arrow-right" width={10} height={10} />
                    </div>
                </Link>
            )}
        </div>
    </div>
);

export default CustomCard;

// Note to self:
// - To make the image fill the container, set the container to be relative and 100% width
