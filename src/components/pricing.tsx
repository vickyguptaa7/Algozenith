import { FaArrowRight } from "react-icons/fa";
import img2 from "../assets/algo-2.png";
import Wrapper from "./Wrapper";

const POINTS = [
  {
    id: 1,
    title: "1.2 Cr/Yr",
    subtitle: "highest fresher package",
  },
  {
    id: 2,
    title: "Multiple <100 Ranks",
    subtitle: "in kickstart last year",
  },
  {
    id: 3,
    title: "1000+ Offers",
    subtitle: "from top companies",
  },
  {
    id: 4,
    title: "Trusted by IITians",
    subtitle: "for their career prep",
  },
];

const POINTS2 = [
  {
    id: 1,
    title: "100+ Hrs Live Content",
  },
  {
    id: 2,
    title: "50+ Hrs Contest",
  },
  {
    id: 3,
    title: "500+ Problems",
  },
  {
    id: 4,
    title: "Includes an interview bootcamp and access to a mentor network",
  },
  {
    id: 5,
    title:
      "Enjoy access to our content for one year (paid extensions available)",
  },
  {
    id: 6,
    title: "Flexible payment options, including no-cost EMI, are available.",
  },
];

const Pricing = () => {
  return (
    <Wrapper className="my-24">
      <section className="flex flex-col items-center justify-between gap-16 lg:gap-8 lg:flex-row">
        <div className="flex flex-col items-center justify-center basis-1/2 lg:justify-start ">
          <h1 className="text-4xl font-bold text-center font-rubik lg:text-left">
            Invest in skills,
            <span className="text-4xl font-bold font-rubik text-[color:var(--primary-color)]">
              earn 10X
            </span>{" "}
            of what you paid.
          </h1>
          <p className="mt-10 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            exercitationem ea laboriosam porro cupiditate culpa nam
            consequuntur, facilis asperiores atque sequi alias? Delectus modi
            perferendis exercitationem officia et sequi aperiam suscipit minima.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-12 xs:mt-16 xs:grid-cols-2 ">
            {POINTS.map((point) => {
              return (
                <div key={point.id} className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-md aspect-square"></div>
                  <div>
                    <h3 className="text-xl font-bold">{point.title}</h3>
                    <h5>{point.subtitle}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col overflow-hidden bg-white shadow-lg rounded-xl shadow-gray-400 lg:w-[25rem]">
          <div className="px-1 pt-1 bg-gradient-to-b from-[#82a1ae] to-white rounded-t-xl">
            <div className="flex justify-between w-full h-full overflow-hidden bg-white rounded-lg">
              <div className="flex flex-col m-6">
                <h6 className="text-md">Premium Victory Batch</h6>
                <h1 className="text-4xl font-bold font-rubik text-[#818181] line-through mt-6 ">
                  19,999
                </h1>
                <h1 className="text-5xl font-bold text-transparent font-rubik bg-clip-text bg-gradient-to-r from-[#3F6FC1] to-[#05445E]">
                  13,999
                </h1>
              </div>
              <div className="flex items-end justify-end ">
                <img src={img2} className="w-48 h-48 aspect-square" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#04435d] p-8 gap-8 border-white  border-b-4 border-l-4 border-r-4 rounded-b-xl">
            <div className="flex flex-col gap-4 text-white">
              {POINTS2.map((point) => {
                return (
                  <div className="flex items-center gap-4" key={point.id}>
                    <div className="bg-gradient-to-b from-[#CFF1FF] to-[#2D5666] w-12 h-12 rounded-sm p-[1px]">
                      <div className="bg-[#04435d] w-full h-full aspect-square rounded-sm"></div>
                    </div>
                    <h3 className="">{point.title}</h3>
                  </div>
                );
              })}
            </div>
            <button className="bg-white font-semibold text-[color:var(--primary-text-color)] px-8 py-2.5 rounded-md mx-[1.5px] my-[1px] flex items-center gap-2 justify-center shadow-xl shadow-[#214c72]">
              Join Now <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Pricing;
