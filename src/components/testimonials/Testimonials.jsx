import GradientTitle from "../shared/GradientTitle";
import SectionBadge from "../shared/SectionBadge";
import SectionWrapper from "../shared/SectionWrapper";
import FlaskIcon from "../icons/FlaskIcon";
import Testimonial from "./Testimonial";

const Tesitmonials = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 justify-center items-center mb-4">
        <SectionBadge title="Testimonials" />
        <GradientTitle
          title="What our clients say about us"
          textSize="lg"
          fontWeight="medium"
        />
      </div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <Testimonial
          companyLogo={<FlaskIcon />}
          companyName="Company Name #1"
          testimonial="Working with [Your Company Name] was a game-changer for our
              business. They took the time to understand our unique needs and
              delivered a custom software solution that exceeded our expectations.
              Their team's expertise, professionalism, and dedication to quality
              are unmatched. We couldn't be happier with the results and highly
              recommend them to anyone looking for top-notch custom software
              development."
          author="Client Name"
          dataPoint="65.25%"
          dataPointDescription="Increase time to prototype"
        />
        </div>
        <div id="item2" className="carousel-item w-full">
          <Testimonial
          companyLogo={<FlaskIcon />}
          companyName="Company Name #2"
          testimonial="Working with [Your Company Name] was a game-changer for our
              business. They took the time to understand our unique needs and
              delivered a custom software solution that exceeded our expectations.
              Their team's expertise, professionalism, and dedication to quality
              are unmatched. We couldn't be happier with the results and highly
              recommend them to anyone looking for top-notch custom software
              development."
          author="Client Name"
          dataPoint="65.25%"
          dataPointDescription="Increase time to prototype"
        />
        </div>
        <div id="item3" className="carousel-item w-full">
          <Testimonial
          companyLogo={<FlaskIcon />}
          companyName="Company Name #3"
          testimonial="Working with [Your Company Name] was a game-changer for our
              business. They took the time to understand our unique needs and
              delivered a custom software solution that exceeded our expectations.
              Their team's expertise, professionalism, and dedication to quality
              are unmatched. We couldn't be happier with the results and highly
              recommend them to anyone looking for top-notch custom software
              development."
          author="Client Name"
          dataPoint="65.25%"
          dataPointDescription="Increase time to prototype"
        />
        </div>
        <div id="item4" className="carousel-item w-full">
          <Testimonial
          companyLogo={<FlaskIcon />}
          companyName="Company Name #4"
          testimonial="Working with [Your Company Name] was a game-changer for our
              business. They took the time to understand our unique needs and
              delivered a custom software solution that exceeded our expectations.
              Their team's expertise, professionalism, and dedication to quality
              are unmatched. We couldn't be happier with the results and highly
              recommend them to anyone looking for top-notch custom software
              development."
          author="Client Name"
          dataPoint="65.25%"
          dataPointDescription="Increase time to prototype"
        />
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-lg">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12">
              <FlaskIcon />
            </div>
            <span className="text-xl font-bold">KPInc</span>
          </div>
        </a>
        <a href="#item2" className="btn btn-lg">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12">
              <FlaskIcon />
            </div>
            <span className="text-xl font-bold">Ugh</span>
          </div>
        </a>
        <a href="#item3" className="btn btn-lg">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12">
              <FlaskIcon />
            </div>
            <span className="text-xl font-bold">RBI</span>
          </div>
        </a>
        <a href="#item4" className="btn btn-lg">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12">
              <FlaskIcon />
            </div>
            <span className="text-xl font-bold">TMRA</span>
          </div>
        </a>
      </div>
    </SectionWrapper>
  );
};

export default Tesitmonials;
