import ProjectCarousel from "../components/projects/ProjectCarousel";
import GradientTitle from "../components/shared/GradientTitle";
import SectionBadge from "../components/shared/SectionBadge";
import SectionWrapper from "../components/shared/SectionWrapper"

const Challenges = () => {
  return(
    <SectionWrapper>
      <div className="flex flex-col gap-4 justify-center items-center mb-16">
        <SectionBadge title="Challenges" />
        <GradientTitle title="Here is a small taste of potential challenges" />
      </div>
      <ProjectCarousel />
    </SectionWrapper>
  )
}

export default Challenges;