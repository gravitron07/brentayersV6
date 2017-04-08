import React from 'react';
import { browserHistory, Link } from 'react-router';
import Logo from "../logo/component";
import MenuToggleButton from "../MenuToggleButton/component";
import styles from './style.css';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'containerClass': 'headerWrapper',
      'menuOpen': false,
      'menuToggleClass': styles.headerNavList
    };
    this.menuToggle = this.menuToggle.bind(this);
    this.workHandler = this.workHandler.bind(this);
  }
  menuToggle(){
    if(this.state.menuOpen) {
      this.setState({
        menuOpen: false,
        menuToggleClass: styles.headerNavList + ' ' + styles['headerNavList--inactive']
      });
    }else{
      this.setState({
        menuOpen: true,
        menuToggleClass: styles['headerNavList--active'] + ' ' + styles.headerNavList
      });
    }
  }
  workHandler(){
    // alert('work bitch');
  }
  render() {
    let containerClass = styles.headerContainer + ' ' + this.props.className;
    return (
      <section className={containerClass}>
        <nav className={styles.header}>
          <ul className={this.state.menuToggleClass}>
            <li className={styles.headerNavList__Item}><Link className={styles.headerNavList__link} onClick={this.workHandler} to={`/work`}><span>Work</span></Link></li>
            <li className={styles.headerNavList__Item}><Link className={styles.headerNavList__link} to={`/about`}><span>About</span></Link></li>
            <li className={styles.headerNavList__Item}><Link className={styles.headerNavList__link} to={`/contact`}><span>Contact</span></Link></li>
          </ul>
          <MenuToggleButton clickHandler={this.menuToggle} />
        </nav>
        <Logo/>
      </section>
    );
  }
}
