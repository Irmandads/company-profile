import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { sectionBodyAnimation } from "../../../hooks/useAnimation";
import { RevealEffect } from "react-reveal-effect";
import Button from "../../atoms/ButtonFull";
import "../../../pages/shared/Shared.css";

const Diskusi = () => {
    const [ref, inView] = useInView();
    const [viewDiv, setViewDiv] = useState(false);
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            setViewDiv(true);
        } else {
            setViewDiv(false);
        }
    }, [inView, animation]);
    return (
        <div className="mt-24 py-16 parent">
            <motion.div ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                <RevealEffect bottom>
                    <section className="flex h-60 items-center container mx-auto justify-center">
                        <div className="flex flex-col rounded-2xl bg-blue-400 text-gray-100 py-14 sm:px-12 sm:py-20 xl:px-16 shadow-2xl discuss">
                            <div className="flex flex-col sm:flex-row mb-3 sm:mb-9 p-5 sm:p-0 sm:items-center">
                                <h1 className="w-2/3 text-5xl sm:text-6xl leading-tight font-semibold">Have an awesome project in mind?</h1>
                                <Button
                                    href="/kontak"
                                    type="link"
                                    className="flex bg-white text-blue-800 text-xl font-semibold lg:text-2xl xl:text-xl tracking-wider items-center justify-center w-56 lg:w-96 lg:h-24 xl:w-56 h-20 p-5 border-2 border-white shadow-xl rounded-full mt-6 sm:mt-0 sm:ml-4 lg:ml-0 xl:ml-12 transform transition duration-600 hover:scale-105"
                                >
                                    Lets Discuss!
                                </Button>
                            </div>
                            <p className="font-light p-5 sm:p-0 text-lg sm:text-xl lg:text-2xl xl:text-xl mb-1">Lets discuss it and make your dream software come true!</p>
                        </div>
                    </section>
                </RevealEffect>
            </motion.div>
        </div>
    );
};

export default Diskusi;
