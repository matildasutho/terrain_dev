import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import styles from "./service.module.css";
import ServicesMenu from "../../components/ServicesMenu/ServicesMenu.js";

const ServicesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get("section") || undefined;

  const creativeRef = useRef(null);
  const workshopsRef = useRef(null);
  const consultancyRef = useRef(null);
  const spacehireRef = useRef(null);

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
    if (section === "creativestudio") {
      scrollToSection(creativeRef);
    }
    if (section === "workshops") {
      scrollToSection(workshopsRef);
    }
    if (section === "consultancy") {
      scrollToSection(consultancyRef);
    }
    if (section === "spacehire") {
      scrollToSection(spacehireRef);
    }
  }, [section]);

  return (
    <div className={styles["container"]}>
      <div className={styles["outer"]}>
        <div className={styles["servicesContent"]}>
          <ServicesMenu
            creativeRef={creativeRef}
            workshopsRef={workshopsRef}
            consultancyRef={consultancyRef}
            spacehireRef={spacehireRef}
            scrollToSection={scrollToSection}
          />
          <div className={styles["ServicesSection"]}>
            <div
              id="creativestudio"
              ref={creativeRef}
              className={styles["textbox"]}
            >
              <h5>CREATIVE STUDIO</h5>
              <p>
                TERRAIN emerged on the unceded land of the Wurundjeri Woi
                Wurrung people of the Eastern Kulin Nations across broader Naarm
                (Melbourne) and Ngár-go (Fitzroy). We acknowledge and pay
                respect to their elders and ancestors past, present and
                emerging, and to all First Nations people, for their wisdom and
                connections with Country. For over 80,000 years, Aboriginal and
                Torres Strait Islander people have lived in harmony with these
                lands as the oldest living culture on Earth. We commit ourselves
                to the ongoing process of unlearning colonial programing, as we
                listen from our First Nations teachers about what it is to
                meaningfully coexist with Country, which extends well beyond the
                human to that within the lands, waters and skies. We acknowledge
                First Nations knowledge systems as the first that reminded us
                that we live in an interconnected world, that is
                more-than-human. Through our operations, we actively seek to
                recentre First Nations people and their knowledge within
                society.
                <br></br>
                <br></br>
                We also recognise that today we exist in relationship with many
                places simultaneously. Our emerging digital territories of the
                internet rely on infrastructures that encompass millions of data
                servers, satellites in space, and undersea cables, connecting us
                to parts of the planet far beyond the reach of our physical
                feet.
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
          <div className={styles["ServicesSection"]}>
            <div
              id="workshops"
              ref={workshopsRef}
              className={styles["textbox"]}
            >
              <h5>WORKSHOPS</h5>
              <p>
                We regret that we are unable to provide accessible entry to our
                space. Please reach out to us at hello@terrain.earth if an
                access ramp is required for our main entry on Brunswick Street
                with one step so that we can accommodate your visit. Our space
                is cavernous with a high ceiling that maintains a stable
                temperature year round, and we do not run air conditioning
                unless on days with extreme temperatures where we will try to
                make the space as comfortable to visitors as possible. We are
                unable to provide restroom facilities at this time. People of
                all ages are welcome, however - nature doesn’t always have
                straight lines and soft edges, and neither does our space, so
                please be careful and we kindly ask that children are
                supervised.
                <br></br>
                <br></br>
                We are continuously looking to improve and evolve our
                accessibility practices and policies to ensure our operations
                are welcoming to diverse perspectives and abilities. If you are
                having difficulty accessing any of our physical or digital
                experiences and operations, or have any specific feedback, we
                want to hear from you. Please contact us if you would like any
                other information about our space prior to visiting or have
                suggestions for how we can improve. We appreciate your feedback
                and value your perspective.
              </p>
            </div>
          </div>
          <div className={styles["ServicesSection"]}>
            <div
              id="consultancy"
              ref={consultancyRef}
              className={styles["textbox"]}
            >
              <h5>CONSULTANCY</h5>
              <p>
                TERRAIN stands as an independent initiative and a purpose-driven
                social enterprise with a core commitment to addressing pressing
                social and environmental challenges through education. Our
                business model is rooted in a triple bottom line approach, that
                prioritises a commitment to having an overall positive impact on
                society and the environment, placing equal, if not greater,
                emphasis alongside our growth.
                <br></br>
                <br></br>
                As we reinvest our earnings into projects that drive this
                mission forward, TERRAIN functions like an evolving organism. We
                pilot impact-led projects as experimental prototypes and spaces,
                which may later become integral parts of our ongoing business
                operations and offerings.
              </p>
            </div>
          </div>
        </div>

        <div className={styles["ServicesSection"]}>
          <div id="spacehire" ref={spacehireRef} className={styles["textbox"]}>
            <h5>SPACE HIRE</h5>
            <p>
              TERRAIN stands as an independent initiative and a purpose-driven
              social enterprise with a core commitment to addressing pressing
              social and environmental challenges through education. Our
              business model is rooted in a triple bottom line approach, that
              prioritises a commitment to having an overall positive impact on
              society and the environment, placing equal, if not greater,
              emphasis alongside our growth.
              <br></br>
              <br></br>
              As we reinvest our earnings into projects that drive this mission
              forward, TERRAIN functions like an evolving organism. We pilot
              impact-led projects as experimental prototypes and spaces, which
              may later become integral parts of our ongoing business operations
              and offerings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
