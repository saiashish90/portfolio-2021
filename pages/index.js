import Home from "../styles/Home.module.scss";
import Image from "next/image";
import { useEffect } from "react";
export default function index() {
  return (
    <div className={Home.wrapper}>
      <div className={Home.main}>
        {/* Text */}
        <div className={Home.text}>
          {/* Name */}
          <div className={Home.name}>
            <h1>Hi, I'm Sai Ashish</h1>
          </div>
          {/* Designation */}
          <div className={Home.desig}>
            <div>
              <h2>A Computer Science Engineer</h2>
            </div>
          </div>
        </div>
        {/* Animation */}
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
