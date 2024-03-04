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
            <motion.div className="mb-12 flex flex-col items-center" initial="hidden" animate={viewDiv && "visible"} variants={headingAnimation}>
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

            <div className="mt-20 py-16 parent">
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 mb-32 md:grid-cols-2 lg:grid-cols-4 h-40 gap-8" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                    {DetailLayanan.map((data, i) => (
                        <motion.div
                            key={data.id}
                            className="bg-white group relative rounded-2xl h-72 shadow-2xl border border-light-theme-purple transform transition duration-500 hover:scale-105 flex flex-col items-center justify-center p-8"
                            initial="hidden"
                            animate={viewDiv && "visible"}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: i * 1,
                                    },
                                },
                            }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="flex items-center mb-2">
                                <div className="w-12 h-12 mr-2 text-blue-600 text-4xl">{data.icon}</div>
                                <h2 className="text-theme-blue text-xl text-primary font-bold">{data.title}</h2>
                            </div>

                            <div className="text-gray-500 text-center mt-3">{data.description}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default LayananKami;
