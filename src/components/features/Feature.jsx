import GradientTitle from "../shared/GradientTitle";

const Feature = ({
  title,
  subTitle,
  image,
  description,
  hasGradient,
  startGradient,
  endGradient,
  reverse,
}) => {
  const getGradient = () => {
    if (hasGradient) {
      if (
        startGradient &&
        endGradient &&
        startGradient !== "" &&
        endGradient !== ""
      ) {
        return `bg-gradient-to-t ${"from-" + startGradient} ${
          "to-" + endGradient
        }`;
      } else {
        return `bg-gradient-to-t from-accent/50 to-neutral/50`;
      }
    }
    return "";
  };
  return (
    <div
      className={`xl:grid xl:grid-cols-2 flex flex-col gap-4 justify-center items-center text-start rounded-3xl p-4 xl:p-12  shadow-[inset_0_0_50px_oklch(var(--nc)),0_0_50px_oklch(var(--nc))] ${getGradient()} ${
        reverse ? "xl:rounded-[75%_25%/20%]" : "xl:rounded-[25%_75%/20%]"
      } ${reverse ? "xl:flex-row" : "xl:flex-row-reverse"} `}
    >
      <div
        className={`flex flex-col gap-4 w-full items-center ${
          reverse ? "xl:items-end xl:order-1" : "xl:items-start xl:order-2"
        }`}
      >
        <GradientTitle title={title} />
        <div
          className={`flex bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0)_0%,_rgba(255,255,255,1)_70%,_rgba(255,255,255,1)_100%);] w-3/4 xl:w-full shadow-[inset_0_0_50px_oklch(var(--nc)),0_0_50px_oklch(var(--nc))] ${
            reverse ? "rounded-[75%_25%/20%]" : "rounded-[25%_75%/20%]"
          }`}
        >
          <img
            src={image}
            alt={title}
            className={`w-full mix-blend-multiply ${
              reverse ? "rounded-[75%_25%/20%]" : "rounded-[25%_75%/20%]"
            }`}
          />
        </div>
      </div>
      <div className={`text-center ${reverse ? "xl:text-end xl:order-2" : "xl:text-start xl:order-1"}`}>
        <GradientTitle title={subTitle} />
        <p className="text-xl pt-8">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
