import Link from "next/link";
import React from "react";
import { CustomButtonProps } from "../types";

const getButtonSizeVariant = (size: string) => {
    switch (size) {
        case "sm":
            return "py-2 px-4 text-sm rounded-md";
        case "lg":
            return "py-4 px-8 text-lg rounded-lg";
        default:
            return "py-3 px-6 text-base rounded-md";
    }
};

const CustomButton = ({ className, href, title, size = "md" }: CustomButtonProps) => {
    return (
        <Link
            href={href}
            className={`bg-sub-dark text-black font-semibold ${getButtonSizeVariant(
                size,
            )} hover:bg-sub-hover hover:text-gray-100 ${className}`}
        >
            {title}
        </Link>
    );
};

export default CustomButton;
