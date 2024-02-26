import React from "react";
import { Banner, Service, Diskusi, OurService } from "../../components";
import About from "../../components/molecules/About";

const Home = () => {
    return (
        <div className="pt-16">
            <Banner />
            <About />
            <OurService />
            <Service />
            {/* <Informasi /> */}
            <Diskusi />
        </div>
    );
};

export default Home;
