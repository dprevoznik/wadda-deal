import Layout from "../components/layout";
import AOS from "aos";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <div className="about-page">
        <h1 data-aos="zoom-in" data-aos-duration="2000">Be a better Host</h1>
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Mission
        </h2>
        <p data-aos="fade-up" data-aos-duration="1000">
          We have made it our mission to curate a list of the best deals for
          those looking to have an afordable night out with friends and visitors
          of New York City.
        </p>
        <h2 data-aos="fade-up" data-aos-duration="1000">
          How
        </h2>
        <p data-aos="fade-up" data-aos-duration="1000">
          We accomplish this goal in two ways. First, our staff goes out and
          looks for deals to post. Second, and more importantly, our community
          submits deals they have found and want others to enjoy. This is the
          main way our community grows.
        </p>
      </div>
    </Layout>
  );
}

export default About;
