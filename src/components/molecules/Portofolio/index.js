import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { headingAnimation, sectionBodyAnimation } from "../../../hooks/useAnimation";
import Background from "../../../assets/images/background/download.jpeg";
import ProjectPortofolio from "../../../utils/Project";
import { Link } from "react-router-dom";
import RoundedBtn from "../../atoms/RoundedBtn";
import { FaAngleRight } from "react-icons/fa";
import "./style.css";

const Project = () => {
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
                    <img src={Background} alt="Background-portofolio" className="flex justify-center w-full" style={{ filter: "brightness(60%)" }} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: "100%" }}>
                        <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: viewDiv ? 1 : 0, y: viewDiv ? 0 : 50 }} transition={{ duration: 1 }}>
                            <h2 className="text-white text-6xl font-bold">Portofolio</h2>
                            <p className="text text-white text-lg mt-3">Deskripsi atau teks tambahan di atas gambar.</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <div className="pt-2 my-16 parent">
                <div>
                    <motion.div className="my-20" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                        {ProjectPortofolio?.map((project) => (
                            <div key={project.id} className={`${project.id % 2 === 0 ? "bg-white" : "bg-white"} rounded-lg my-3 p-6 duration-300`}>
                                <motion.div className="grid grid-cols-1 mt-8 md:grid-cols-2" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                                    <div className="ml-10">{project.image}</div>
                                    <div className="mr-3">
                                        <h2 className="mb-4 text-xl font-semibold">{project.title}</h2>
                                        <p className="text-accent">
                                            <span className="inline-block mb-4 text-justify text-gray-600 align-bottom">{project.description}</span>
                                        </p>
                                        <Link to="" className="ml-4">
                                            <RoundedBtn color="base">
                                                <span className="tex-button-mobile">kunjungi website</span>
                                                <span>
                                                    <FaAngleRight />
                                                </span>
                                            </RoundedBtn>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Project;
// satellite orbit comunity
// socsatellite@gmail.com
