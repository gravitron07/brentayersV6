import React from 'react';
import { browserHistory, Link } from 'react-router';
import styles from './style.css';


export default class Logo extends React.Component {
  render() {
    return (
      <section className={styles.logo}>
        <div className={styles.logo__wrapper}>
          <Link className={styles.logo__link} to={`/`}>
            <span className={styles.logo__image}></span>
            <span className={styles.logo__name}>Brent Ayers</span>
            <span className={styles.logo__tagline}>Web Developer</span>
          </Link>
        </div>
      </section>
    );
  }
}
