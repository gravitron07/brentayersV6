import React from "react";
import styles from "./style.css";

import Header from "../../common/components/header/component";
import Footer from "../../common/components/Footer/component";
import Work from "../../common/components/work/component";

import scrollToElement from "../../../node_modules/scroll-to-element/index";


export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'containerClass': 'headerWrapper',
      'selectedWork': this.props.params.path,
      'path': this.props.location.pathname
    };
  }
  componentWillReceiveProps(newProps){
    this.setState({
      selectedWork  : newProps.params.path,
      isWork: this.props.location.pathname
    });
  }
  scrollToPlace(selector){
    scrollToElement(selector, {
      offset: 0,
      ease: 'outQuart',
      duration: 900
    });
  }
  componentDidMount() {
    if(this.state.path.indexOf('/work') === 0) {
      this.scrollToPlace('.contentContainer');
    }else{
      this.setState({containerClass  : 'headerWrapper animate'});
    }
  }
  componentDidUpdate() {
    if(this.props.location.pathname.indexOf('/work') !== -1) {
      this.scrollToPlace('.contentContainer');
    }
  }
  render() {
      return (
        <div className={styles.content}>
        	<Header className={this.state.containerClass} />
        	<div className="contentContainer">
  	        <Work project={this.state.selectedWork} />
          </div>
          <Footer />
        </div>
      );
  }
}
