import { Link } from "react-router-dom";
import SectionWrapper from "../components/shared/SectionWrapper";

const WhatTheSonar = () => {
  return (
    <SectionWrapper>
      <div className="h-screen">
        <h1>What The Sonar</h1>
        <p>Sonar is not lidar... :P</p>
        <Link to={"/"} className="btn">Go Home</Link>
      </div>
    </SectionWrapper>
  );
}

export default WhatTheSonar;