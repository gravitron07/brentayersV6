import React from "react";
// import Chart from 'chart.js';
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

// const data = {
// 	labels: [
// 		'Red',
// 		'Green',
// 		'Yellow'
// 	],
// 	datasets: [{
// 		data: [300, 50, 100],
// 		backgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		],
// 		hoverBackgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		]
// 	}]
// };
// var myDoughnutChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: data,
//     options: options
// });
		return (
			<div>
				<Header className={this.state.containerClass} />
				<section className={styles.aboutContainer}>
					<div className={styles.pageBound}>
						<h2 className="pageHead">A Little about me...</h2>
						<div className="contentLeft">
							<p className="tagline">I specialize in software engineering for the web, flawless code, and standards compliant websites and applications.</p>
							<p className="contentBlock">I’ve been creating websites and applications in the Atlanta Area for about 15 years now. I strive to make every site I make not only visually appealing, but useable and engaging for everyone that sees it. You can rest assured that the final product I deliver will be scalable so that as your business grows, your site can too.</p>

							<h3 className="contentHead">My Background</h3>
							<p className="contentBlock">I'm a full stack developer residing in Atlanta, Georgia with my wife and three daughters. I began my career writing Perl scripts, then transitioned to design and frontend development. I am comfortable working on all layers of a web application, from databases to middleware to UI.</p>

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
							<ul className="contentItem__list--logos">
								<li className="contentItem__item--logo"><img className="logoIcon" src="/images/logos/css-3.svg" /></li>
								<li className="contentItem__item--logo"><img className="logoIcon" src="/images/logos/html5.svg" /></li>
								<li className="contentItem__item--logo"><img className="logoIcon" src="/images/logos/javascript.svg" /></li>
								<li className="contentItem__item--logo"><img className="logoIcon" src="/images/logos/react.svg" /></li>
								<li className="contentItem__item--logo"><img className="logoIcon" src="/images/logos/nodejs-1.svg" /></li>
								<li className="contentItem__item--logo"><img className="logoIcon" src="/images/logos/gulp-1.svg" /></li>
								<li className="contentItem__item--logo"><img className="logoIcon" src="/images/logos/grunt.svg" /></li>
							</ul>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}
