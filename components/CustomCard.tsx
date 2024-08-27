import React from "react";
import { CustomCardProps } from "../types";
import Image from "next/image";
import Link from "next/link";

const CustomCard = ({ species, className, size = "md", href }: CustomCardProps) => (
    <div className="rounded-2xl shadow-md-offset relative aspect-square w-1/6 m-5" style={{ aspectRatio: "1/1" }}>
        <Image src={species.image} alt={species.name} layout="fill" objectFit="cover" style={{ borderRadius: "15px" }} />

        <div
            className={`absolute ${
                href ? "-bottom-5" : "bottom-4"
            } flex flex-col items-center text-center w-full font-semibold text-lg ${className}`}
        >
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
