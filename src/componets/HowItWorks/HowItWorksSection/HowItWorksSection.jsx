// HowItWorksSection.js
import React from 'react';
import styles from './styles.module.css';
import Article from '../Article/Article';
import { articlesData } from './_data';

const HowItWorksSection = () => {
  return (
    <section className={styles.howItWorksSection}>
      <h2 className={styles.howItWorksText}>How It Works</h2>
      <div className={styles.tiles}>
        {articlesData.map((article, index) => (
          <Article
            key={index}
            imageSrc={article.imageSrc}
            altText={article.altText}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
