/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React from 'react';
import styles from './SolutionNarrativeCard.module.css';

interface solutionNarrativeCardValues {
  img: string;
  title: string;
  content: string;
  link: string;
}

function SolutionNarrativeCard(props: solutionNarrativeCardValues) {
  return (
    <div className={styles.solution_narrative_card_main_div}>
      <div className={styles.solution_narrative_card_img_div}>
        <img
          className={styles.solution_narrative_card_img}
          src={props.img}
          alt="img"
        />
      </div>
      <div className={styles.solution_narrative_card_main_contents_div}>
        <div className={styles.solution_narrative_card_title_div}>
          {props.title}
        </div>
        <div className={styles.solution_narrative_card_content_div}>
          {props.content}
        </div>
        <a className={styles.solution_narrative_card_link}>Know More {`>`}</a>
      </div>
    </div>
  );
}

export default SolutionNarrativeCard;
