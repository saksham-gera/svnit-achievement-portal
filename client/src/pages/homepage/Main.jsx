import "./Main.css";
import Card from "../../components/Card_opp.jsx";
import CardAchievements from "../../components/Card_ach.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { sanity } from "../../sanity.js";
import { ToastContainer, toast } from "react-toastify";

export default function Main() {
  const [achievements, setAchievements] = useState([]);
  const [oppertunity, setOppertunity] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    const skillsQuery = '*[_type=="achievement"]';
    sanity.fetch(skillsQuery).then((data) => {
      setAchievements(data);
    });
  }, [update]);

  useEffect(() => {
    const skillsQuery = '*[_type=="oppertunities"]';
    sanity.fetch(skillsQuery).then((data) => {
      setOppertunity(data);
    });
  }, [update]);

  const toggle = () => {
    setUpdate(!update);
  };
  console.log(achievements);
  return (
    <div className="wrapper1">
      <div className="title">
        SARDAR VALLABHBHAI NATIONAL INSTITUTE OF TECHNOLOGY
      </div>
      <div className="tag">SURAT</div>
      <div className="heading">ACHIEVEMENT PORTAL</div>
      <div className="content">
        <div className="imag">
          <img src="./assets/homepage.jpg" alt="" className="image1" />
        </div>
        <div className="intro1">
          <p
            className="intro_p hover:no-underline"
            style={{ color: "#203342", fontSize: "2.5em" }}
          >
            Achievemnet through effort or skill
          </p>
          <p
            className="intro1_p hover:no-underline"
            style={{ color: "#203342", fontSize: "1.2em", fontWeight: "400" }}
          >
            It's possible this refers to a particular writing instructionor
            activity, like sorting persuasive paragraphs based on the strength
            of their arguments. In such cases the specific instructions would
            outline the sorting criteria and expected outcome.
          </p>
        </div>
      </div>
      <div className="wrapper2">
        <p
          className="wrap_recent hover:no-underline"
          style={{
            color: "#474a51",
            fontSize: "2.5em",
            fontWeight: "light",
            marginTop: "-2%",
          }}
        >
          RECENT
        </p>
        <p
          className="wrap_ach hover:no-underline"
          style={{
            color: "#192a3c",
            fontSize: "2em",
            fontWeight: "bold",
            paddingTop: "2%",
          }}
        >
          ACHIEVEMENT
        </p>
        {console.log(achievements)}
        <div className="table1">
          {achievements.map((achievement) => (
            <CardAchievements
              key={achievement._id}
              achievement={achievement}
              onUpdate={toggle}
            />
          ))}
        </div>
        <Link to={"/Achivements"} className="ach_view hover:no-underline" title="View More">
          View More
        </Link>
        <div className="head2 hover:no-underline">
          <p
            style={{ color: "#192a3c", fontSize: "2.3em", fontWeight: "bold" }}
          >
            Opportuinities
          </p>
          <div className="table2 hover:no-underline">
            {oppertunity.map((oppertunity) => (
              <div className="">
                <Card
                  key={oppertunity._id}
                  oppertunity={oppertunity}
                  onUpdate={toggle}
                />
              </div>
            ))}
          </div>
        </div>
        <Link to={"/Opportunities"} className="ach_view hover:no-underline">
          View More
        </Link>
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  );
}
