import { FaArrowRight } from "react-icons/fa";
import { OUTCOMES } from "../../Contant/Details";

import Wrapper from "../Wrapper";

import topic_image from "../../assets/algo-1.png";
import header_bg from "../../assets/header-bg.png";

import "./header.styles.css";

const Header = () => {
  return (
    <header
      className="overflow-hidden"
      style={{
        backgroundImage: `url(${header_bg})`,
      }}
    >
      <Wrapper className="flex flex-col items-center justify-between h-full mt-24 lg:my-16 lg:flex-row">
        {/* Information */}
        <div className="flex flex-col items-center justify-center basis-1/2 lg:items-start">
          <h1 className="text-5xl font-bold text-center text-white font-rubik lg:text-left">
            Be better at DSA & CP
          </h1>
          <p className="font-light text-center text-white mt-7 lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            nisi quas consequatur illum laudantium autem.
          </p>
          <div className="flex flex-col-reverse w-full gap-8 mt-6 lg:flex-col ">
            <div className="flex flex-col justify-center gap-5 sm:gap-8 sm:items-center sm:flex-row lg:justify-normal">
              <button className="bg-white font-semibold text-[color:var(--primary-text-color)] px-8 py-2.5 rounded-md mx-[1.5px] my-[1px] flex items-center gap-2 justify-center hover:scale-110 active:scale-95 duration-1000 hover:duration-300 active:duration-300">
                Join Now <FaArrowRight />
              </button>
              <button className="text-white text-[color:var(--primary-text-color)] font-semibold rounded-md bg-gradient-to-r from-[#627e8a] via-[#3a6c80] to-[#065d81] flex items-center justify-center p-[1px] hover:scale-110 active:scale-95 duration-1000 hover:duration-300 active:duration-300">
                <div className="bg-gradient-to-r px-8 py-2.5 from-[#033042] via-[#033e57] to-[#005C83] h-full w-full rounded-md">
                  View curriculum
                </div>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 sm:gap-8 place-items-center">
              {OUTCOMES.map((outcome) => {
                return (
                  <div
                    className="flex items-center gap-3 text-white"
                    key={outcome.id}
                  >
                    <div className="w-12 h-12 rounded-md aspect-square border-grad"></div>
                    <h3>{outcome.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Algo-Zenith Image */}
        <div className=" sm:w-[450px] md:w-[500px] lg:mt-12 lg:basis-1/2">
          <img
            src={topic_image}
            className="object-bottom sm:scale-125 lg:scale-110"
            alt=""
          />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
