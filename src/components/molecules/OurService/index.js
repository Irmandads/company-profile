import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { sectionBodyAnimation } from "../../../hooks/useAnimation";
import DetailLayanan from "../../../utils/Layanan";
import { Link } from "react-router-dom";
import RoundedBtn from "../../atoms/RoundedBtn";
import { FaCaretRight } from "react-icons/fa";

const OurService = () => {
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
        <div className="py-20 my-20 parent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div className="grid grid-rows-2 grid-flow-col gap-4 mr-4" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                    {DetailLayanan.slice(0, 4).map((data, i) => (
                        <div key={data.id} className="flex flex-col items-center mb-4">
                            <div className="text-blue-400 text-5xl">{data.icon}</div>
                            <div className="font-medium">{data.title}</div>
                        </div>
                    ))}
                </motion.div>
                <motion.div ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                    <div className="font-bold text-5xl">Layanan Kami</div>
                    <div className="mt-5 mr-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptatem impedit exercitationem nostrum voluptatibus, nihil quia itaque praesentium veritatis cum?</div>
                    <div>
                        <Link to="/layanan" className="flex items-center mt-5">
                            <RoundedBtn color="base">
                                <span>layanan</span>
                                <FaCaretRight />
                            </RoundedBtn>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default OurService;
