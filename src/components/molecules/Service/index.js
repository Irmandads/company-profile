import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import Services from "../../../utils/Services";
import { sectionBodyAnimation } from "../../../hooks/useAnimation";
import ProjectPortofolio from "../../../utils/Project";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

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
        <>
            <div className="py-20 parent bg-white">
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                    <div className="text-4xl md:text-7xl font-bold text-primary">Portofolio Kami</div>
                    <div className="md:mr-16">
                        <p className="font-medium text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, aspernatur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, dolorum reprehenderit? Consequatur.
                        </p>
                        <Link to="/portofolio" className="italic flex items-center mt-3 text-gray-500">
                            <span>learn more</span>
                            <FaArrowRight className="ml-1" />
                        </Link>
                    </div>
                </motion.div>

                <motion.div className="mt-9 grid grid-cols-1 sm:grid-cols-1 mb-3 md:grid-cols-3 gap-4" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                    {ProjectPortofolio.slice(0, 3).map((data, i) => (
                        <motion.div key={data.id} whileHover={{ scale: 1.05 }}>
                            <img src={data.image} alt={data.title}  className="rounded-lg"/>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default Service;
