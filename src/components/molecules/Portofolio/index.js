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

    const renderProject = (project, index) => {
        const isEven = index % 2 === 0;

        return (
            <motion.div key={project.id} className="bg-white rounded-lg p-6 duration-300" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                <motion.div
                    className={`flex flex-wrap ${isEven ? "" : "lg:flex-row-reverse"}`}
                    initial="hidden"
                    animate={viewDiv && "visible"}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: index * 1 },
                        },
                    }}
                >
                    <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
                        <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
                            <img src={project.image} className="w-full h-full object-cover" alt={`Project ${project.id}`} />
                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </div>
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
                        <h2 className="mb-4 text-2xl font-bold text-primary">{project.title}</h2>
                        <p className="mb-6 text-gray-500 dark:text-neutral-300">{project.description}</p>
                        <Link to="" className="inline-block">
                            <RoundedBtn color="base">
                                <span className="tex-button-mobile">kunjungi website</span>
                                <span>
                                    <FaAngleRight />
                                </span>
                            </RoundedBtn>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <>
            <motion.div className="mb-12 flex flex-col items-center" initial="hidden" animate={viewDiv && "visible"} variants={headingAnimation}>
                <div className="relative">
                    <img src={Background} alt="Background-portofolio" className="flex justify-center w-full" style={{ filter: "brightness(60%)" }} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: "100%" }}>
                        <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: viewDiv ? 1 : 0, y: viewDiv ? 0 : 50 }} transition={{ duration: 1 }}>
                            <h2 className="text-white text-6xl font-bold">Portofolio</h2>
                            <p className="text text-white text-lg mt-3">Solusi untuk anda yang membutuhkan bantuan kami</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <div className="pt-2 my-10 py-20 parent">
                <motion.div className="container my-24 mx-auto md:px-6" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                    {ProjectPortofolio?.map((project, index) => renderProject(project, index))}
                </motion.div>
            </div>
        </>
    );
};

export default Project;
// satellite orbit comunity
// socsatellite@gmail.com
// Solusi untuk anda yang membutuhkan bantuan kami
