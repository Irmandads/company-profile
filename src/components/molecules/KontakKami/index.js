import React, { useEffect, useRef, useState } from "react";
import "../../../pages/Kontak/Kontak.css";
import "../../../pages/shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import { FaClock, FaPhoneAlt, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { headingAnimation, kontakAnimation, sectionBodyAnimation } from "../../../hooks/useAnimation";
import Map from "../Map";

const KontakKami = () => {
    const navigate = useNavigate();
    const form = useRef();
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
    const [viewDiv, setViewDiv] = useState(false);
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            setViewDiv(true);
        } else {
            setViewDiv(false);
        }
    }, [inView, animation]);

    const handleSend = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_6xnj05v", "template_exk29f8", form.current, "kLfLk-o6LKj-L9c77").then(
            (result) => {
                console.log(result.text);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Message has been sent",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/");
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
    };

    return (
        <>
            <div className="mb-12 py-16 parent">
                <motion.div className="" initial="hidden" animate={viewDiv && "visible"} variants={headingAnimation}>
                    <h1 className="text-5xl font-bold text-center">Hubungi Kami</h1>
                </motion.div>

                <motion.div className="container mt-16 px-4 md:px-0 md:px-20">
                    <div className="flex flex-col md:flex-row w-full">
                        <motion.div className="w-full md:w-1/3 mb-8 md:mr-7" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                            <div className="card w-full bg-base-100 shadow-xl">
                                <div className="card-body items-center text-center">
                                    <div className="flex flex-col items-center my-4">
                                        <div className="text-4xl text-blue-700 mb-1">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div className="font-medium text-gray-500">jalan menyusul</div>
                                    </div>
                                    <div className="flex flex-col items-center my-4">
                                        <div className="text-4xl text-blue-700 mb-1">
                                            <FaPhoneAlt />
                                        </div>
                                        <div className="font-medium text-primary text-2xl">Phone</div>
                                        <div className="font-medium text-gray-500">+62 812 5678 8858</div>
                                    </div>
                                    <div className="flex flex-col items-center my-4">
                                        <div className="text-4xl text-blue-700 mb-1">
                                            <MdEmail />
                                        </div>
                                        <div className="font-medium text-primary text-2xl">Email</div>
                                        <div className="font-medium text-gray-500">socsatellite@gmail.com</div>
                                    </div>
                                    <div className="flex flex-col items-center my-4">
                                        <div className="text-4xl text-blue-700 mb-1">
                                            <FaClock />
                                        </div>
                                        <div className="font-semibold text-primary text-2xl">Jam Operasi</div>
                                        <div className="font-medium text-gray-500">Senin – Jum'at, 09:00 – 17:00</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="w-full md:w-2/3 ml-0 md:ml-4" ref={ref} initial="hidden" animate={viewDiv && "visible"} variants={sectionBodyAnimation}>
                            <div className="font-bold text-2xl mb-3">Send us a message</div>
                            <div className="text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima nemo ratione possimus, explicabo quas tempore laudantium, debitis eaque accusamus nihil distinctio, eligendi quis repudiandae?
                            </div>
                            <form ref={form} onSubmit={handleSend}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4">
                                    <div>
                                        <input type="text" placeholder="name" name="name" id="name" className="input input-bordered w-full sm:max-w-xs" required />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="email" name="email" id="email" className="input input-bordered w-full sm:max-w-xs" required />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <input type="text" placeholder="subject" name="subject" id="subject" className="input input-bordered w-full" required />
                                </div>
                                <div className="mt-4">
                                    <textarea className="textarea textarea-bordered w-full" placeholder="your message" name="message" id="message" cols="30" rows="5" required></textarea>
                                </div>
                                <div>
                                    <button type="submit" value="Send Message" className="button btn btn-primary w-full mt-4">
                                        <span className="mr-2 text-white font-semibold">Kirim</span>
                                        <span className="text-white font-semibold">
                                            <MdSend />
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="mt-9">
                    <Map />
                </div>
            </div>
        </>
    );
};

export default KontakKami;
