import Home from "../styles/Home.module.scss";
import { useEffect, useRef } from "react";
import { useDateTime } from "../hooks/useDateTime";
export default function index() {
  const isInitialMount = useRef(true);
  let time = useDateTime();
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      document.getElementById("time").innerHTML = time[1];
      console.log("ount");
    } else {
      console.log("time changed");
      document.getElementById("time").classList.add(Home.time_erase);
      setTimeout(() => {
        document.getElementById("time").classList.remove(Home.time_erase);
        document.getElementById("time").innerHTML = time[1];
        document.getElementById("time").classList.add(Home.time_type);
        setTimeout(() => {
          document.getElementById("time").classList.remove(Home.time_type);
        }, 2000);
      }, 2000);
    }
  }, [time[1]]);
  return (
    <div className={Home.wrapper}>
      {/* fixed div */}
      <div className={Home.main}>
        {/* Left side bar */}
        <div className={Home.leftmargin}>
          {/* date */}
          <div className={Home.date}>
            <span>{time[0]}</span>
            <span id="time"></span>
            <span>{time[2]}</span>
          </div>
          {/* links */}
          <div className={Home.links}>
            <a href="https://www.github.com/saiashish90" target="_blank">
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sai-ashish-ba927a1b2/" target="_blank">
              <span>LinkedIn</span>
            </a>
            <a href="https://saiashish90.medium.com/" target="_blank">
              <span>Medium</span>
            </a>
            <a href="">
              <span>Resume</span>
            </a>
          </div>
        </div>
        {/* Text */}
        <div className={Home.text}>
          {/* Name */}
          <h1 className={Home.h1}>Hi, I'm Sai Ashish</h1>
          {/* Designation */}
          <div className={Home.desig}>
            <h2>A Computer Science Engineer</h2>
          </div>
        </div>
        <div className={Home.projects}>
          <span>Projects</span>
        </div>
        {/* Animation */}
        <div className={Home.scrollanimation} />
      </div>
      {/* scrollable page */}
      <div className={Home.info}>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam neque maxime dolorem?
          Repudiandae iure aut deleniti aliquam, alias similique accusantium obcaecati soluta, neque
          placeat enim facere officiis, sed maiores praesentium explicabo asperiores. Quidem,
          ratione harum. Corporis omnis alias minus perspiciatis aliquid voluptatem repellendus,
          amet obcaecati reiciendis dicta minima accusantium harum itaque! Officia aut sunt
          blanditiis alias rerum, nobis officiis, ducimus sequi provident saepe voluptas architecto
          exercitationem earum. Nemo repudiandae voluptate id exercitationem. Minus pariatur
          veritatis architecto quod beatae laudantium error fugit temporibus ipsum repellendus
          placeat quis, quaerat nam nisi quasi totam aspernatur ipsa iure eum voluptatem excepturi
          tenetur eligendi.
        </span>
      </div>
    </div>
  );
}
