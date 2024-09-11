import React from "react";
import Image from "next/image";

const AboutUsCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
    return (
        <div className="bg-white rounded-2xl text-center p-[2vw] w-[16vw] aspect-square shadow-lg flex flex-col items-center justify-between">
            <Image src={icon} alt={title} width={100} height={100} className="w-[5vw]" />
            <h1 className="my-[0.8vw] font-semibold text-[1.2vw]">{title}</h1>
            <p className="text-[0.8vw]">{description}</p>
        </div>
    );
};

export default AboutUsCard;
