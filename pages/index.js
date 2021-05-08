import Home from "../styles/Home.module.scss";
import Image from "next/image";
export default function index() {
  return (
    <div className={Home.wrapper}>
      <div className={Home.main}>
        <div className={Home.image}>
          <Image src="/main.png" width={433} height={577} alt="Hero image" />
        </div>

        <div className={Home.text}>
          <h1>Hi, Im Sai Ashish</h1>
          <h2>Contact</h2>
          <div className={Home.contacts}>
            <span>saiashish90@gmail.com</span>
            <span>9741623125</span>
            <div className={Home.links}>
              <a href="https://github.com/saiashish90" target="_blank">
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/sai-ashish-ba927a1b2/" target="_blank">
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <h2>Resume</h2>
        </div>
        <div className={Home.scrollanimation} />
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
