import ProjectCarousel from "../components/projects/ProjectCarousel";
import GradientTitle from "../components/shared/GradientTitle";
import SectionBadge from "../components/shared/SectionBadge";
import SectionWrapper from "../components/shared/SectionWrapper"

const PortFolio = () => {
  return(
    <SectionWrapper>
      <div className="flex flex-col gap-4 justify-center items-center mb-16">
        <SectionBadge title="Portfolio" />
        <GradientTitle title="We have built some of our ideas, let us build some of yours" />
      </div>
      <ProjectCarousel />
    </SectionWrapper>
  )
}

export default PortFolio;