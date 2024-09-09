import Link from "next/link";
import React from "react";
import { CustomButtonProps } from "../types";

const getButtonSizeVariant = (size: string) => {
    switch (size) {
        case "sm":
            return "py-2 px-4 text-sm rounded-md";
        case "lg":
            return "py-[1%] px-[2%] text-[60%] md:text-[1vw] rounded-lg";
        default:
            return "py-[1.5%] px-[2.5%] text-[70%] md:text-[0.8vw] rounded-md";
    }
};

const CustomButton = ({ className, href, title, size = "md" }: CustomButtonProps) => {
    return (
        <Link
            href={href}
            className={`bg-sub-dark text-black font-semibold text-nowrap ${getButtonSizeVariant(
                size,
            )} hover:bg-sub-hover hover:text-gray-100 ${className}`}
        >
            {title}
        </Link>
    );
};

export default CustomButton;
