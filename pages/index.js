import Home from "../styles/Home.module.scss";
import Main from "./components/main";
export default function index() {
  //
  return (
    <div className={Home.wrapper}>
      {/* fixed div */}
      <Main></Main>
      {/* scrollable page */}
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
