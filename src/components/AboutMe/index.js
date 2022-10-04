import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ProfileImageURL from '@site/static/img/profilePic.png';

function AboutMeHome(){
  return(
    <section className={styles.aboutHome}>
      <div className={styles.aboutPic}>
        <img src={ProfileImageURL}></img>
      </div>
      <div className={styles.aboutText}>
          <p>Kathleen McCulloch-Cop is a student and writer based out of Ottawa, Canada.</p>
          <p>She graduated from the University of Guelph in May 2022 with a Baccalaureate in
          Computing, majoring in Software Engineering and minoring in English and Mathematics.</p>
          <p>
          Kathleen is currently a Teacher Candidate in the Faculty of Education at the University of Ottawa,
          (Intermediate/Senior, English and Mathematics).</p>
          <p>Her first collection of poetry, Stem to Sternum, was published in January 2022. Her
          published works can be found <b><a href="/docs/list-of-works">here</a></b>, along with other samples of her writing.</p>
      </div>
    </section>
  );
}

export default function AboutMe() {
  return (
    <AboutMeHome />
  );
}
