import "./css/style.css";

const FarmCard = ({ heading, number, para, color1,color2 }) => {

  return (
    <div className={`wrapper-div-110 relative m-auto p-[0px] box-border`}>
      <div
        className={` max-w-[288px] bg-gradient-to-tl from-[${color1}] to-[${color2}] w-full box-border min-h-[284px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start gap-[12px] p-[40px_40px_40px__40px] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] shadow-[6px_6px_19px_0px_rgba(0,0,0,0.11999999731779099),24px_24px_34px_0px_rgba(0,0,0,0.10000000149011612),54px_54px_46px_0px_rgba(0,0,0,0.05999999865889549),97px_97px_55px_0px_rgba(0,0,0,0.019999999552965164),151px_151px_60px_0px_rgba(0,0,0,0)]  gradient-0 `}
      >
        <section className=" max-w-[208px] w-full box-border min-h-[112px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[4px] p-[0px_0px_0px__0px]  ">
          <div className=" max-w-[208px] w-full box-border min-h-[24px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]  ">
            <span className="our-partners-112-0 ">{heading}</span>
          </div>
          <div className=" max-w-[208px] w-full box-border min-h-[84px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] [text-shadow:3px_3px_0px_rgba(0,0,0,0.25)]  ">
            <span className="c-123-113-0 ">{number}</span>
          </div>
        </section>
        <div className=" max-w-[208px] w-full box-border h-[80px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]  ">
          <span className="accusamus-dolor-114-0 ">{para}</span>
        </div>
      </div>
    </div>
  );
};
export default FarmCard;
