import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import AboutMenu from "../../components/AboutMenu/AboutMenu.js";
import FAQ from "../../components/FAQ/FAQ.js";

import styles from "./AboutPage.module.css";

const AboutPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get("section") || undefined;

  const landRef = useRef(null);
  const accessibilityRef = useRef(null);
  const businessModelRef = useRef(null);
  const faqRef = useRef(null);
  const fundingRef = useRef(null);

  const scrollToSection = (ref) => {
    const element = ref.current;
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      const offset = offsetTop - 160; // Adjust this value as needed

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (section === "land") {
      scrollToSection(landRef);
    }
    if (section === "accessibility") {
      scrollToSection(accessibilityRef);
    }
    if (section === "businessModel") {
      scrollToSection(businessModelRef);
    }
    if (section === "faq") {
      scrollToSection(faqRef);
    }
    if (section === "funding") {
      scrollToSection(fundingRef);
    }
  }, [section]);

  return (
    <div className={styles["aboutPage"]}>
      <AboutMenu
        tabName="landAcknowledgement"
        landRef={landRef}
        accessibilityRef={accessibilityRef}
        businessModelRef={businessModelRef}
        faqRef={faqRef}
        fundingRef={fundingRef}
        scrollToSection={scrollToSection}
      />
      <div className={styles["AboutSection"]}>
        <div
          id="landAcknowledgement"
          ref={landRef}
          className={styles["textbox"]}
        >
          <h5>LAND ACKNOWLEDGEMENT</h5>
          <p>
            <a className={styles["logo-insitu"]}>TERRAIN</a> emerged on the
            unceded land of the Wurundjeri Woi Wurrung people of the Eastern
            Kulin Nations across broader Naarm (Melbourne) and Ngár-go
            (Fitzroy). We acknowledge and pay respect to their elders and
            ancestors past, present and emerging, and to all First Nations
            people, for their wisdom and connections with Country. For over
            80,000 years, Aboriginal and Torres Strait Islander people have
            lived in harmony with these lands as the oldest living culture on
            Earth. We commit ourselves to the ongoing process of unlearning
            colonial programing, as we listen from our First Nations teachers
            about what it is to meaningfully coexist with Country, which extends
            well beyond the human to that within the lands, waters and skies. We
            acknowledge First Nations knowledge systems as the first that
            reminded us that we live in an interconnected world, that is
            more-than-human. Through our operations, we actively seek to
            recentre First Nations people and their knowledge within society.
            <br></br>
            <br></br>
            We also recognise that today we exist in relationship with many
            places simultaneously. Our emerging digital territories of the
            internet rely on infrastructures that encompass millions of data
            servers, satellites in space, and undersea cables, connecting us to
            parts of the planet far beyond the reach of our physical feet.
            <br></br>
            <br></br>
            Where are you? Find out here{" "}
            <a href="www.native-land.ca" target="_blank">
              www.native-land.ca
            </a>
            .
          </p>
        </div>
      </div>
      <div className={styles["AboutSection"]}>
        <div
          id="accessibility"
          ref={accessibilityRef}
          className={styles["textbox"]}
        >
          <h5>ACCESSIBILITY</h5>
          <p>
            We regret that we are unable to provide accessible entry to our
            space. Please reach out to us at hello@
            <a className={styles["logo-insitu"]}>TERRAIN</a>.earth if an access
            ramp is required for our main entry on Brunswick Street with one
            step so that we can accommodate your visit. Our space is cavernous
            with a high ceiling that maintains a stable temperature year round,
            and we do not run air conditioning unless on days with extreme
            temperatures where we will try to make the space as comfortable to
            visitors as possible. We are unable to provide restroom facilities
            at this time. People of all ages are welcome, however - nature
            doesn’t always have straight lines and soft edges, and neither does
            our space, so please be careful and we kindly ask that children are
            supervised.
            <br></br>
            <br></br>
            We are continuously looking to improve and evolve our accessibility
            practices and policies to ensure our operations are welcoming to
            diverse perspectives and abilities. If you are having difficulty
            accessing any of our physical or digital experiences and operations,
            or have any specific feedback, we want to hear from you. Please
            contact us if you would like any other information about our space
            prior to visiting or have suggestions for how we can improve. We
            appreciate your feedback and value your perspective.
          </p>
        </div>
      </div>
      <div className={styles["AboutSection"]}>
        <div
          id="businessModel"
          ref={businessModelRef}
          className={styles["textbox"]}
        >
          <h5>BUSINESS MODEL</h5>
          <p>
            <a className={styles["logo-insitu"]}>TERRAIN</a> stands as an
            independent initiative and a purpose-driven social enterprise with a
            core commitment to addressing pressing social and environmental
            challenges through education. Our business model is rooted in a
            triple bottom line approach, that prioritises a commitment to having
            an overall positive impact on society and the environment, placing
            equal, if not greater, emphasis alongside our growth.
            <br></br>
            <br></br>
            As we reinvest our earnings into projects that drive this mission
            forward, <a className={styles["logo-insitu"]}>TERRAIN</a> functions
            like an evolving organism. We pilot impact-led projects as
            experimental prototypes and spaces, which may later become integral
            parts of our ongoing business operations and offerings.
          </p>
        </div>
      </div>

      <div className={styles["AboutSection"]}>
        <div id="funding" ref={fundingRef} className={styles["textbox"]}>
          <h5>FUNDING</h5>
          <div className={styles["fundingtext"]}>
            <p>
              <a className={styles["logo-insitu"]}>TERRAIN</a> values the
              contributions of artists and creators and makes every effort to
              give proper attribution and references. Any inadvertent errors in
              acknowledging individuals or organisations are entirely
              unintentional. Citation of others as indexes and wikis recognises
              the global nature of information, and connects not only people but
              all things.
              <br></br>
              <br></br>Thanks to the incredible generosity of philanthropic
              support from the Kalliopeia Foundation in Northern California,
              we’ve been able to launch this initiative in Australia.
              <br></br>US Tax deductible donations to&nbsp;
              <a className={styles["logo-insitu"]}>TERRAIN</a>
              &nbsp;may be made to our fiscal sponsor Cloud Forest Institute, a
              501c (3) non-profit corporation. Please write &nbsp;
              <a className={styles["logo-insitu"]}>TERRAIN</a>
              &nbsp; in the memo line of your contribution. Link: PayPal link
              Donate to Cloud Forest Institute
            </p>
            <br></br>
          </div>
        </div>
      </div>
      <div className={styles["AboutSection"]}>
        <div id="faq" ref={faqRef} className={styles["textbox"]}>
          <h5>FAQ</h5>
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
