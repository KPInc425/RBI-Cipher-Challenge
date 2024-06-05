import GradientTitle from "../shared/GradientTitle";

const Project = ({projectLogo, projectName, description, tagLine, taglineDescription}) => {
  return (
    <div className="flex flex-col xl:flex-row border rounded-2xl shadow-lg">
      <div className="p-8 border-b rounded-b-2xl xl:border-r xl:rounded-r-2xl border-t-4 rounded-t-2xl border-t-primary">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12">
            {projectLogo}
          </div>
          <span className="text-xl font-bold">{projectName}</span>
        </div>
        <p className="pt-4 text-start text-lg">
          "{description}"
        </p>
      </div>
      <div className="py-8 px-16 flex flex-col justify-center xl:justify-between items-center xl:items-start h-full">
        <div>
          <GradientTitle title={tagLine} textSize="xl" fontWeight="medium" />
          <p className="text-center xl:text-start text-lg">{taglineDescription}</p>
        </div>
        <button className="btn btn-primary mt-8">Book a Demo</button>
      </div>
    </div>
  )
}

export default Project;