import { inView } from "framer-motion";
import * as motion from "framer-motion/client";

type TranslatedViewProps = {
    direction: "left" | "right" | "up" | "down" | "scale up" | "scale down";
    delay?: number;
    children: React.ReactNode;
    duration?: number;
    className?: string;
    repeat?: boolean;
};

const TranslatedView = ({ direction, delay, children, duration, className, repeat = true }: TranslatedViewProps) => {
    const motionAnimation = {
        initial: {
            opacity: 0,
            translateX: direction === "left" ? -100 : direction === "right" ? 100 : 0,
            translateY: direction === "up" ? -100 : direction === "down" ? 100 : 0,
            scale: direction === "scale up" ? 0 : direction === "scale down" ? 1 : 1,
        },
        whileInView: { opacity: 1, translateX: 0, translateY: 0, scale: 1 },
        transition: { duration: duration || 1, delay: delay || 0 },
        viewport: { once: repeat },
    };

    return (
        <motion.div
            initial={motionAnimation.initial}
            whileInView={motionAnimation.whileInView}
            transition={motionAnimation.transition}
            viewport={motionAnimation.viewport}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default TranslatedView;
