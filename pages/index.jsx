import Home from "../styles/Home.module.scss";
import Main from "./home_components/main";
import Scrollcontainer from "./home_components/scroll";
export default function index() {
  //
  return (
    <div className={Home.wrapper}>
      {/* fixed div */}
      <Main />
      {/* scrollable page */}
      <Scrollcontainer />
    </div>
  );
}
