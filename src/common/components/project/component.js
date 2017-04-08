import React from 'react';
import { browserHistory, Link } from 'react-router';
import styles from './style.css';
import clients from '../../../../client-config.js';
import animateBase from '../../../../node_modules/animate.css/source/_base.css';
import fadeIn from '../../../../node_modules/animate.css/source/fading_entrances/fadeIn.css';
import fadeOut from '../../../../node_modules/animate.css/source/fading_exits/fadeOutDown.css';


export default class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'faderClass': (typeof this.props.path !== 'undefined') ? styles.faderContainer + ' ' + fadeIn.fadeIn + ' ' + animateBase.animated : '',
      'client' : clients.filter((client) => {return (client.path === this.props.path)})[0]
    };
    this.closeOverlay = this.closeOverlay.bind(this);
    this.buildList = this.buildList.bind(this);
    this.buildImageList = this.buildImageList.bind(this);
    
  }
  closeOverlay(){
    this.setState({
      faderClass : animateBase.animated + ' ' + fadeOut.fadeOutDown + ' ' + styles.closedOverlay
    });
  }
  buildImageList(items){
    let list = [];
    items.map((item, i) => {
      let srcPath =`/images/projects/${item}`;
      list.push (<li key={i} className={styles.imageList__item}><img className={styles.imageList__image} src={srcPath} /></li>);
    });
    return list;
  }
  buildList(items){
    let list = [];
    items.map((item, i) => {
      list.push (<li key={i} className="contentItem__item">{item}</li>);
    });

    return list;
  }
  render() {
    let deliverables = this.buildList(this.state.client.deliverables);
    let technologies = this.buildList(this.state.client.technologies);
    let images = this.buildImageList(this.state.client.images);

    return (
      <section className={styles.project}>
      <div className={styles.projectContainer}>
        <Link to={`/work`} className={styles.closeButton} onClick={this.closeOverlay}>Close</Link>
        <section className={styles.projectDetails}>
          <h2 className={styles.projectDetails__title}>{this.state.client.label}</h2>
          <p className={styles.projectDetails__description}>{this.state.client.project}</p>
          <div className={styles.contentItem}>
            <h3 className={styles.contentItem__head}>Deliverables</h3>
            <ul className="contentItem__list">
            {deliverables}
            </ul>
          </div>
          <div className={styles.contentItem}>
            <h3 className={styles.contentItem__head}>Technologies Used:</h3>
            <ul className="contentItem__list">
              {technologies}
            </ul>
          </div>
        </section>
        <section className={styles.projectImages}>
          <ul className={styles.imageList}>
            {images}
          </ul>
        </section>
      </div>
      </section>
    );
  }
}
