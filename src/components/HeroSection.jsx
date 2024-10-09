import Section1 from "./HeroComponents/Section1";
import Section2 from "./HeroComponents/Section2";
import Section3 from "./HeroComponents/Section3";

const HeroSection = () => {
  return (
    <div className=" w-full py-[10px] flex flex-col gap-[20px]">
      <div className="flex flex-row w-full">
        <div className="w-[50%] px-[25px] 600px:px-[40px] 1000px:w-[25%] flex-grow  flex ">
          <Section1 />
        </div>
        <div className="w-[50%] px-[25px] 600px:px-[40px] border-x-[1px] flex-grow border-[#C9C9C9] hidden 1000px:block pt-[261px]">
          <Section2 />
        </div>
        <div className="w-[50%] px-[25px] 600px:px-[40px] 1000px:w-[25%] flex-grow 1000px:pt-[465px] pt-[62px] hidden 600px:block 1000px:pb-[155px]">
          <Section3 />
        </div>
      </div>
      <div className="w-full px-[25px] block 1000px:hidden">
        <Section2 />
      </div>
    </div>
  );
};

export default HeroSection;
