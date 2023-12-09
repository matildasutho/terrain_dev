import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { getProjectBySlug } from "../../api/contenful/utils";

import styles from "./eventpage.module.css";

const EventPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    getProjectBySlug(slug).then((response) => {
      const items = response.projectsCollection.items;
      console.log(items[0]);
      setProject(items[0]);
    });
  }, [slug]);

  const renderNode = (node) => {
    if (node.nodeType === "document") {
      // Render the content of the document
      return node.content.map((content, index) => (
        <div key={index}>{renderNode(content)}</div>
      ));
    } else if (node.nodeType === "paragraph") {
      // Render paragraph content
      return <p>{node.content.map((content, index) => renderNode(content))}</p>;
    } else if (node.nodeType === "embedded-asset-block") {
      // Render embedded assets (images, etc.)
      const asset = node.data.target;
      return (
        <img
          src={asset.url}
          alt={asset.title}
          width={asset.width}
          height={asset.height}
        />
      );
    } else if (node.nodeType === "blockquote") {
      // Render blockquotes
      return (
        <blockquote>
          {node.content.map((content, index) => renderNode(content))}
        </blockquote>
      );
    } else if (node.nodeType === "heading-4") {
      // Render heading 4
      return (
        <h4>{node.content.map((content, index) => renderNode(content))}</h4>
      );
    } else if (node.nodeType === "heading-5") {
      // Render heading 5
      return (
        <h5>{node.content.map((content, index) => renderNode(content))}</h5>
      );
    } else if (node.nodeType === "hyperlink") {
      // Render hyperlinks
      return (
        <a href={node.data.uri}>
          {node.content.map((content, index) => renderNode(content))}
        </a>
      );
    } else if (node.nodeType === "text") {
      // Render text
      return node.value;
    } else if (node.nodeType === "unordered-list") {
      // Render unordered lists
      return (
        <ul>
          {node.content.map((item, index) => (
            <li key={index}>{renderNode(item)}</li>
          ))}
        </ul>
      );
    } else if (node.nodeType === "list-item") {
      // Render list items
      return <>{node.content.map((content, index) => renderNode(content))}</>;
    }

    return null;
  };

  const date = new Date(project.date);

  return (
    <div className={styles["outer"]}>
      <div className={styles[("container", "column")]}>
        <div className={styles["fullheight"]}>
          <h1>{project.title}:</h1>
          <br />
          <h3>{project.subtitle}</h3>
          <br />
          <h3>{project.location}</h3>
          <br />
          <h5>{date.toLocaleDateString("en-AU")}</h5>
        </div>
      </div>

      <div className={styles[("container", "column")]}>
        <div className={styles["textbox"]}>
          <div className={styles["im-gcaption"]}>
            <div className={styles["imageborder"]}>
              <img
                src={project?.thumbnail?.url}
                alt={project?.thumbnail?.title}
                className={styles["image"]}
              />
            </div>

            <span>{project?.thumbnail?.title}</span>
          </div>
          <span>
            {documentToReactComponents(project?.description?.json, renderNode)}
          </span>
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

export default EventPage;
