import React from 'react';
import { browserHistory, Link } from 'react-router';
import styles from './style.css';
import clients from '../../../../client-config.js';
import Project from "../project/component";


export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'clients': clients.sort(function() { return 0.5 - Math.random() }),
      'containerClass' : ''
    };
  }
  render() {
    let self = this;
    if(typeof self.props.project === 'undefined') {
      return (
        <section id="workContainer" className={styles.workContainer}>
          <h1 className="pageHead--work">Selected Work</h1>
          <nav className={styles.workNav}>
            <section className={styles.workNavList}>
              {
                this.state.clients.map(function(client, i) {
                  let imageString = `/images/projects/${client.images[0]}`;
                  // self.getProject(client.path, self.props.project);
                  return <div id={client.path} className={styles.workNavList__item} key={client.path}><Link className={styles.workNavList__link} to={`/work/${client.path}`}><img className={styles.workNavList__img} src={imageString} /></Link></div>
                })
              }
            </section>
          </nav>
        </section>
      );
    }else{
      return (
        <section id="workContainer" className={styles.workContainer}>
          <Project key={self.props.project} path={self.props.project} />
        </section>
      );
    }
  }
}