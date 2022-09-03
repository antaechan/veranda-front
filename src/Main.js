import Title from "./main/Title";
import MenuBar from "./main/MenuBar";
import Root from "./main/pages/Root";
import Zines from "./main/pages/Zines";
import Zine from "./main/pages/Zine";
import Videos from "./main/pages/Videos";
import Clubhouse from "./main/pages/Clubhouse";
import Community from "./main/pages/Community";
import About from "./main/pages/About";
import Values from "./main/pages/Values";
import Contact from "./main/pages/Contact";

import { Routes, Route } from "react-router-dom";

import "./Main.css";
import "antd/dist/antd.min.css";
import "quill/dist/quill.snow.css";
import EditZine from "./main/pages/EditZine";

function Main() {
  return (
    <div className="Main">
      <Title />
      <MenuBar />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/zine" element={<Zines />} />
        <Route path="/zine/:pageNumber" element={<Zines />} />
        <Route path="/viewer/:articleId" element={<Zine />} />
        <Route path="/edit" element={<EditZine />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/clubhouse" element={<Clubhouse />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about" element={<About />} />
        <Route path="/values" element={<Values />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Main;
