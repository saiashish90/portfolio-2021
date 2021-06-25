import Projects from "./components/projects";

export default function projects(props) {
  return <Projects props={props}></Projects>;
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
    };
  });
  return {
    props: { props },
  };
}
