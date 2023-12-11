import React from "react";

import GuadismImage from "../../assets/gaudism-1.png";

import styles from "./manifesto.module.css";

const ManifestoPage = (props) => {
  return (
    <div className={styles["outer"]}>
      {/* <div className={styles["column"]}>
        <span className={styles["rotation"]}>MANIFESTO</span>
      </div> */}
      <div className={styles[("container", "column")]}>
        <div className={styles["left-col"]}>
          <div className={styles["fullheight"]}>
            <div className={styles["manifesto"]}>
              The fundamental separation of humans from nature, which today
              saturates our society, is the underlying cause of Earth's ongoing
              ecological crisis. The first step in addressing this crisis is to
              dissolve the separation: to recognize that we humans are
              inescapably embedded in the natural world.
              <br />
              <br />
              TERRAIN supports this reconnection by incubating playful social
              spaces and collaborative projects that help us connect deeply and
              creatively with the more-than-human world. Honouring the
              transformative reconciliatory power of the arts, TERRAIN cuts
              across diverse disciplines and knowledge systems as invitations to
              shift from self-care to community-care, and from isolated
              professional disciplines toward experiments in
              trans-disciplinarity.
              <br />
              <br />
              Each TERRAIN Project explores a dimension of our vast ecological
              web, providing a space to reconcile our relationship with the
              wider world, piece by piece. These explorations slowly decentre
              our human positionality, as geological fragments part of a larger
              ecosystem. Our TERRAIN is a symbol that unites us. During social,
              ecological, political and economic upheaval, we are called to
              remember the planet and all of its truly borderless terrain as one
              ecosystem. Our terrain will always be the fabric of society.
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["column"]}>
        <div className={styles["textbox"]}>
          <p>
            Architecture <br />
            Astronomy <br />
            Behavioural geography <br />
            Bio-art <br />
            Biogeography <br />
            Cartography <br />
            Climatology <br />
            Computer science <br />
            Conservation <br />
            Cosmology <br />
            Cultural theory <br />
            Deep ecology <br />
            Divinity studies <br />
            Eco-Criticism <br />
            Eco-Feminism <br />
            Eco-Poetry <br />
            Ecology <br />
            Ecological anthropology <br />
            Ecological economics <br />
            Ecological systems dynamics <br />
            Environmental economics <br />
            Environmental engineering <br />
            Environmental ethics <br />
            Environmental law <br />
            Environmental philosophy <br />
            Evolutionary biology <br />
            Feminist geography <br />
            Future studies <br />
            Gastronomy <br />
            Geodesy <br />
            Geography <br />
            Geology <br />
            Geomorphology <br />
            Geosophy <br />
            Glaciology <br />
            Hydrology <br />
            Integrative geography <br />
            IT/Data systems <br />
            Landscape architecture <br />
            Material ecology <br />
            More-than-human geographies <br />
            Oceanography <br />
            Paleogeography <br />
            Pedology <br />
            Permaculture <br />
            Political ecology <br />
            Posthumanities <br />
            Quantum humanities <br />
            Quantum sciences <br />
            Quaternary science <br />
            Queer ecologies <br />
            Regenerative agriculture <br />
            Science fiction <br />
            Social ecology <br />
            Social justice <br />
            Sociology <br />
            Speculative design <br />
            Spiritual ecology <br />
            Systems theory <br />
            Theology <br />
            Traditional ecological knowledge (TEK) <br />
            Urban planning <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManifestoPage;
