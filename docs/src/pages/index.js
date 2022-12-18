import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Accéder à la documentation
          </Link>
        </div>
        <div className={styles.buttons} style={{ marginTop: 15 }}>
          <Link
            className="button button--secondary button--lg"
            to="https://aniskoceilanabilnlpproject.netlify.app/"
          >
            Tester notre application
          </Link>
        </div>
        <p
          className="hero__subtitle"
          style={{
            textAlign: "justify",
            fontSize: 18,
          }}
        >
          Le traitement du langage naturel (NLP, pour Natural Language
          Processing en anglais) est un domaine de l'intelligence artificielle
          qui vise à permettre aux ordinateurs de comprendre, de générer et de
          manipuler le langage humain de manière automatisée. Il s'agit d'un
          domaine interdisciplinaire qui combine la linguistique, l'informatique
          et l'apprentissage automatique pour résoudre des problèmes liés au
          traitement du langage humain.
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
