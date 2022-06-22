import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Video from "../../components/Video";

export default function Evento() {
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);
  return (
    <div className="flex flex-col ">
      <Header />
      <main className=" flex flex-1 min-h-screen">
        {slug ? <Video /> : <div className="flex-1"></div>}
        <Sidebar />
      </main>
    </div>
  );
}
