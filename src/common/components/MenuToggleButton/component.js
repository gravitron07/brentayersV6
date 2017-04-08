import React from 'react';
import styles from './style.css';


export default class MenuToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'menuOpen': false,
      'menuToggleClass': styles.menuButton
    };
    this.menuToggleHandler = this.menuToggleHandler.bind(this);
  }
  menuToggleHandler() {
    this.menuToggle();

    if(this.state.menuOpen) {
      this.setState({
        menuOpen: false,
        menuToggleClass: styles.menuButton
      });
    }else{
      this.setState({
        menuOpen: true,
        menuToggleClass: styles['menuButton--active'] + ' ' + styles.menuButton
      });
    }
  }
  render() {
    this.menuToggle = this.props.clickHandler.bind(this);
    return (
      <button className={this.state.menuToggleClass} onClick={this.menuToggleHandler}><span className={styles.menuButton__span}>Toggle Menu</span></button>
    );
  }
}
