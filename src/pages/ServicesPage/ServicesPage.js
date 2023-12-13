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
              <h5>STUDIO</h5>
              <p>
                At TERRAIN, we are focused on seeding, producing, and enacting
                the future we envision. Adjacent to our bookshop and gallery, we
                host a dedicated private co-working studio for practitioners of
                ecology across disciplines. Our private work environment is
                designed to further and strengthen the practices, network, and
                capabilities of each member by being supported and surrounded by
                likeminds in a space grounded by ecological ideas, values and
                ethics.
                <br></br>
                <br></br>
                Starting in 2024, the studio will host a small group of members
                with ecology at the heart of their practices. Members are
                encouraged to be actively engaged with public events in the
                bookshop and gallery.
                <br></br>
                <br></br>
                If you are interested in being one of our first studio members,
                please submit an online expression of interest form{" "}
                <a href="https://tally.so/r/wkN0jo" target="_blank">
                  here
                </a>
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
                Workshops activate our vision across a variety of environments,
                with hands-on nature-orienting activities and experiences. These
                may vary from school classrooms, to corporate team building to
                professional development spaces. We can host groups in our
                space, or we can come to you.
                <br></br>
                <br></br>
                Our workshops on offer rotate seasonally, so please get in touch
                with us to ask what’s currently on offer and for all booking
                requests.
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
                Organisations and industries must proactively prepare for the
                environmental challenges and future that’s already here.
                <br></br>
                <br></br>
                We offer consulting and project services to help organisations
                and individuals integrate ecological ethics and more-than-human
                perspectives into their work.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h5>OUR CAPABILITIES INCLUDE</h5>
                <br></br>
                <br></br>+ &nbsp;&nbsp;Concept development, project management,
                curation, spatial and experience design, and research.
                <br></br>
                <br></br>+ &nbsp;&nbsp;Public engagement, speaking, mentorship,
                writing contributions, media.
                <br></br>
                <br></br>+ &nbsp;&nbsp;Applied sustainability for your
                organisation, business or project.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                Contact us if you would like to work together.
              </p>
            </div>
          </div>
        </div>

        <div className={styles["ServicesSection"]}>
          <div id="spacehire" ref={spacehireRef} className={styles["textbox"]}>
            <h5>SPACE HIRE</h5>
            <p>
              Have an event in mind? Our space is available to hire to our
              community, which offers audio-visual capabilities, including
              surround sound and large displays for immersive experiences in an
              intimate setting. We have a seated capacity of 21 on our aluminium
              benches, and are happy to discuss alternative spatial arrangements
              and settings to try to accommodate your event.
              <br></br>
              <br></br>
              Send us your enquiry and be sure to include details of what you
              have in mind. Please note that given the nature of our space, not
              all requests will be accepted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
