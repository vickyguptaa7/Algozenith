import { FaArrowRight } from "react-icons/fa";
import { BENEFITS, HIGHLIGHTS } from "../../Contant/Details";

import Wrapper from "../Wrapper";

import algozenith_logo from "../../assets/algo-2.png";
import mesh_image from "../../assets/mesh.png";

import "./pricing.styles.css";

const Pricing = () => {
  return (
    <Wrapper className="my-24">
      <section className="flex flex-col items-center justify-between gap-16 lg:gap-8 lg:flex-row">
        {/* Course Information */}
        <div className="flex flex-col items-center justify-center basis-1/2 lg:justify-start ">
          <h1 className="text-5xl font-bold text-center font-rubik lg:text-left">
            Invest in skills,
            <span className="text-4xl font-bold font-rubik text-[color:var(--primary-color)]">
              &nbsp;earn 10X
            </span>{" "}
            of what you paid.
          </h1>
          <p className="mt-10 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            exercitationem ea laboriosam porro cupiditate culpa nam
            consequuntur, facilis asperiores atque sequi alias? Delectus modi
            perferendis exercitationem officia et sequi aperiam suscipit minima.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-12 xs:mt-16 xs:grid-cols-2">
            {HIGHLIGHTS.map((highlight) => {
              return (
                <div key={highlight.id} className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-md aspect-square"></div>
                  <div>
                    <h3 className="text-xl font-bold">{highlight.title}</h3>
                    <h5>{highlight.subtitle}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Details Card */}
        <div className="flex flex-col overflow-hidden bg-white shadow-lg rounded-xl shadow-gray-400 lg:w-[28rem]">
          <div className="flex justify-between w-full h-full overflow-hidden bg-white card-border-grad">
            <div className="flex flex-col m-6">
              <h6 className="text-md">Premium Victory Batch</h6>
              <h1 className="text-5xl font-bold font-rubik text-[#818181] line-through mt-4 ">
                19,999
              </h1>
              <h1 className="text-6xl font-bold text-transparent font-rubik bg-clip-text bg-gradient-to-r from-[#3F6FC1] to-[#05445E] mt-3">
                13,999
              </h1>
            </div>
            <div className="flex items-end justify-end ">
              <img
                src={algozenith_logo}
                className="w-52 h-52 aspect-square"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 p-8 border-b-[1px] border-l-[1px] border-r-[1px] border-white bg-gradient-to-b from-[#05445E] to-[#002F42] rounded-b-xl ">
            <div
              className="flex flex-col gap-4 text-white"
              style={{
                backgroundImage: `url(${mesh_image})`,
              }}
            >
              {BENEFITS.map((benefit) => {
                return (
                  <div className="flex items-center gap-4" key={benefit.id}>
                    <div className="w-16 h-16 rounded-md aspect-square border-grad"></div>
                    <h3 className="">{benefit.title}</h3>
                  </div>
                );
              })}
            </div>
            <button className="bg-white font-semibold text-[color:var(--primary-text-color)] px-8 py-2.5 rounded-md mx-[1.5px] my-[1px] flex items-center gap-2 justify-center shadow-xl shadow-[#214c72] hover:scale-105 active:scale-95 duration-1000 hover:duration-300 active:duration-300">
              Join Now <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Pricing;
