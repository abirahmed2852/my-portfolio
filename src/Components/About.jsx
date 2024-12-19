import React from "react";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { IoGitNetworkOutline } from "react-icons/io5";
import { BsDatabaseDown } from "react-icons/bs";
import { IoShieldCheckmark } from "react-icons/io5";
import "../Components/Global.css"
import TransitionEffect from "./TransitionEffect";

const About = ({ bgcolor, darkmode }) => {
  return (
    <>
      <TransitionEffect>
        <div className="relative h-full">
          <div className={`${darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
            <h1 className={`text-3xl font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`} >About</h1>
            <p className="my-4  lg:text-nowrap "
              style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}
            >
              I am a passionate innovator from <span className="font-bold">Bangladesh</span>,
              driven by a vision to revolutionize the tech landscape. <br />
              With a strong foundation in programming and problem-solving,
              Ive created projects that have a big effect <br /> and use advanced technology in creative ways.
              <br />{" "}
            </p>

            <p className="lg:text-nowrap"
              style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}
            >
              My goal is to use computer science to solve problems in the real world and make progress that lasts. <br />
              As a prospective tech mogul, I want to play a part in building a future where technology empowers individuals <br />
              and promotes global innovation.
            </p>
            <h1 className="text-2xl my-5 font-italic"
              style={{ color: `${bgcolor === "white" ? "#000000" : "white"}` }}
            >What I DO!</h1>

            <div className="flex gap-5 flex-wrap ">
              <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{ background: `${bgcolor === "white" ? "#FFF4F4" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}>
                <div>
                  <LiaSwatchbookSolid className="text-4xl my-2 text-purple-600" />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className={`font-bold my-2 ${bgcolor === "white" ? "text-black" : "text-white"}`}
                  >Frontend Developement</h1>
                  <p className="text-sm"
                    style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}
                  >
                    With a deep understanding of <span className="font-bold">HTML, CSS, JavaScript</span>, and modern frameworks like <span className="font-bold">React</span>
                    .I transform design concepts into dynamic, user-friendly websites.
                  </p>
                </div>
              </div>

              <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{ background: `${bgcolor === "white" ? "#EEF5FA" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}>
                <div>
                  <IoGitNetworkOutline className="text-4xl my-2 text-yellow-600" />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className={`font-bold my-2 ${bgcolor === "white" ? "text-black" : "text-white"}`}>Git & Github</h1>
                  <p className="text-sm"
                    style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}
                  >
                    It's used for <span className="font-bold">storing, tracking, and collaborating on software projects </span>. It makes it easy for developers to share code files.
                  </p>
                </div>
              </div>

              <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{ background: `${bgcolor === "white" ? "#EEF5FA" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}>
                <div>
                  <BsDatabaseDown className="text-4xl my-2 text-blue-400" />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className={`font-bold my-2 ${bgcolor === "white" ? "text-black" : "text-white"}`}>Backend Developement</h1>
                  <p className="text-sm"
                    style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}
                  >
                    Design <span className="font-bold">Restful APIs</span> that are easy to integrate, ensuring seamless data exchange across platforms. Whether it’s for <span className="font-bold">mobile apps, web services, or microservices </span>.
                  </p>
                </div>
              </div>

              <div className="ui-ux-design w-80 flex gap-3 p-4 rounded-lg" style={{ background: `${bgcolor === "white" ? "#FFF4F4" : "black"}`, border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}` }}>
                <div>
                  <IoShieldCheckmark className="text-4xl my-2 text-green-500" />
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className={`font-bold my-2 ${bgcolor === "white" ? "text-black" : "text-white"}`}>Testing APIs</h1>
                  <p className="text-sm"
                    style={{ color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}` }}
                  >
                    Test APIs from <span className="font-bold">authentication to error handling </span>,our Postman-driven testing process ensures seamless integration and reliable performance across all endpoints
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </TransitionEffect>
    </>
  );
};

export default About;
