import "./Header.css";

import Image__1 from "./header-image/html css js.png";
import Image__2 from "./header-image/react.png";
import Image__3 from "./header-image/next js.jpg";
const Header = () => {
  return (
    <main>
      <div className="backg">
        <div className="mob-pad">
          <div className="all-style">
            <div className="pad-Y_4rem">
              <p>
                Здравствуйте, меня зовут <span className="mi">Бердимырат</span>
              </p>
              <h3>
                я <span>фронтенд</span>-разработчик
              </h3>
            </div>
          </div>
          <div className="cart  wrapper ">
            <a
              href="https://sky.pro/media/chto-takoe-html-css-i-javascript/"
              target="blank"
            >
              <img src={Image__1} alt="HTML,CSS,JS" />
            </a>
            <a href="https://react.dev/" target="blank">
              <img src={Image__2} alt="REACT JS" />
            </a>
            <a href="https://nextjs.org/" target="blank">
              <img src={Image__3} alt="NEXT JS" />
            </a>
          </div>
        </div>
      </div>
      <div className="container none-container">
        <div className="mob-pad">
          <div className="wrapper">
            <h1>Frontend</h1>
            <p className="mob-100">
              Html,Css,Responsive,JavaScript,React js,TailwindCss,Next js
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
