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
                    <h1 className="text-4xl font-semibold text-center text-primary">Mengapa harus memilih kami?</h1>
                </motion.div>

                <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                    {PilihKami?.map((pilih) => (
                        <div key={pilih.id} className={`${pilih.id % 2 === 0 ? "bg-slate-100 shadow-lg" : "bg-slate-100 shadow-lg"} rounded-lg p-6 duration-300`}>
                            <div className="mb-4 text-center">
                                <span className="inline-block text-5xl text-primary">{pilih.icon}</span>
                            </div>
                            <h2 className="mb-4 text-2xl font-semibold text-center">{pilih.title}</h2>
                            <p className="text-accent">
                                <span className="inline-block mb-4 text-justify text-gray-600 align-bottom">{pilih.description}</span>
                            </p>
                        </div>
                    ))}
                </motion.div>

                <div className="flex flex-col sm:flex-row">
                    <div className="flex-col">

                    </div>
                </div>
            </div>
        </>
    );
};

export default Alasan;
