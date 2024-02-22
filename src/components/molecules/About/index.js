import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { headingAnimation, sectionBodyAnimation } from "../../../hooks/useAnimation";
import { Link } from "react-router-dom";
// import { SecondaryBtn } from "../../atoms";
import { FaAngleRight } from "react-icons/fa";
import AboutImage from "../../../assets/images/about-company.jpeg";
import RoundedBtn from "../../atoms/RoundedBtn";

const About = () => {
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
                <h1 className="text-4xl font-bold text-center">
                    About <span className="text-primary">Perusahaan</span>
                </h1>
            </motion.div>

            <motion.div className="grid grid-cols-1 gap-20 mt-8 md:grid-cols-2" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                <div>
                    <img className="rounded-lg shadow-md" src={AboutImage} alt="" style={{ width: "500px", height: "auto" }} />
                </div>
                <div className="">
                    <p className="max-w-md font-medium text-accent text-xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, ullam perspiciatis ipsum nobis iste voluptates vitae delectus amet odit modi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nam! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Officia, minima!
                    </p>
                    <Link to="/tentang" className="ml-4">
                        <RoundedBtn color="base">
                            <span className="tex-button-mobile">baca selengkapnya</span>
                            <span>
                                <FaAngleRight />
                            </span>
                        </RoundedBtn>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
