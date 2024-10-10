import React from "react";
import PCImg from "../assets/pc.png";
import HumanImg from "../assets/human.png";

const Story = () => {
  return (
    <div className="w-full bg-[black] flex flex-row text-[white]">
      <div className=" hidden 1000px:block w-[25%] pt-[421px] px-[25px] 1000px:px-[40px]">
        <img src={PCImg} alt="pc-image" className="w-[100%]" />
      </div>
      <div className="w-[100%] 1000px:w-[50%] flex flex-col gap-[49px] h-full px-[25px] 1000px:px-[40px] pt-[163px]">
        <span className=" text-[40px] 600px:text-[48px] text-[#00AD48] leading-[40px] 600px:leading-[48px]">
          Lorem ipsum dolor sit amet consectetur. Viverra amet nunc et
          ultricies. Ac nunc faucibus morb
        </span>
        <div className="  flex-col w-full text-[20px] flex 600px:flex-row gap-[80px] leading-[20px]">
          <div className=" w-full 600px:w-[50%] gap-[48px] flex flex-col">
            <img
              src={PCImg}
              alt="pc-image"
              className="w-[100%] 1000px:hidden"
            />
            <div>
              Mi eleifend iaculis viverra sed. Facilisis ut vitae amet
              pellentesque ligula commodo met . Pretium amet pharetra malesuada
              id placerat nisl amet malesuada ultrices. Sit consectetur ultrices
              nunc egestas. Viverra ac ut pulvinar sapien aliquet. Lorem est sed
              suscipit morbi donec sem integer et quis. Suscipit ac vitae leo
              luctus in odio malesuada donec ac. Turpis turpis proin volutpat
              bibendum a a. Lectus pharetra.
            </div>
          </div>
          <div className=" w-full 600px:w-[50%] gap-[48px] flex flex-col">
            <img
              src={HumanImg}
              alt="pc-image"
              className="w-full 1000px:hidden"
            />
            <span>
              Sit consectetur ultrices nunc egestas. Viverra ac ut pulvinar
              sapien aliquet. Lorem est sed suscipit morbi donec sem integer et
              Mi eleifend iaculis viverra sed. Facilisis ut vitae amet
              pellentesque ligula commodo met . Pretium amet pharetra malesuada
              id placerat nisl amet malesuada ultrices. Sit consectetur.
            </span>
          </div>
        </div>
      </div>
      <div className=" hidden 1000px:block relative w-[25%] h-full px-[25px] 1000px:px-[40px] pt-[164px] pb-[330px]">
        <img src={HumanImg} alt="pc-image" className="w-full" />
        <div className=" flex flex-row items-center gap-[16px] absolute top-[80px] right-0 w-[146px] h-[19px]">
          <span className="16px">OUR STORY</span>
          <div className="bg-[white] w-[40px] h-[1px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Story;
