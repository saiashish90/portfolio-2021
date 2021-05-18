import Home from "../styles/Home.module.scss";
import Main from "./components/main";
export default function index() {
  //
  return (
    <div className={Home.wrapper}>
      {/* fixed div */}
      <Main />
      {/* scrollable page */}
      <div className={Home.info}>
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
            Interests
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
      <div className={Home.info}>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam neque maxime dolorem?
          Repudiandae iure aut deleniti aliquam, alias similique accusantium obcaecati soluta, neque
          placeat enim facere officiis, sed maiores praesentium explicabo asperiores. Quidem,
          ratione harum. Corporis omnis alias minus perspiciatis aliquid voluptatem repellendus,
          amet obcaecati reiciendis dicta minima accusantium harum itaque! Officia aut sunt
          blanditiis alias rerum, nobis officiis, ducimus sequi provident saepe voluptas architecto
          exercitationem earum. Nemo repudiandae voluptate id exercitationem. Minus pariatur
          veritatis architecto quod beatae laudantium error fugit temporibus ipsum repellendus
          placeat quis, quaerat nam nisi quasi totam aspernatur ipsa iure eum voluptatem excepturi
          tenetur eligendi.
        </span>
      </div>
    </div>
  );
}
