import Link from "next/link";
import React from "react";

type CustomButtonProps = {
    className?: string;
    href: string;
    title: string;
};

const CustomButton = ({ className, href, title }: CustomButtonProps) => {
    return (
        <Link
            href={href}
            className={`bg-sub-dark text-black font-semibold px-4 py-3 rounded-md hover:bg-sub-hover hover:text-gray-100 shadow-md ${className}`}
        >
            {title}
        </Link>
    );
};

export default CustomButton;
