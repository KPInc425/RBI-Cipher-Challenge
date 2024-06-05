import GradientTitle from "../shared/GradientTitle";

const Value = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-4 items-center xl:items-start text-center xl:text-start">
      <div className="w-12 h-12">
        {icon}
      </div>
      <GradientTitle title={title} textSize="md" fontWeight="medium" />
      <p className="text-balance text-lg">{description}</p>
    </div>
  );
}

export default Value;