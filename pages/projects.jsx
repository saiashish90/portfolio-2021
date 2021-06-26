import proj from "../styles/Projects.module.scss";

// npm imports
import { motion } from "framer-motion";
import Link from "next/link";

export default function projects(props) {
  const list = props.props;
  const listitems = list.map((item) => (
    <Link key={item.name} href={"internships/" + item.name}>
      <li>{item.name}</li>
    </Link>
  ));
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

export async function getStaticProps(context) {
  var fs = require("fs");
  var path = require("path");
  const postsDirectory = path.join(process.cwd(), "./public/md");
  const filenames = fs.readdirSync(postsDirectory);
  const props = filenames.map((file) => {
    console.log(file);
    return {
      filename: file,
      name: file.slice(0, -3),
    };
  });
  return {
    props: { props },
  };
}
