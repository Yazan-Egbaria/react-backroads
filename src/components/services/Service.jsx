import React from "react";

const Service = (props) => {
  return (
    <div className="flex gap-4">
      <div className="bg-secondaryColor w-[75px] h-[75px]"></div>

      <div className="flex flex-col">
        <h3 className="tracking-widest text-primaryColor text-base font-bold ">
          {props.serviceTitle}
        </h3>
        <p className="text-thirdColor w-80">{props.serviceDesc}</p>
      </div>
    </div>
  );
};

export default Service;
