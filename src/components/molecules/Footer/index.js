import React from "react";
import Logoo from "../../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import {ButtonWa} from "../../../components";

const Footer = () => {
    return (
        <div>
            <footer className="p-20 footer text-base-100" style={{ backgroundColor: "#e5e7eb" }}>
                <div>
                    <Link to="/">
                        <img src={Logoo} alt="SATELLITE ORBIT COMMUNITY" className="w-20 sm:w-46" />
                    </Link>
                    <h1 className="text-2xl font-bold text-black ">SATELLITE ORBIT COMMUNITY</h1>
                    <span className="text-accent">
                        jasa pembuatan website terbaik <br />
                        kami siap melayani permintaan anda #1
                    </span>

                    <div className="flex items-center mt-4">
                        <a target="blank" className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 rounded-lg duration-300">
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a target="blank" className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 rounded-lg duration-300">
                            <FaFacebookSquare></FaFacebookSquare>
                        </a>
                        <a target="blank" className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 rounded-lg duration-300">
                            <FaTwitterSquare></FaTwitterSquare>
                        </a>
                        <a target="blank" className="text-2xl text-accent hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 rounded-lg duration-300">
                            <FaInstagramSquare></FaInstagramSquare>
                        </a>
                    </div>
                </div>
                {/* Fokus & Layanan */}
                <div>
                    <span className="font-bold text-lg text-accent">Fokus & Layanan</span>
                    <Link to="/layanan" className="link link-hover hover:text-primary text-accent">
                        <span>Web E-Commerce</span>
                    </Link>
                    <Link to="/layanan" className="link link-hover hover:text-primary text-accent">
                        <span>Web Company Profile</span>
                    </Link>
                    <Link to="/layanan" className="link link-hover hover:text-primary text-accent">
                        <span>Web & Mobile Applications</span>
                    </Link>
                    <Link to="/layanan" className="link link-hover hover:text-primary text-accent">
                        <span>Branding & Content Creative</span>
                    </Link>
                    <Link to="/layanan" className="link link-hover hover:text-primary text-accent">
                        <span>Digital Marketing & Advertising</span>
                    </Link>
                </div>
                <div className="">
                    <span className="font-bold text-lg text-accent">Office</span>
                    <div className="flex items-center my-1">
                        <FaMapMarkedAlt className="mr-6 text-1xl text-accent"></FaMapMarkedAlt>
                        <h3 className="font-medium text-accent">Jalan menyusul</h3>
                    </div>
                    <div className="flex items-center my-1">
                        <FaPhoneAlt className="mr-6 text-1xl text-accent"></FaPhoneAlt>
                        <h3 className="font-medium text-accent">+62 812 5678 8858</h3>
                    </div>
                    <div className="flex items-center my-1">
                        <MdEmail className="mr-6 text-1xl text-accent"></MdEmail>
                        <h3 className="font-medium text-accent">socsatellite@gmail.com</h3>
                    </div>
                </div>
            </footer>
            <footer className="px-10 py-6 text-sm text-center text-base-100 border-base-300 bg-neutral ">
                <div className="w-full h-[2px] bg-gray-600"></div>
                <div className="flex flex-col items-center justify-center mt-6 md:flex-row text-accent">
                    <p>&copy; Copyright 2024, Satellite Orbit Community. All Rights Reserved</p>
                </div>
            </footer>
            {/* <ButtonWa /> */}
        </div>
    );
};

export default Footer;
