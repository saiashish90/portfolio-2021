// css imports
import proj from "./Projects.module.scss";

// npm imports
import { motion } from "framer-motion";
import Link from "next/link";

// Main function
export default function projects({ props }) {
  const list = props.props;
  const listitems = list.map((item) => <li key={item.filename}>{item.filename}</li>);
  const config = {
    type: "spring",
    stiffness: 750,
    damping: 80,
  };
  return (
    <motion.div
      transition={config}
      initial={{ y: "100%" }}
      animate={{ y: "0%", transition: { ...config, delay: 0.1 } }}
      exit={{ y: "-100%" }}
      className={proj.wrapper}>
      <Link href="/">
        <span>Home</span>
      </Link>
      <div className={proj.cards}>
        <ul className={proj.internships}>{listitems}</ul>
      </div>
    </motion.div>
  );
}
