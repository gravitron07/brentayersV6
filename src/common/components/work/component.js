import React from 'react';
import { browserHistory, Link } from 'react-router';
import styles from './style.css';
import clients from '../../../../client-config.js';
import Project from "../project/component";


export default class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'clients': clients.sort(function() { return 0.5 - Math.random() })
    };
    this.getProject = this.getProject.bind(this);
  }
  getProject(path, project) {
    let renderedProject;
    if(path === project) {
      renderedProject = <Project key={project} path={project} />
    }
    return renderedProject
  }
  render() {
    let self = this;
    return (
      <section className={styles.workContainer}>
        <h1 className={styles.workHeader}>Selected Work</h1>
        <nav className={styles.workNav}>
          <section className={styles.workNavList}>
            {
              this.state.clients.map(function(client, i) {
                let imageString = `/images/projects/${client.images[0]}`;
                let project = self.getProject(client.path, self.props.project);
                return <div id={client.path} className={styles.workNavList__item} key={client.path}><Link className={styles.workNavList__link} to={`/work/${client.path}`}><img className={styles.workNavList__img} src={imageString} /></Link>{project}</div>
              })
            }
          </section>
        </nav>
      </section>
    );
  }
}