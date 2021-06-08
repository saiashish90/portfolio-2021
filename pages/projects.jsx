import proj from "../styles/Projects.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
export default function projects() {
  const config = {
    type: "spring",
    stiffness: 500,
    damping: 80,
  };
  return (
    <motion.div
      transition={config}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      className={proj.wrapper}>
      <Link href="/">
        <span>Home</span>
      </Link>
    </motion.div>
  );
}
