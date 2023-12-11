import React from "react";

import BookshopImage from "../../assets/ngv-abf-2020-1.png";

import Image from "../../components/Image/Image";
import PageTitle from "../../components/PageTitle/PageTitle";

import styles from "./bookshop.module.css";

const bookshopPage = () => {
  return (
    <div className={styles["outer"]}>
      <div className={styles[("container", "column")]}>
        <div className={styles["left-col"]}>
          <div className={styles["fullheight"]}>
            <PageTitle title={"BOOKSHOP"} />
          </div>
          <div className={styles["fullheight"]}>
            <h3 className={styles["bookshop-quote"]}>
              "A TERRAIN IS LIKE AN OPEN BOOK; IT GIVES AN ENORMOUS AMOUNT OF
              INFORMATION TO ANYONE WHO CARES TO READ IT."
              <br />
              Kelly Meng
            </h3>
          </div>
        </div>
      </div>

      <div className={styles[("container", "column")]}>
        <Image setImage={BookshopImage} />
        <div className={styles["textbox"]}>
          <p>
            TERRAIN is Melbourne’s destination for ecological and
            more-than-human literature. Our carefully curated collection
            features publications that engage in critical dialogues across
            fields of ecology, technology and culture. These works highlight the
            interconnectedness between humans and the non-human world, and offer
            blueprints for how we might also design our way forward as one
            planetary ecosystem.
            <br></br>
            <br></br>
            We hand source our books from local and international authors,
            ensure a diverse range of perspectives, and continuously update and
            expand our selections with new releases. In addition to being a
            bookshop, our space hosts intimate meetings and events. These
            include talks, book launches, performances, readings, meetups,
            prototype activations, micro-exhibits, and workshops. Through these
            local gatherings, we hope to foster meaningful connections and a
            community with a shared passion for applied ecological thinking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default bookshopPage;
