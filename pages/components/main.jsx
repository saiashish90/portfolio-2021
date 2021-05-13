import Front from "../../styles/Front.module.scss";
import { useEffect, useRef } from "react";
import { useDateTime } from "../../hooks/useDateTime";
export default function Main() {
  const isInitialMount = useRef(true);
  const timecontainer = useRef(null);
  let time = useDateTime();
  // Code to delete and add time
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      timecontainer.current.innerHTML = time[1];
      console.log("first mount");
    } else {
      console.log("time changed");
      setTimeout(() => {
        timecontainer.current.classList.remove(Front.time_erase);
        timecontainer.current.innerHTML = time[1];
        timecontainer.current.classList.add(Front.time_type);
      }, 2000);
    }
    return () => {
      timecontainer.current.classList.remove(Front.time_type);
      timecontainer.current.classList.add(Front.time_erase);
      console.log("unmount");
    };
  }, [time[1]]);
  return (
    <div className={Front.main}>
      {/* Left side bar */}
      <div className={Front.leftmargin}>
        {/* date */}
        <div className={Front.date}>
          <span>{time[0]}</span>
          <span ref={timecontainer} id="time"></span>
          <span>{time[2]}</span>
        </div>
        {/* links */}
        <div className={Front.links}>
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
      <div className={Front.text}>
        <div className={Front.name}>
          <h1 className={Front.h1}>Hi, I'm Sai Ashish</h1>
          <div className={Front.desig}>
            <h2>A Computer Science Engineer</h2>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className={Front.projects}>
        <span>Projects</span>
      </div>

      {/* Mobile links */}
      <div className={Front.linksmobile}>
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
      {/* Animation */}
      <div className={Front.scrollanimation} />
    </div>
  );
}
