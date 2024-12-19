import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";
import "../Components/Global.css";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import TransitionEffect from './TransitionEffect';

const Researchpaper = ({ bgcolor, darkmode }) => {
  const docs = [
    {
      uri: "/RESEARCH_PAPER.pdf",
      fileType: "pdf",
      // fileName: "RESEARCH_PAPER.pdf",
    },
  ];
  return (
    <TransitionEffect>

    <>
      <div className={` ${darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`} p-10 rounded-lg h-fit`}>
        <h1 className={`text-3xl font-bold ${bgcolor === "white" ? "text-black" : "text-white"}`} >Research Paper</h1>
        <DocViewer style={{height:1000}} documents={docs} pluginRenderers={DocViewerRenderers} />
      </div>
    </>
    </TransitionEffect>
  );
}

export default Researchpaper