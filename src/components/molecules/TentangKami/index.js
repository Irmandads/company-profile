import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
// import { BottomLine } from "../../../components";
import { useInView } from "react-intersection-observer";
import { headingAnimation, sectionBodyAnimation } from "../../../hooks/useAnimation";
import ABack from "../../../assets/images/background/download.jpeg";

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
        <div className="pt-2 my-16 parent">
            <div className="">
                <motion.div className="mb-12 flex flex-col items-center" initial="hidden" animate={viewDiv && "visible"} variants={headingAnimation}>
                    <div className="relative">
                        <img src={ABack} alt="Background" className="flex justify-center w-full rounded-lg" style={{ filter: "brightness(70%)" }} />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ width: "100%" }}>
                            <motion.div className="text-center" initial={{ opacity: 0, y: 50 }} animate={{ opacity: viewDiv ? 1 : 0, y: viewDiv ? 0 : 50 }} transition={{ duration: 1 }}>
                                <h2 className="text-white text-4xl font-bold">Tentang Kami</h2>
                                <p className="text text-white text-lg mt-2">Solusi tercepat untuk anda yang membutuhkan aplikasi</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="mt-35" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                    <h1 className="text-4xl mt-10 mb-7 font-semibold drop-shadow-md">
                        Tentang <span className="text-primary">Kami</span>
                    </h1>
                    <p className="font-medium text-accent">
                        PT. MULIA SEJATI NUSANTARA Berdiri Pada Tanggal 24 Juni 2019 Sebuah Perseroan Terbatas yang bergerak di bidang jasa Suplier & Contractor. Kemudian pada 22 January 2022 PT. MULIA SEJATI NUSANTARA Membuka cabang usaha
                        Baru di Bidang Teknologi yang meliputi Pembuatan Website, Apilkasi Mobile, Branding, Content Creative, Digital Marketing & Advertising. Cabang ini di namakan “Mulia Sejati Nusantara Production" atau di singkat MSN
                        PRODUCTION.
                    </p>
                    <br />
                    <p className="font-medium text-accent">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur mollitia, placeat consequuntur vitae dolorum repellat accusamus fugit alias illo, repellendus, ducimus debitis. Minima voluptatibus, veniam
                        consectetur minus ut, expedita excepturi odit placeat beatae id praesentium et quas. Voluptatem recusandae cupiditate vitae quas. Dolores porro non in saepe, nisi sit accusantium dolore consectetur sapiente, corrupti
                        recusandae facilis numquam voluptatem, necessitatibus dicta. Vero culpa voluptatibus excepturi necessitatibus debitis ipsa in nemo suscipit omnis! Tempore ea qui a? Vitae, molestias quos!
                    </p>
                    <br />
                    <p className="font-medium text-accent">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur mollitia, placeat consequuntur vitae dolorum repellat accusamus fugit alias illo, repellendus, ducimus debitis. Minima voluptatibus, veniam
                        consectetur minus ut, expedita excepturi odit placeat beatae id praesentium et quas. Voluptatem recusandae cupiditate vitae quas. Dolores porro non in saepe, nisi sit accusantium dolore consectetur sapiente, corrupti
                        recusandae facilis numquam voluptatem, necessitatibus dicta. Vero culpa voluptatibus excepturi necessitatibus debitis ipsa in nemo suscipit omnis! Tempore ea qui a? Vitae, molestias quos!
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Tentang;
