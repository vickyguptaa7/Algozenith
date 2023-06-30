import { FaArrowRight } from "react-icons/fa";
import Wrapper from "./Wrapper";
import img1 from "../assets/algo-1.png";

const Header = () => {
  return (
    <header className="overflow-hidden bg-header-bg">
      <Wrapper className="flex flex-col items-center justify-between h-full mt-24 lg:my-16 lg:flex-row">
        <div className="flex flex-col items-center justify-center basis-1/2 lg:items-start">
          <h1 className="text-5xl font-bold text-center text-white font-rubik lg:text-left">
            Be better at DSA & CP
          </h1>
          <p className="font-light text-center text-white mt-7 lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            nisi quas consequatur illum laudantium autem.
          </p>
          <div className="flex flex-col-reverse gap-8 mt-6 lg:flex-col ">
            <div className="flex flex-col justify-center gap-5 sm:gap-8 sm:items-center sm:flex-row lg:justify-normal">
              <button className="bg-white font-semibold text-[color:var(--primary-text-color)] px-8 py-2.5 rounded-md mx-[1.5px] my-[1px] flex items-center gap-2 justify-center">
                Join Now <FaArrowRight />
              </button>
              <button className="text-white text-[color:var(--primary-text-color)] font-semibold rounded-md bg-gradient-to-r from-[#627e8a] via-[#3a6c80] to-[#065d81] flex items-center justify-center p-[1px]">
                <div className="bg-gradient-to-r px-8 py-2.5 from-[#033042] via-[#033e57] to-[#005C83] h-full w-full rounded-md">
                  View curriculum
                </div>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 sm:gap-8">
              <div className="flex items-center gap-3 text-white">
                <div className="bg-gradient-to-b from-[#CFF1FF] via-[#CFF1FF] to-[#2D5666] w-9 h-9 rounded-sm p-[1px]">
                  <div className="bg-[#032f40] w-full h-full aspect-square rounded-sm"></div>
                </div>
                <h3>Lorem ipsum dolor sit amet.</h3>
              </div>
              
              <div className="flex items-center gap-3 text-white">
                <div className="bg-gradient-to-b from-[#CFF1FF] via-[#CFF1FF] to-[#2D5666] w-9 h-9 rounded-sm p-[1px]">
                  <div className="bg-[#032f40] w-full h-full aspect-square rounded-sm"></div>
                </div>
                <h3>Lorem ipsum dolor sit amet.</h3>
              </div>
              
              <div className="flex items-center gap-3 text-white">
                <div className="bg-gradient-to-b from-[#CFF1FF] via-[#CFF1FF] to-[#2D5666] w-9 h-9 rounded-sm p-[1px]">
                  <div className="bg-[#032f40] w-full h-full aspect-square rounded-sm"></div>
                </div>
                <h3>Lorem ipsum dolor sit amet.</h3>
              </div>
              
              <div className="flex items-center gap-3 text-white">
                <div className="bg-gradient-to-b from-[#CFF1FF] via-[#CFF1FF] to-[#2D5666] w-9 h-9 rounded-sm p-[1px]">
                  <div className="bg-[#032f40] w-full h-full aspect-square rounded-sm"></div>
                </div>
                <h3>Lorem ipsum dolor sit amet.</h3>
              </div>
              
            </div>
          </div>
        </div>
        <div className=" sm:w-[450px] md:w-[500px] lg:mt-12 lg:basis-1/2">
          <img
            src={img1}
            className="object-bottom sm:scale-125 lg:scale-110"
            alt=""
          />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
