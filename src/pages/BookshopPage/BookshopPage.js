import React from "react";

import BookshopImage from "../../assets/bookshop_img.jpg";

import Image from "../../components/Image/Image";

import styles from "./bookshop.module.css";

const bookshopPage = () => {
  return (
    <div className={styles["outer"]}>
      <div className={styles["container"]}>
        <div className={styles["fullheight"]}>
          <div className={styles["textbox"]}>
            <Image setImage={BookshopImage} />
          </div>
          <h3 className={styles["bookshop-quote"]}>
            A TERRAIN is like an open book; it gives an enormous amount of
            information to anyone who cares to read it.
            <br />
            <br />
            KELLY MENG
          </h3>
        </div>

        <div className={styles["fullheight2"]}>
          <h3 className={styles["bookshop-quote"]}>
            Our world was (and continues to be) colonised through storytelling.
            Stories have the potential to divide us, but they also have the
            power to strengthen connection and community.
            <br />
            <br />
            RONA GLYNN-MCDONALD
          </h3>

          <div className={styles["textbox"]}>
            <p>
              TERRAIN is Melbourne’s destination for ecological and
              more-than-human literature. Our carefully curated collection
              features publications that engage in critical dialogues across
              fields of ecology, technology and culture. These works highlight
              the interconnectedness between humans and the non-human world, and
              offer blueprints for how we might also design our way forward as
              one planetary ecosystem.
              <br></br>
              <br></br>
              We hand source our books from local and international authors,
              ensuring a diverse range of perspectives, and continuously update
              and expand our selections with new releases.
              <br></br>
              <br></br>
              In addition to being a bookshop, our space hosts intimate meetings
              and events. These include (but are not limited to) talks, book
              launches, performances, readings, meetups, prototype activations,
              exhibitions, and workshops. Through these local gatherings, we
              hope to foster meaningful connections and a community with a
              shared passion for applied ecological thinking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bookshopPage;
