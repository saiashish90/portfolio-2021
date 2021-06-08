import Home from "../../styles/Home.module.scss";
export default function scrollcontainer() {
  return (
    <div id="info" className={Home.info}>
      <div className={Home.desc}>
        I am a machine learning geek who is also interested in full-stack web development. I am
        constantly looking for work that challenges my skills and creativity.
      </div>
      <div className={Home.about}>
        <div className={Home.skills}>
          <div className={Home.heading}>Skills</div>
          <ul className={Home.skills_content}>
            <li>Java, C/C++, Python, Dart, HTML, CSS, Javascript, PHP.</li>
            <li>Databases: MYSQL, MongoDB, FireBase.</li>
            <li>Frameworks: ReactJS, NextJS, NodeJs, Flutter.</li>
            <li>Backend frameworks: ExpressJS, Laravel.</li>
            <li>Machine learning frameworks: PyTorch, and FastAi.</li>
            <li>IoT using microcontrollers and various sensors and components.</li>
            <li>Blender 3D modeling.</li>
          </ul>
        </div>
        <div className={Home.interests}>
          <span>Interests</span>
          <ul>
            <li>Machine learning and artificial intelligence.</li>
            <li>Computer vision and image recognition.</li>
            <li>Full-Stack Web Development</li>
            <li>Mobile APP development for android and IOS platforms.</li>
            <li>SmartHome appliances and home automation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
