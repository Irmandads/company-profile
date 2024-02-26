import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { headingAnimation, sectionBodyAnimation } from "../../../hooks/useAnimation";
import ABack from "../../../assets/images/background/download.jpeg";
import DetailLayanan from "../../../utils/Layanan";
import { RevealEffect } from "react-reveal-effect";

const LayananKami = () => {
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
        <>
            <motion.div className="-mt-10 flex flex-col items-center" initial="hidden" animate={viewDiv && "visible"} variants={headingAnimation}>
                <div className="relative">
                    <img src={ABack} alt="Background" className="flex justify-center w-full" style={{ filter: "brightness(70%)" }} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: "100%" }}>
                        <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: viewDiv ? 1 : 0, y: viewDiv ? 0 : 50 }} transition={{ duration: 1 }}>
                            <h2 className="text-white text-6xl font-bold">Layanan Kami</h2>
                            <p className="text text-white text-lg mt-2">Solusi tercepat untuk anda yang membutuhkan aplikasi</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <div className="mt-12 py-16 parent">
                <motion.div className="mt-16" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {DetailLayanan.map((data, i) => (
                            <RevealEffect effect="fadeInUp" duration={500} delay={500 * i} key={data.id}>
                                <div className="bg-white group rounded-2xl shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105 flex flex-col items-center justify-center p-8">
                                    <div className="w-12 h-12 mb-2 text-blue-600 text-4xl">{data.icon}</div>
                                    <h2 className="text-theme-blue text-center text-xl">{data.title}</h2>
                                </div>
                            </RevealEffect>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default LayananKami;
