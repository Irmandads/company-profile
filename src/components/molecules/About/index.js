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
            <motion.div className="grid grid-cols-1 mt-8 md:grid-cols-auto-fill md:grid-cols-2 lg:grid-rows-1 gap-5" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                <div className="mr-5">
                    <img className="rounded-lg shadow-md w-full" src={AboutImage} alt="" />
                </div>
                <div className="">
                    <p className="font-semibold text-2xl mb-4">Membangun aplikasi anda lewat kami</p>
                    <p className="max-w-md font-normal text-accent text-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, ullam perspiciatis ipsum nobis iste voluptates vitae delectus amet odit modi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, nam! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Officia, minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, exercitationem?
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
