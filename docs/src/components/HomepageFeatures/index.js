import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Natural Langage Processing",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Le but du projet est la mise en place des techniques de NLP, afin de
        pouvoir faire une classification efficace
      </>
    ),
  },
  {
    title: "Plusieurs techniques",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Plusieurs techniques sont testée dans le cadre de projet,{" "}
        <code>BOW</code>,<code>TF-IDF</code>, <code>...</code>
      </>
    ),
  },
  {
    title: "Multi technologies",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        La réalisation de projet et son déploiement nécessite plusieurs
        technologie : <code>React</code>,<code>Sklearn</code>,<code>Flask</code>
        ,<code>FastAPI</code>,<code>Swagger</code>,<code>Docker</code> ...
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
