import Layout from "../components/layout";
import AOS from "aos";
import { useEffect } from "react";

function About() {
  // Initiate scroll library
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <div className="about-page">
        <h1 data-aos="zoom-in" data-aos-duration="2000">
          Be a Better Host
        </h1>
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Mission
        </h2>
        <p data-aos="fade-up" data-aos-duration="1000">
          We have made it our mission to make every New Yorker the perfect host!
          We do this by curating a list of the best deals for those looking to
          have an afordable night out with friends and visitors.
        </p>
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Strategy
        </h2>
        <p data-aos="fade-up" data-aos-duration="1000">
          Our community is our biggest asset. They submit deals they have found
          and want others to enjoy. This is the main way our community grows.
        </p>
      </div>
    </Layout>
  );
}

export default About;
