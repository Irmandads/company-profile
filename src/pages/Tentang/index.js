import React from "react";
import { Diskusi, TentangKami } from "../../components";
import Alasan from "../../components/molecules/Alasan";

const Tentang = () => {
  return (
    <div className="pt-16">
      <TentangKami />
      {/* <VisiMisi /> */}
      {/* <Tim /> */}
      <Alasan />
      <Diskusi />
    </div>
  );
};

export default Tentang;
