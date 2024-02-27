import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
// import { BottomLine } from "../../../components";
import { useInView } from "react-intersection-observer";
import { headingAnimation, sectionBodyAnimation } from "../../../hooks/useAnimation";
import ABack from "../../../assets/images/background/download.jpeg";
import AboutImg from "../../../assets/images/about-company.jpeg";

const Tentang = () => {
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
                            <h2 className="text-white text-6xl font-bold">Tentang Kami</h2>
                            <p className="text text-white text-lg mt-2">Solusi tercepat untuk anda yang membutuhkan aplikasi</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <div className="my-16 parent">
                {/* bagian ke-2 */}
                <motion.div className="flex mt-10" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                    <div className="w-2/5">
                        <img className="rounded-lg" src={AboutImg} alt="" />
                    </div>
                    <div className="w-3/5 ml-9">
                        <div className="font-bold text-4xl text-primary">Solusi untuk anda</div>
                        <div className="font-semibold text-gray-500 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facilis nostrum velit omnis animi ipsa temporibus culpa laborum mollitia excepturi? Molestiae deserunt ad aliquid eum architecto molestias voluptatibus
                            debitis ratione. <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, architecto! Optio atque dolore saepe accusamus consectetur rerum? Fugiat sit perspiciatis consequatur animi repudiandae
                            repellendus harum? Molestiae aspernatur officiis debitis similique!
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Tentang;
