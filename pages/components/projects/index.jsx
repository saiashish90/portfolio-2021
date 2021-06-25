import proj from "./Projects.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
export default function projects() {
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
      <div className={proj.cards}>Hi</div>
    </motion.div>
  );
}
