import style from "./Internship.module.scss";

import { motion } from "framer-motion";
import Link from "next/link";

export default function internship(props) {
  const config = {
    type: "spring",
    stiffness: 750,
    damping: 80,
  };
  return (
    <motion.div
      transition={config}
      initial={{ y: "100%" }}
      animate={{ y: "0%", transition: { ...config, delay: 5 } }}
      exit={{ y: "-100%" }}
      className={style.wrapper}>
      {props.props}
      <Link href="/">
        <span>Home</span>
      </Link>
    </motion.div>
  );
}

export async function getStaticProps(context) {
  const props = context.params.internship;
  return {
    props: { props },
  };
}
export async function getStaticPaths() {
  var fs = require("fs");
  var path = require("path");
  const postsDirectory = path.join(process.cwd(), "./public/md");
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((file) => ({ params: { internship: file.slice(0, -3) } }));
  return { paths, fallback: false };
}
