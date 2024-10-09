import React from "react";
import Section3 from "./Section3";

const Section1 = () => {
  return (
    <div className="w-full flex @container flex-grow flex-col gap-[32px] 600px:gap-[48px] pt-[62px] 1000px:pt-[250px]">
      <span className="text-[10cqw] leading-[10cqw] 1000px:text-[18cqw] 1000px:leading-[18cqw]">
        Lorem ipsum dolor sit amet consectet
      </span>
      <div className="w-full block 600px:hidden">
        <Section3 />
      </div>
      <span className=" text-[16px] 1000px:text-[20px] leading-[16px] 1000px:leading-[20px]">
        <p>
          Lorem ipsum dolor sit amet consectetur. Et ornare egestas mi eleifend
          iaculis viverra sed. Facilisis ut vitae amet pellentesque ligula
          commodo. Dui non nunc et ultricies. Ac nunc faucibus morbi pulvinar
          praesent quisque nullam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Et ornare egestas mi eleifend
          iaculis viverra sed. Facilisis ut vitae amet pellentesque ligula
          commodo. Dui non nunc et ultricies. Ac nunc faucibus morbi pulvinar
          praesent quisque nullam.
        </p>
      </span>
    </div>
  );
};

export default Section1;
