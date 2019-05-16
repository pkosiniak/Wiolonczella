import * as React from "react";
import {HeaderData} from './data/Body.json';
import './styles/Header.scss';

const data = HeaderData;

export default class Header extends React.Component {

	render() {
		return (
			<header id="home">
				<div className="headerBackgroundImage">
					<div className="pageHeaders">
						<h1 id="animatedHeader1">{data.Header1}</h1>
						<h2 id="animatedHeader2">{data.Header2}</h2>
					</div>
				</div>
			</header>
		)
	}
}