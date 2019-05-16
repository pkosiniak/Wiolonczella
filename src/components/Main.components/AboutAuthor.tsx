import * as React from 'react';
import { AboutAuthorData } from './data/Main.content';
import { naviLinks } from '../data/NaviLink.json';
import './styles/AboutAuthor.scss'

const lData = naviLinks.AboutAuthor;
const data = AboutAuthorData;

export default class AboutAuthor extends React.Component {

	H3Content = () => <h3 id={lData.address}> {data.Header} </h3>;

	Paragraphs = () => {
		return (
			data.Paragraphs.map(parag => (
				<div className="aboutAuthor" key={"keyL" + parag}>{parag}</div>
			))
		)
	}

	render() {
		return (
			<div>
				{this.H3Content()}
				{this.Paragraphs()}
			</div>
		)
	}
}