import React from "react";
import { Link } from "react-router-dom";

import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styles from "./resource.module.css";

const renderOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className=" my-2 text-sm text-darkerBlue dark:text-slate-800">
        {children}
      </p>
    ),
  },
};

const Resource = ({ item }) => (
  <div className={styles["garden-object"]}>
    <Link
      to={item.externalUrl}
      className={styles["linktext"]}
      target={"_blank"}
    >
      <div className={styles["row"]}>
        <h5>{item.title}</h5>
      </div>

      <p>{documentToReactComponents(item.tagline.json, renderOptions)}</p>
    </Link>
  </div>
);

export default Resource;
