/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "inclusive culture",
    Svg: require("../../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        zeal seeks diversity of not just thought, but diversity of experience,
        diversity of cultural frame of reference, neuro-diversity, and practices
        continued, meaningful allyship!
      </>
    ),
  },
  {
    title: "DevEx first",
    Svg: require("../../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        blog development is powered by <a href="https://yarnpkg.com">yarn 3</a>
        and leverages github actions for quality and release tooling, while
        being fully open source
      </>
    ),
  },
  {
    title: "support OSS",
    Svg: require("../../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        we know how much value your favorite OSS project provides us, and we
        believe in "putting our money where our moth is" and provide all
        engineers a monthly stipend for supporting OSS!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
