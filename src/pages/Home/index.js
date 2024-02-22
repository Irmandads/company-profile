import React from "react";
import { Banner, Service, Informasi } from "../../components";
// import Paket from "../Paket";
import Kontak from "../Kontak";
import About from "../../components/molecules/About";

const Home = () => {
    return (
        <div className="pt-16">
            <Banner />
            <About />
            <Service />
            {/* <Paket /> */}
            {/* <Testimonial /> */}
            <Informasi />
            <Kontak />
        </div>
    );
};

export default Home;
