import React from "react";
import { FaAngleRight, FaHandshake, FaInfo, FaLaptopHouse, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../../pages/shared/Shared.css";
import BannerImg from "../../../assets/images/foto/banner.jpeg";
import "./style.css";

const Banner = () => {
    return (
        <>
            <motion.div
                className="site-hero overlay"
                style={{ backgroundImage: `url(${BannerImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
                data-stellar-background-ratio="0.5"
                id="section-home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
                    <div className="col-md-6" data-aos="fade-up">
                        <h1 className="mb-4 text-4xl lg:text-6xl font-bold text-white">YOUR COMPANY</h1>
                        <p className="max-w-md lg:max-w-lg mb-10 font-medium text-white">
                            Satellite Orbit Community adalah perusahaan yang menyediakan layanan jasa pembuatan Website, Aplikasi Mobile, Branding & Konten Kreatif untuk anda yang ingin membangun sebuah perusahaan.
                        </p>
                        <div className="flex items-center mb-20">
                            <a href="https://wa.me/6281256788858" target="_blank" className="button-link">
                                <button className="primary-button">
                                    <span className="text-button-mobile">Konsultasi Gratis</span>
                                    <span>
                                        <FaAngleRight />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <div className="-mt-20 flex justify-center items-center">
                <div className="flex flex-wrap">
                    <div className="bg-white rounded-lg p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-2 grid grid-cols-1 gap-4 items-center">
                            <div className="text-gray-600 flex flex-col items-center">
                                <div className="w-12 h-12 mb-2 text-blue-600">
                                    <FaReact size={50} />
                                </div>
                                <div className="text-xl lg:text-2xl font-medium text-center mt-2">
                                    Software <br /> Development
                                </div>
                            </div>
                        </div>

                        <div className="p-2 grid grid-cols-1 gap-4 items-center">
                            <div className="text-gray-600 flex flex-col items-center">
                                <div className="w-12 h-12 mb-2 text-blue-600">
                                    <FaLaptopHouse size={50} />
                                </div>
                                <div className="text-xl lg:text-2xl font-medium text-center">Start Up</div>
                            </div>
                        </div>

                        <div className="p-2 grid grid-cols-1 gap-4 items-center">
                            <div className="text-gray-600 flex flex-col items-center">
                                <div className="w-12 h-12 mb-2 text-blue-600">
                                    <FaHandshake size={50} />
                                </div>
                                <div className="text-xl lg:text-2xl font-medium text-center">Partner</div>
                            </div>
                        </div>

                        <div className="p-2 grid grid-cols-1 gap-4 items-center">
                            <div className="text-gray-600 flex flex-col items-center">
                                <div className="w-12 h-12 mb-2 text-blue-600">
                                    <FaInfo size={50} />
                                </div>
                                <div className="text-xl lg:text-2xl font-medium text-center">Sistem Informasi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
