import Home from "../styles/Home.module.scss";
import Main from "./home_components/main";
import Scrollcontainer from "./home_components/scroll";
import { motion } from "framer-motion";
export default function index() {
  const config = {
    type: "spring",
    stiffness: 750,
    damping: 80,
  };
  return (
    <motion.div transition={config} exit={{ y: "-100%" }} className={Home.wrapper}>
      {/* fixed div */}
      <Main />
      {/* scrollable page */}
      <Scrollcontainer />
    </motion.div>
  );
}
