import "./Main.css";
import Title from "./main/Title";
import MenuBar from "./main/MenuBar";
import Content from "./main/Content";

function Main() {
  return (
    <div className="Main">
      <Title />
      <MenuBar />
      <Content />
    </div>
  );
}

export default Main;
