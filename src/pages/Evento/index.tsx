import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Video from "../../components/Video";

export default function Evento() {
  return (
    <div className="flex flex-col ">
      <Header />
      <main className=" flex flex-1 min-h-screen">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}
