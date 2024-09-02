import "./Projects.css";
import { ProjectList } from "../../helper/ProjectList";
import Project from "../../components/Project/Project";
const Projects = () => {
  return (
    <>
      <div className="cart-style">
        <div className="wrapper">
          <div className="carts-flex   mobile-center">
            {ProjectList.map((carts, index) => {
              return (
                <>
                  <Project
                    key={index}
                    title={carts.title}
                    img={carts.img}
                    gitHub={carts.gitHub}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
