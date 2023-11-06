import CardContainer1 from "../components/UI/Card1";
import CardContainer2 from "../components/UI/Card2";
import CardContainer3 from "../components/UI/Card3";
import CardContainer4 from "../components/UI/Card4";
import CardContainer5 from "../components/UI/Card5";
import CardContainer6 from "../components/UI/Card6";
import "../App.css";

export default function ProjectPage() {
  return (
    <>
      <div className="wrapper">
        <CardContainer1 />
        <CardContainer2 />
        <CardContainer3 />
        <CardContainer4 />
        <CardContainer5 />
        <CardContainer6 />
      </div>
    </>
  );
}
