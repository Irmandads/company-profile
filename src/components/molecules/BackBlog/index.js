import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ABack from "../../../assets/images/background/download.jpeg";
import { headingAnimation } from "../../../hooks/useAnimation";

const NavBlog = () => {
    const [inView] = useInView();
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
        <motion.div className="flex flex-col items-center" initial="hidden" animate={viewDiv && "visible"} variants={headingAnimation}>
            <div className="relative">
                <img src={ABack} alt="Background" className="flex justify-center w-full" style={{ filter: "brightness(70%)" }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: "100%" }}>
                    <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: viewDiv ? 1 : 0, y: viewDiv ? 0 : 50 }} transition={{ duration: 1 }}>
                        <h2 className="text-white text-6xl font-bold">Informasi Terbaru</h2>
                        <p className="text text-white text-lg mt-2">Solusi tercepat untuk anda yang membutuhkan aplikasi</p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default NavBlog;
