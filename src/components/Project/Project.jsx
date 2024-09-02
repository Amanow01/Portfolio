import "./Project.css";
import { NavLink as Links } from "react-router-dom";
const Project = ({ title, img, gitHub }) => {
  return (
    <>
      <main>
        <div className=" project">
          <div className="projectCart">
            <a href="#" className="">
              <img src={img} alt="image" />
            </a>
            <a href="#" className="title-style">
              {title}
            </a>
            <div className="btn-size">
              <Links
                to="https://www.youtube.com/watch?v=Iz1NvqG7wTc&t=1128s"
                className="gitHub-btn"
              >
                {gitHub}
              </Links>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
