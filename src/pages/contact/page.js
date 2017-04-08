import React from "react";
import styles from "./style.css";

import Header from "../../common/components/header/component";
import Footer from "../../common/components/Footer/component";


export default class ContactPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'containerClass': 'headerWrapper'
		};
	}
	componentDidMount() {
		this.setState({containerClass  : 'headerWrapper headerWrapper--contact animate'})
	}
	render() {
		return (
		  <div>
		  	<Header className={this.state.containerClass} />
			<section className={styles.contactContainer}>
				<div className={styles.pageBound}>
					<div className="contentLeft">
				  		<h2 className="pageHead">Make that hotline bling...</h2>
						<p className="tagline">I'm currently not taking on any freelance work but I'm always eager to hear from my sites' viewers. If you have any general questions feel free to contact me on LinkedIn or Facebook.</p>
						<p className="contentBlock">(If you are an SEO expert soliciting your services: you found me. I obviously don't need you. Now move along.)</p>
					</div>
					<div className="contentRight">
						<h3 className="contentListHead">Stomping Ground:</h3>
						<ul className="contentItem__list">
							<li className="contentItem__item">linkedin</li>
							<li className="contentItem__item">FB</li>
							<li className="contentItem__item">flickr</li>
						</ul>
					</div>
				</div>
			</section>
			<Footer />
		  </div>
		);
	}
}
