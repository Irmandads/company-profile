import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { headingAnimation, sectionBodyAnimation } from "../../../hooks/useAnimation";
import PilihKami from "../../../utils/PilihKami";

const Alasan = () => {
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
            <div className="py-20 parent bg-white">
                <motion.div className="mb-10" inital="hidden" animate={viewDiv && "visible"} variants={headingAnimation}>
                    <h1 className="text-4xl font-bold text-primary">Mengapa harus memilih kami?</h1>
                </motion.div>

                <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                    {PilihKami.map((data, i) => (
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
                            whileHover={{ scale: 1.10 }}
                        >
                            <div className="mb-4 text-center">
                                <span className="inline-block text-5xl text-primary">{data.icon}</span>
                            </div>
                            <h2 className="mb-4 text-2xl font-semibold text-center">{data.title}</h2>
                            <p className="text-accent">
                                <span className="inline-block mb-4 text-justify text-gray-600 align-bottom">{data.description}</span>
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="flex flex-col sm:flex-row">
                    <div className="flex-col"></div>
                </div>
            </div>
        </>
    );
};

export default Alasan;
