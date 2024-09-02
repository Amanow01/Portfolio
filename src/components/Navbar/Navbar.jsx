import "./style.css";
import Logo from "./Logo/Logo";
// import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
// import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";
import { NavLink as Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
// import Menu_B from "../Menu_B/Menu_B";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="relative">
      <nav>
        <div className="wrapper flex item-center   mob-between">
          <div className="">
            <Link className="logo" to="/">
              <div className="none">
                <Logo />
              </div>
              <h1 className="mob-black title_none">Фронтенд-разработчик</h1>
            </Link>
          </div>
          <div className={nav ? ["links", "active"].join(" ") : ["links"]}>
            <Link to="/">Главная</Link>
            <Link to="/projects">Проекты</Link>
            <Link to="/resume">Резюме</Link>
            <Link to="/contacts">Контакты</Link>

            {/* <BtnDarkMode /> */}
          </div>
          <div className="">
            {/* <div style={{ margin: "0 2rem 0 2rem" }}>
              <BtnDarkMode />
            </div> */}
            <div onClick={() => setNav(!nav)} className="menu">
              {nav ? (
                <AiOutlineClose size={"1.5rem"} />
              ) : (
                <AiOutlineMenu size={"1.5rem"} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
