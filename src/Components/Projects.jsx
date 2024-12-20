import React, { useState } from "react";
import python from "../Components/SocialLinks/Projects img/python.jpeg";
import calc from "../Components/SocialLinks/Projects img/python.mp4"
import snakevideo from "../Components/SocialLinks/Projects img/snakegame.mp4"
import snake from "../Components/SocialLinks/Projects img/snakegame.png"
import weather from "../Components/SocialLinks/Projects img/weather.png"
import weathervideo from "../Components/SocialLinks/Projects img/weather.mp4"
import ATM from "../Components/SocialLinks/Projects img/ATM.png"
import ATMvideo from "../Components/SocialLinks/Projects img/ATM.mp4"
import chanel from "../Components/SocialLinks/Projects img/chanel.jpeg"
import gucci from "../Components/SocialLinks/Projects img/gucci.jpeg"
import rolls from "../Components/SocialLinks/Projects img/rr.jpeg"
import gallery from "../Components/SocialLinks/Projects img/gallery.jpeg"
import chanell from "../Components/SocialLinks/Projects img/chanel.mp4"
import guccii from "../Components/SocialLinks/Projects img/gucci.mp4"
import rollss from "../Components/SocialLinks/Projects img/rr.mp4"
import instagramm from "../Components/SocialLinks/Projects img/insta.mp4"
import Internshalaa from "../Components/SocialLinks/Projects img/internshala.mp4"
import nodetalkk from "../Components/SocialLinks/Projects img/nodetalk.mp4"
import alchvideo from "../Components/SocialLinks/Projects img/alch.mp4"
import smartweathvideo from "../Components/SocialLinks/Projects img/smartWeath.mp4"
import weathmonitvideo from "../Components/SocialLinks/Projects img/weatherMonit.mp4"
import internshala from "../Components/SocialLinks/Projects img/internshala-img.png"
import instagram from "../Components/SocialLinks/Projects img/instagram-img.png"
import nodetalk from "../Components/SocialLinks/Projects img/nodetalk-img.png"
import alcohol from "../Components/SocialLinks/Projects img/alcohol.png"
import weatherr from "../Components/SocialLinks/Projects img/smart.png"
import polluction from "../Components/SocialLinks/Projects img/polluction.png"
import "../Components/Global.css";
import ProjectModal from "./ProjectModal";
import { video } from "framer-motion/client";
import TransitionEffect from "./TransitionEffect";

const Projects = ({ bgcolor, darkmode }) => {
  const [activeSection, setActiveSection] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    // Coding Projects
    {
      id: 1,
      title: "Banking System",
      img: ATM,
      video: ATMvideo,
      lang: "C",
      link: "https://github.com/abirahmed2852/c_lang_ATM/blob/main/Q4_switch.c",
      category: "Coding Projects",
      desc: "A secure banking application developed in C that simulates core banking operations. The system supports features such as account creation, deposit and withdrawal, balance inquiries, and transaction history. It ensures data integrity and user authentication while providing a simple, menu-driven interface. This project demonstrates the use of file handling for data storage, along with key C programming concepts like pointers, structures, and loops."
    },
    {
      id: 2,
      title: "Weather App",
      img: weather,
      video: weathervideo,
      link: "https://abirahmed2852.github.io/weatherapp/",
      lang: "HTML,CSS,JS",
      category: "Coding Projects",
      desc: "A weather forecasting application developed using modern APIs that fetch real-time weather data. Users can search for cities and view details such as temperature, humidity, wind speed, and weather conditions. The app implements an intuitive interface and error handling for invalid inputs or API failures. It showcases skills in API integration, responsive design, and JavaScript functionality."
    },
    {
      id: 3,
      title: "Calculator",
      lang: "PYTHON",
      link: "",
      img: python,
      video: calc,
      category: "Coding Projects",
      desc: "A PYTHON-based calculator application capable of performing basic arithmetic operations like addition, subtraction, multiplication, and division. The project includes a graphical user interface (GUI) for better usability, with input validation to prevent errors such as division by zero. This calculator emphasizes event-driven programming and introduces Java Swing for building user-friendly desktop applications."
    },
    {
      id: 4,
      title: "Python Project",
      lang: "Python",
      link: "",
      img: snake,
      video: snakevideo,
      category: "Coding Projects",
      desc: "A Python-based application demonstrating advanced programming concepts. This project features modules like file handling for data storage, database connectivity using SQLite, and data visualization with libraries such as Matplotlib. It showcases Python’s versatility and practical use in solving complex real-world problems while maintaining a clean and modular code structure."
    },

    // UI/UX Projects
    {
      id: 5,
      title: "Chanel Redesign",
      lang: "Figma",
      link: "https://chanel-reimagine.onrender.com/",
      img: chanel,
      video: chanell,
      category: "Ui/Ux",
      desc: "A UI/UX redesign of Chanel's website, prioritizing aesthetics and user engagement. The project introduces a sleek, modern design with an improved navigation structure, responsive layouts, and interactive animations. Emphasizing a luxury shopping experience, it incorporates a minimalist color palette, high-quality visuals, and consistent typography to reflect Chanel's brand identity."
    },
    {
      id: 6,
      title: "Gallery",
      lang: "Figma",
      link: "https://abirahmed2852.github.io/gallery/",
      img: gallery,
      video: "",
      category: "Ui/Ux",
      desc: "A creative UI/UX project for Gallet, focused on enhancing user experience through intuitive navigation and elegant design. This project features responsive layouts, innovative typography, and immersive visual storytelling to captivate users. Attention is given to accessibility and simplicity, ensuring a seamless user experience across all devices."
    },
    {
      id: 7,
      title: "Gucci Redesign",
      lang: "Figma",
      type: "image",
      link: "https://abirahmed2852.github.io/gucci/",
      img: gucci,
      video: guccii,
      category: "Ui/Ux",
      desc: "A redesign of Gucci’s digital storefront to enhance customer engagement and streamline navigation. The project integrates interactive elements like hover animations, immersive product views, and personalized shopping experiences. It maintains Gucci’s iconic branding by using bold visuals and a sophisticated color palette, aligning with the luxury industry’s digital expectations."
    },
    {
      id: 8,
      title: "Rolls Royce",
      lang: "Figma",
      link: "https://rollsroyce-reimagine.onrender.com/",
      img: rolls,
      video: rollss,
      category: "Ui/Ux",
      desc: "A UI/UX design project for Rolls Royce, focusing on blending technology and luxury. The design includes high-resolution visuals, interactive 3D car models, and user-friendly navigation to provide an immersive browsing experience. It highlights brand prestige through elegant layouts and seamless integration of modern design elements."
    },

    // Web App Projects
    {
      id: 9,
      title: "Instagram Clone",
      type: "video",
      lang: "NodeJS,JAVASCRIPT",
      img: instagram,
      video: instagramm,
      link: "https://github.com/abirahmed2852/insta",
      category: "Web App Projects",
      desc: "A full-stack web application replicating Instagram’s key features, including photo sharing, likes, comments, and user profiles. Built with a responsive design, it uses MongoDB for storing user data, Node.js for backend logic, and React for frontend development. The project demonstrates real-time updates, secure authentication, and scalable architecture."
    },
    {
      id: 10,
      title: "Internshala Clone",
      type: "video",
      lang: "REACT JS, NODE JS",
      img: internshala,
      video: Internshalaa,
      link: "https://github.com/abirahmed2852/internshala",
      category: "Web App Projects",
      desc: "A web application mimicking Internshala's core functionality, such as internship listings, user registration, and applications. Built with modern frameworks, it includes a dashboard for students to track applied internships and employers to post opportunities. The project highlights backend integration and efficient database management."
    },
    {
      id: 11,
      title: "NodeTalk - A Chat Application",
      lang: "NODE JS, EJS",
      type: "video",
      img: nodetalk,
      video: nodetalkk,
      link: "https://github.com/abirahmed2852/nodetalk",
      category: "Web App Projects",
      desc: "A real-time chat application built using Node.js and WebSocket technology. The app features user authentication, group chats, and message storage, ensuring smooth and secure communication. Its responsive design and user-friendly interface make it suitable for both personal and professional use."
    },
    {
      id: 12,
      title: "Alcohol Detection System",
      lang: "C++",
      img: alcohol,
      video: alchvideo,
      link: "",
      category: "Robotics Projects",
      desc: "An innovative system designed to detect alcohol levels in drivers using a sensor-based mechanism. The project uses MQ-3 alcohol sensors to measure alcohol concentration in the driver’s breath and triggers an alert system if levels exceed a predefined threshold. Integrated with microcontrollers, this system can also disable vehicle ignition to prevent drunk driving. It highlights practical applications of robotics in ensuring road safety and showcases skills in sensor integration and embedded systems."
    },
    {
      id: 13,
      title: "Smart Weather Detection",
      lang: "JAVA",
      link: "",
      img: weatherr,
      video: smartweathvideo, 
      category: "Robotics Projects",
      desc: "A smart weather detection system that uses IoT sensors to monitor environmental parameters such as temperature, humidity, and atmospheric pressure. Data collected from sensors is displayed in real-time on an interactive interface. The system is ideal for agricultural and industrial applications, offering insights for decision-making. Built using Arduino and various environmental sensors, it demonstrates automation and real-world IoT integration in robotics."
    },
    {
      id: 14,
      title: "Smart Air Quality Monitoring System",
      lang: "PYTHON",
      link: "",
      img: polluction,
      video: weathmonitvideo,
      category: "Robotics Projects",
      desc: "A robotics-based air quality monitoring system designed to measure and report pollutants like CO2, PM2.5, and harmful gases. Utilizing sensors like MQ-135 and Arduino, the system provides real-time air quality data. It features a mobile application for remote monitoring and alerts users when air quality drops below safe levels. This project emphasizes the role of robotics in environmental sustainability and public health."
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const renderContent = () => {
    const filteredProjects = activeSection === "All"
      ? projects
      : projects.filter((project) => project.category === activeSection);

    return filteredProjects.map((project) => (
      <a href="#" key={project.id} onClick={() => handleProjectClick(project)}>
        <div
          className="ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg"
          style={{
            background: `${bgcolor === "white" ? "#FFF4F4" : "black"}`,
            border: `${bgcolor === "white" ? "none" : "1px solid #A6A6A6"}`,
          }}
        >
          <img
            src={project.img}
            className="rounded-lg transition delay-150"
            alt={project.title}
          />
          <div>
            <h1
              className={`text-md font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}
            >
              {project.title}
            </h1>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <TransitionEffect>

    <>
      <div className={` ${darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg`}>
        <h1 className={`text-3xl font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`}>Projects</h1>
        <div className="w-full p-5 flex items-center justify-end">
          <ul className="flex">
            <li
              className={`text-base font-medium Rubik p-2 px-3 cursor-pointer ${activeSection === "All" ? "border-b-[3px] border-[#0487F3]" : ""}`}
              onClick={() => setActiveSection("All")}
            >
              All
            </li>
            <li
              className={`text-base font-medium Rubik p-2 px-3 cursor-pointer ${activeSection === "Ui/Ux" ? "border-b-[3px] border-[#0487F3]" : ""}`}
              onClick={() => setActiveSection("Ui/Ux")}
            >
              Ui/Ux
            </li>
            <li
              className={`text-base z-50 font-medium Rubik p-2 px-3 cursor-pointer ${activeSection === "Web App Projects" ? "border-b-[3px] border-[#0487F3]" : ""}`}
              onClick={() => setActiveSection("Web App Projects")}
            >
              Web App Projects
            </li>
            <li
              className={`text-base z-50 font-medium Rubik p-2 px-3 cursor-pointer ${activeSection === "Coding Projects" ? "border-b-[3px] border-[#0487F3]" : ""} max-[430px]:text-center`}
              onClick={() => setActiveSection("Coding Projects")}
            >
              Coding Projects
            </li>
            <li
              className={`text-base z-50 font-medium Rubik p-2 px-3 cursor-pointer ${activeSection === "Robotics Projects" ? "border-b-[3px] border-[#0487F3]" : ""} max-[430px]:text-center`}
              onClick={() => setActiveSection("Robotics Projects")}
            >
              Robotics Projects
            </li>
          </ul>
        </div>
        <div className="flex gap-5 flex-wrap my-5">
          {renderContent()}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
    </TransitionEffect>
  );
};

export default Projects;
