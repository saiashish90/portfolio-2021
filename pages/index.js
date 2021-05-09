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
  }, [...time]);
  return (
    <div className={Home.wrapper}>
      <div className={Home.main}>
        <div className={Home.leftmargin}>
          <div className={Home.date}>
            <span>{time[0]}</span>
            <span id="time"></span>
            <span>{time[2]}</span>
          </div>
          <div className={Home.links}>
            <span>GitHub</span>
            <span>LinkedIn</span>
            <span>Medium</span>
            <span>Resume</span>
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
        {/* Animation */}
        <div className={Home.scrollanimation} />
      </div>
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
