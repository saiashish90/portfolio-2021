import Home from "./Home.module.scss";
import Main from "./main";
import Scrollcontainer from "./scroll";
export default function index() {
  return (
    <div className={Home.wrapper}>
      {/* fixed div */}
      <Main />
      {/* scrollable page */}
      <Scrollcontainer />
    </div>
  );
}
