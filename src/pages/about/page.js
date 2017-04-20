import React from "react";
import styles from "./style.css";

import Header from "../../common/components/header/component";
import Footer from "../../common/components/Footer/component";


export default class AboutPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'containerClass': 'headerWrapper'
		};
	}
	componentDidMount() {
		this.setState({containerClass  : 'headerWrapper headerWrapper--about animate'})
	}
	render() {
		return (
			<div>
				<Header className={this.state.containerClass} />
				<section className={styles.aboutContainer}>
					<div className={styles.pageBound}>
						<h2 className="pageHead">A Little about me...</h2>
						<div className="contentLeft">
							<p className="tagline">I specialize in front end design/development, flawless code, and standards compliant websites and applications.</p>
							<p className="contentBlock">I’ve been creating websites and applications in the Atlanta Area for about 15 years now. I strive to make every site I make not only visually appealing, but useable and engaging for everyone that sees it. You can rest assured that the final product I deliver will be scalable so that as your business grows, your site can too.</p>

							<h3 className="contentHead">My Background</h3>
							<p className="contentBlock">I'm a web designer/front-end developer residing in Atlanta, Georgia with my wife and three daughters. I have been building websites and front end applications for over a decade and I think I'm getting pretty good at it.</p>

							<h3 className="contentHead">Where I've Been</h3>
							<p className="contentBlock">I started designing websites professionally in 2000 at Fidelity National Information Solutions. While at Fidelity, I designed real estate websites for RE/MAX, Keller Williams, Realty Executives, and Century 21. After leaving Fidelity in 2004, I went the agency route and worked on some really cool projects for various clients around Atlanta. After a brief stint as a contractor I was offered an amazing opportunity to come work as a front-end developer on WebMD's strategic initiatives team, and ultimately settled in to lead the mobile web development team. I left WebMD in 2012 and I am now a development lead at The Home Depot, where I get to enjoy the break neck pace of online retail selling LOTS of hammers and nails.</p>
						</div>
						<div className="contentRight">
							<h3 className="contentListHead">Expertise</h3>
							<ul className="contentItem__list">
								<li className="contentItem__item">Web Application Architecture</li>
								<li className="contentItem__item">Web Standards</li>
								<li className="contentItem__item">Social Media Integration/Advertising</li>
								<li className="contentItem__item">Usability</li>
								<li className="contentItem__item">Search Engine Optimization</li>
								<li className="contentItem__item">Content Management</li>
							</ul>
							<h3 className="contentListHead">Technologies</h3>
							<ul className="contentItem__list">
								<li className="contentItem__item">HTML</li>
								<li className="contentItem__item">CSS</li>
								<li className="contentItem__item">Javascript (both "native" and just about any library you can throw at me)</li>
								<li className="contentItem__item">php</li>
							</ul>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}
