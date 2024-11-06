import React from "react";
import Navlink from "../navbar/Navlink";

const Footer = () => {
  return (
    <div className="bg-gray-100 flexColSection">
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <Navlink linkTitle="Home" />
          <Navlink linkTitle="About" />
          <Navlink linkTitle="Services" />
          <Navlink linkTitle="Tools" />
        </ul>
      </nav>

      <p className="text-primaryColor">
        Copyright © Backroads travel tours company 2024 all rights reserved
      </p>
    </div>
  );
};

export default Footer;
