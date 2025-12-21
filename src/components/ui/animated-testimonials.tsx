import { IconArrowLeft, IconArrowRight, IconBrandGithub, IconBrandLinkedin, IconExternalLink } from "@tabler/icons-react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../../lib/utils";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
    github?: string;
    linkedin?: string;
    website?: string;
    objectPosition?: string;
};

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
    className,
    theme,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
    className?: string;
    theme?: string;
}) => {
    const [active, setActive] = useState(0);
    const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
    const isLight = theme === 'light';

    // Mouse tracking for hover effect
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    const handleMouseMove = useCallback(({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }, [mouseX, mouseY]);

    const maskImage = useMotionTemplate`radial-gradient(250px 250px at ${mouseX}px ${mouseY}px, black, transparent)`;

    const handleNext = useCallback(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const handlePrev = useCallback(() => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay && !isAutoplayPaused) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay, handleNext, isAutoplayPaused]);

    const handleManualNext = () => {
        setIsAutoplayPaused(true);
        handleNext();
    };

    const handleManualPrev = () => {
        setIsAutoplayPaused(true);
        handlePrev();
    };

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };

    return (
        <div className={cn("max-w-sm md:max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8", className)}>
            <div className={`backdrop-blur-md p-8 md:p-12 rounded-3xl border shadow-2xl transition-colors duration-300 ${isLight
                ? "bg-white border-gray-200 shadow-xl"
                : "bg-secondary/20 border-white/10"
                }`}>
                <div className="relative grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 md:gap-20">
                    <div>
                        <div className="relative h-64 w-full md:h-[300px]">
                            <AnimatePresence>
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.src}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: -100,
                                            rotate: randomRotateY(),
                                        }}
                                        animate={{
                                            opacity: isActive(index) ? 1 : 0.7,
                                            scale: isActive(index) ? 1 : 0.95,
                                            z: isActive(index) ? 0 : -100,
                                            rotate: isActive(index) ? 0 : randomRotateY(),
                                            zIndex: isActive(index)
                                                ? 999
                                                : testimonials.length + 2 - index,
                                            y: isActive(index) ? [0, -80, 0] : 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.9,
                                            z: 100,
                                            rotate: randomRotateY(),
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: "easeInOut",
                                        }}
                                        className={`absolute inset-0 origin-bottom rounded-3xl overflow-hidden ${isActive(index) ? "border-4 border-primary" : ""
                                            }`}
                                        onMouseMove={isActive(index) ? handleMouseMove : undefined}
                                        onMouseLeave={isActive(index) ? () => { mouseX.set(-1000); mouseY.set(-1000); } : undefined}
                                    >
                                        <img
                                            src={testimonial.src}
                                            alt={testimonial.name}
                                            draggable={false}
                                            style={{ objectPosition: testimonial.objectPosition || "center" }}
                                            className="h-full w-full object-cover grayscale"
                                        />
                                        {isActive(index) && (
                                            <motion.div
                                                className="absolute inset-0 pointer-events-none"
                                                style={{ maskImage, WebkitMaskImage: maskImage }}
                                            >
                                                <img
                                                    src={testimonial.src}
                                                    alt={testimonial.name}
                                                    draggable={false}
                                                    style={{ objectPosition: testimonial.objectPosition || "center" }}
                                                    className="h-full w-full object-cover"
                                                />
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col py-4">
                        <motion.div
                            key={active}
                            initial={{
                                y: 20,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: -20,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                            }}
                        >
                            <h3 className="text-3xl font-bold mb-2 text-primary">
                                {testimonials[active].name}
                            </h3>
                            <p className={`text-base font-medium ${isLight ? "text-gray-600" : "text-muted/80"}`}>
                                {testimonials[active].designation}
                            </p>
                            <motion.p className={`text-lg mt-6 mb-8 leading-relaxed ${isLight ? "text-gray-800" : "text-gray-300"}`}>
                                {testimonials[active].quote.split(" ").map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{
                                            filter: "blur(10px)",
                                            opacity: 0,
                                            y: 5,
                                        }}
                                        animate={{
                                            filter: "blur(0px)",
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                            delay: 0.02 * index,
                                        }}
                                        className="inline-block"
                                    >
                                        {word}&nbsp;
                                    </motion.span>
                                ))}
                            </motion.p>

                            <div className={`flex gap-4 pt-4 border-t ${isLight ? "border-gray-200" : "border-white/10"}`}>
                                {testimonials[active].github && (
                                    <a href={testimonials[active].github} target="_blank" rel="noopener noreferrer" className={`${isLight ? "text-gray-600 hover:text-primary" : "text-muted hover:text-primary"} transition-colors`}>
                                        <IconBrandGithub className="h-6 w-6" />
                                    </a>
                                )}
                                {testimonials[active].linkedin && (
                                    <a href={testimonials[active].linkedin} target="_blank" rel="noopener noreferrer" className={`${isLight ? "text-gray-600 hover:text-primary" : "text-muted hover:text-primary"} transition-colors`}>
                                        <IconBrandLinkedin className="h-6 w-6" />
                                    </a>
                                )}
                                {testimonials[active].website && (
                                    <a href={testimonials[active].website} target="_blank" rel="noopener noreferrer" className={`${isLight ? "text-gray-600 hover:text-primary" : "text-muted hover:text-primary"} transition-colors`}>
                                        <IconExternalLink className="h-6 w-6" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                        <div className="flex gap-4 pt-12 md:pt-0 justify-end">
                            <button
                                onClick={handleManualPrev}
                                className="h-10 w-10 rounded-full flex items-center justify-center group/button transition-colors border bg-primary/10 hover:bg-primary/20 border-primary/20"
                            >
                                <IconArrowLeft className="h-6 w-6 group-hover/button:rotate-12 transition-transform duration-300 text-primary" />
                            </button>
                            <button
                                onClick={handleManualNext}
                                className="h-10 w-10 rounded-full flex items-center justify-center group/button transition-colors border bg-primary/10 hover:bg-primary/20 border-primary/20"
                            >
                                <IconArrowRight className="h-6 w-6 group-hover/button:-rotate-12 transition-transform duration-300 text-primary" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
