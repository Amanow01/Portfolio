import "./Footer.css";
import fiverr from "./footer-image/fiverr 1.png";
import GitHub from "./footer-image/GitHub 1.png";
import linkedin from "./footer-image/linkedin-icon-png-transparent-background-8 1.png";
import FooterImg from "./footer-image/partfolio.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-backg">
          <div className="wrapper flex item-center speak-around">
            <div className="footerLogo ">
              <img className="none" src={FooterImg} alt="FooterImg" />
            </div>
            <div className="mob-center flex item-center col-2">
              <div className="icon ">
                <a href="#">
                  <img src={fiverr} alt="fiverr" />
                </a>
                <a href="#">
                  <img src={GitHub} alt="GitHub" />
                </a>
                <a href="#">
                  <img src={linkedin} alt="linkedin" />
                </a>
              </div>

              <div className="footer">
                <h1>2024г Туркменабат</h1>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
