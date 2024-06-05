import MazeIcon from "../icons/MazeIcon";
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
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    console.log("vw: " + vw);
    const href = btn.getAttribute('href')
    const target = carousel.querySelector(href)
    console.log(target);
    const left = target.offsetLeft
    console.log(left);
    if (vw <= 1024) {
      carousel.scrollTo({ left: left, behavior: 'smooth' })

    } else {
      carousel.scrollTo({ left: left - carousel.offsetWidth / 2, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col-reverse xl:grid xl:grid-cols-4 justify-center gap-4">
      <div className="flex flex-col w-full p-4 gap-2 col-span-1 max-h-72 xl:max-h-96 overflow-y-auto">
        {projectData.map((project, index) => {
          return (
            <a
              key={project.name}
              href={`#item${index + 1}`}
              className="btn btn-lg"
              onClick={goTo}
            >
              <div style={{containerType: "inline-size"}} className="flex gap-2 items-center justify-center xl:justify-start w-full">
                <div className="min-h-8 min-w-8 max-h-8 max-w-8 xl:h-14 xl:w-14 hidden xl:block">
                  {project.logo}
                </div>
                <span className="text-[6cqi] font-bold xl:text-start col-span-7 text-balance">{project.name}</span>
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
