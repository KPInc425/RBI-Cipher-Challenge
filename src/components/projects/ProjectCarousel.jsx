import FlaskIcon from "../icons/FlaskIcon";
import Project from "./Project";
import projectData from "../../data/projects";

const ProjectCarousel = () => {

  const goTo = (event) => {
    event.preventDefault()
    const btn = event.currentTarget;

    //Equivalent
    //const carousel = document.querySelector('.carousel')
    // const carousel = btn.parentElement!.parentElement!.parentElement!
    const carousel = document.querySelector('#imageCarousel')

    const href = btn.getAttribute('href')
    const target = carousel.querySelector(href)
    console.log(target);
    const left = target.offsetLeft
    console.log(left);
    carousel.scrollTo({ left: left - carousel.offsetWidth, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-4 justify-center gap-4">
      <div className="flex flex-col w-full py-2 gap-2 col-span-1 max-h-72 lg:max-h-96 overflow-y-auto">
        {projectData.map((project, index) => {
          return (
            <a
              key={project.name}
              href={`#item${index + 1}`}
              className="btn btn-lg"
              onClick={goTo}
            >
              <div className="grid grid-cols-8">
                <div className="col-span-1">
                  {project.logo}
                </div>
                <span className="text-lg font-bold lg:text-start col-span-7 text-balance ml-4">{project.name}</span>
              </div>
            </a>
          );
        })}
      </div>
      <div id="imageCarousel" className="carousel w-full col-span-3">
        {projectData.map((project, index) => {
          return (
            <div key={project.name} id={`item${index + 1}`} className="carousel-item w-full">
              <Project
                projectLogo={project.logo}
                projectName={project.name}
                description={project.description}
                tagLine={project.tagLine}
                taglineDescription={project.tagLineDescription}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCarousel;
