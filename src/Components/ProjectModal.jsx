import React from "react";
import "../Components/Global.css";
import { TiContacts } from "react-icons/ti";
import { FaCode, FaProjectDiagram } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { MdPerson } from "react-icons/md";

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content px-20 py-10">
                <button className="close-btn" onClick={onClose}>X</button>
                <h1 className="text-center font-semibold text-3xl text-[#FA5252]">{project.title}</h1>
                <div className="grid grid-cols-2 gap-5 py-5 text-lg">
                    <div className="flex">
                        <FaProjectDiagram className="text-2xl" /> &nbsp;
                        <h1>Project: <span className="font-semibold">{project.category}</span> </h1>
                    </div>
                    <div className="flex">
                        <MdPerson className="text-2xl" /> &nbsp;
                        <h1>: <span className="font-semibold">{"Anonymous"}</span> </h1>
                    </div>
                    <div className="flex">
                        <FaCode className="text-2xl" /> &nbsp;
                        <h1>Language: <span className="font-semibold">{project.lang}</span> </h1>
                    </div>
                    {
                        project.link && (
                            <div className="flex">
                                <TiContacts className="text-2xl" /> &nbsp;
                                <h1>Preview: <span className="font-semibold"><a target="#" href={project.link}>Click Here</a></span> </h1>
                            </div>
                        )
                    }
                </div>
                <p className="my-5 text-zinc-400 text-lg leading-tight">{project.desc}</p>
                <video className="rounded-lg" controls>
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default ProjectModal;