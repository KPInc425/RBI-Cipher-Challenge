const GradientTitle = ({ title, additionalClasses = "", textSize, fontWeight }) => {
  const getTextSize = () => {
    if (textSize === "sm") {
      return "text-2xl";
    } else if (textSize === "md") {
      return "xl:text-4xl";
    } else if (textSize === "lg") {
      return "xl:text-5xl";
    } else if (textSize === "xl") {
      return "xl:text-7xl";
    } else if (textSize === "2xl") {
      return "xl:text-8xl";
    } else if (textSize === "3xl") {
      return "xl:text-9xl";
    }
    return "xl:text-6xl";
  }

  const getFontWeight = () => {
    if (fontWeight === "light") {
      return "font-light";
    } else if (fontWeight === "normal") {
      return "font-normal";
    } else if (fontWeight === "medium") {
      return "font-medium";
    } else if (fontWeight === "semibold") {
      return "font-semibold";
    } else if (fontWeight === "bold") {
      return "font-bold";
    }
    return "font-bold";
  }
  return (
    <span className={`text-balance inline-block bg-gradient-to-t from-base-content/20 from-25% to-base-content text-transparent bg-clip-text pb-2 ${additionalClasses} ${getFontWeight()} ${getTextSize()} text-3xl`}>
      {title}
    </span>
  )
}

export default GradientTitle;