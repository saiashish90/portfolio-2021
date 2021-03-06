import Home from "./Home.module.scss";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDateTime } from "../../../hooks/useDateTime";
export default function Main() {
  const isInitialMount = useRef(true);
  const timecontainer = useRef(null);
  let time = useDateTime();
  const config = {
    type: "spring",
    stiffness: 750,
    damping: 80,
  };
  // Code to delete and add time
  useEffect(() => {
    // First mount do nothing
    if (isInitialMount.current) {
      isInitialMount.current = false;
      timecontainer.current.innerHTML = time[1];
    } else {
      // Consequent mounts time change animation
      setTimeout(() => {
        try {
          timecontainer.current.classList.remove(Home.time_erase);
          timecontainer.current.innerHTML = time[1];
          timecontainer.current.classList.add(Home.time_type);
        } catch (error) {}
      }, 2000);
    }
    return () => {
      // Reset classes on unmount
      try {
        timecontainer.current.classList.remove(Home.time_type);
        timecontainer.current.classList.add(Home.time_erase);
      } catch (error) {}
    };
  }, [time[1]]);
  return (
    <motion.div
      transition={config}
      initial={{ y: "100%" }}
      animate={{ y: "0%", transition: { ...config, delay: 0.1 } }}
      exit={{ y: "-100%" }}
      className={Home.main}>
      {/* Left side bar */}
      <div className={Home.leftmargin}>
        {/* date */}
        <div className={Home.date}>
          <span>{time[0]}</span>
          <span ref={timecontainer}></span>
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
        <div className={Home.name}>
          <h1 className={Home.h1}>Hi, I'm Sai Ashish</h1>
          <div className={Home.desig}>
            <h2>A Computer Science Engineer</h2>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div
        onClick={() => {
          document.getElementById("info").style.opacity = "0";
        }}
        className={Home.projects}>
        <Link href="/projects">
          <span>Projects</span>
        </Link>
      </div>

      {/* Mobile links */}
      <div className={Home.linksmobile}>
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
      <div className={Home.scrollanimation} />
    </motion.div>
  );
}
