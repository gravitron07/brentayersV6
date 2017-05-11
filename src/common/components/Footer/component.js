import React from 'react';
import { browserHistory, Link } from 'react-router';
import styles from './style.css';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   'containerClass': 'headerWrapper',
    //   'menuOpen': false,
    //   'menuToggleClass': styles.headerNavList
    // };
    // this.menuToggle = this.menuToggle.bind(this);
    // this.workHandler = this.workHandler.bind(this);
  }
  render() {
    return (
      <footer className={styles.footerContainer}>
        <nav className={styles.footerNav}>
          <ul className={styles.footerNav__list}>
            <li className={styles.footerNav__item}><a className={styles.footerNav__link} href="https://www.facebook.com/gravitron07"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
            <li className={styles.footerNav__item}><a className={styles.footerNav__link} href="https://www.linkedin.com/in/brentayers"><i className="fa fa-facebook-f" aria-hidden="true"></i></a></li>
            <li className={styles.footerNav__item}><a className={styles.footerNav__link} href="https://www.flickr.com/photos/gravitron/"><i className="fa fa-flickr" aria-hidden="true"></i></a></li>
          </ul>
          <p className={styles.copyright}>Copright &copy; Brent Ayers</p>
        </nav>
      </footer>
    );
  }
}
