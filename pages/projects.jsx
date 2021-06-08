import proj from "../styles/Projects.module.scss";
import { motion } from "framer-motion";
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
      className={proj.wrapper}>
      Hi
    </motion.div>
  );
}
