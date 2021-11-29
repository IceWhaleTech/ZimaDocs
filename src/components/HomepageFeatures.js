import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Get Started',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Through a short tutorial, quickly traverse entry-level applications within 15 minutes, such as MacOS and Windows accessing shared backup disks, getting started with media servers, etc.
      </>
    ),
  },
  {
    title: 'Explore',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Home server applications are rich. In addition to the familiar home private cloud, DIY gateway and smart home center, popular blockchain applications and distributed computing applications also have rich playability
      </>
    ),
  },
  {
    title: 'Knowledge Base',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A solid basic knowledge is an indispensable part of creation. Unlike the exploration section, the knowledge base focuses more on introducing the basic knowledge of Networking and Linux.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
