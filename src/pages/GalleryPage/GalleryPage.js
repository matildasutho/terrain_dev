import React from "react";

import GalleryImage from "../../assets/gallery_img.jpg";

import PageTitle from "../../components/PageTitle/PageTitle.js";

import Image from "../../components/Image/Image";

import styles from "./gallerypage.module.css";

const galleryPage = (props) => {
  return (
    <div className={styles["outer"]}>
      <div className={styles["left-col"]}>
        <div className={styles["text-img"]}>
          <PageTitle title={"NOW SHOWING"} />
          <span>
            <h1>THE ANOMALOUS IMAGE, BY TRENT CRAWFORD.</h1>
          </span>
        </div>
      </div>

      <div className={styles[("container", "column")]}>
        <Image setImage={GalleryImage} />
        <div className={styles["textbox"]}>
          <p>
            The Anomalous Image is an ongoing photographic research project that
            delves into the increasingly vast collection of online images that
            document UFO/UAP encounters. Developed through continued research
            and participation in the subculture of telepathic UFO summoning, the
            project embraces a multi-faceted approach grappling with the
            entangled relations between contemporary imaging technologies and
            collective notions of truth and belief.
            <br></br>
            <br></br>
            In this iteration of the project, the focus centres around a
            significant personal sighting the artist experienced on December 10,
            2022, at 4:33 PM GMT+1. This incident, which occurred during Flight
            EK140 near the border of the Czech Republic and Slovakia, was
            documented using a Nikon P900 camera. The resultant images and video
            footage capture a dark ring-like anomaly floating uniquely above the
            cloudline, an event the artist could only describe as an
            unprecedented and unforgettable experience.
            <br></br>
            <br></br>
            Trent Crawford (b.1995) is a Naarm Melbourne-based artist whose work
            explores the impact of image-based technology and its subsequent
            effects on collective notions of truth, belief, and agency.
            Completing a BFA (Honours) at the Victorian College of the Arts in
            2017, Trent is the recipient of the General Sir John Monash
            Scholarship (2024) and Anne and Gordon Samstag Scholarship (2022).
            His work has been exhibited nationally and internationally in
            institutions such as the NGV, Naarm Melbourne; 4649, Tokyo; Palazzo
            San Giuseppe, Italy; Human Resources, Los Angeles; Ace Open,
            Tarntanya Adelaide; Hobiennale, nipaluna Hobart; and Auto Studio,
            Beijing. His collaborative films 'LOCK' (2021) and 'In a World Full
            of Angels' (2023) were awarded Best Experimental Film at the Cologne
            International Film Festival and the Experimental Forum International
            Film and Video Art Festival.
          </p>
        </div>
      </div>
    </div>
  );
};

export default galleryPage;
