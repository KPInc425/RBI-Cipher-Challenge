import GradientTitle from "../shared/GradientTitle";
import MazeIcon from "../icons/MazeIcon";

const Testimonial = ({companyLogo, companyName, testimonial, author, dataPoint, dataPointDescription}) => {
  return (
    <div className="flex flex-col xl:flex-row mt-12 border rounded-2xl shadow-lg">
      <div className="p-8 border-b rounded-b-2xl xl:border-r xl:rounded-r-2xl border-t-4 rounded-t-2xl border-t-primary">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12">
            {companyLogo}
          </div>
          <span className="text-xl font-bold">{companyName}</span>
        </div>
        <p className="pt-4 text-start text-lg">
          "{testimonial}"
        </p>
        <p className="text-start pt-12 text-lg">{author}</p>
      </div>
      <div className="py-8 px-16 flex flex-col xl:justify-between items-center xl:items-start">
        <div>
          <GradientTitle title={dataPoint} textSize="xl" fontWeight="medium" />
          <p className="text-start text-lg">{dataPointDescription}</p>
        </div>
        <button className="btn btn-primary mt-8">Book a Demo</button>
      </div>
    </div>
  )
}

export default Testimonial;