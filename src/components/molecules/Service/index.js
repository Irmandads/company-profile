import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Services from "../../../utils/Services";
import { headingAnimation, sectionBodyAnimation } from "../../../hooks/useAnimation";
// import { FaAngleRight } from "react-icons/fa";
// import { BottomLine } from "../../../components";

const Service = () => {
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
        <div className="py-20 parent bg-white">
            <motion.div className="mb-12" initial="hidden" animate={viewDiv && "visible"} variants={headingAnimation}>
                <h1 className="text-4xl font-semibold text-center">
                    Solusi <span className="text-primary">Digital & Kreatif</span>
                </h1>
                {/* <BottomLine /> */}
                <h2 className="py-6 text-center text-accent">
                    Kami fokus memberikan solusi holistik bagi bisnis Anda dalam membangun brand Anda secara Efektif & Konsisten melalui berbagai saluran Digital. Kami akan membantu Anda dalam mengembangkan bisnis sehingga tercapai tujuan
                    Perusahaan Anda dengan lebih Efektif.
                </h2>
            </motion.div>

            <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                {Services?.map((service) => (
                    <div key={service.id} className={`${service.id % 2 === 0 ? "bg-white shadow-lg" : "bg-white shadow-lg"} rounded-lg p-6 duration-300`}>
                        <div className="mb-4 text-center">
                            <span className="inline-block text-5xl text-primary">{service.icon}</span>
                        </div>
                        <h2 className="mb-4 text-2xl font-semibold text-center">{service.title}</h2>
                        <p className="text-accent">
                            <span className="inline-block mb-4 text-justify text-gray-600 align-bottom">{service.description}</span>
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Service;
