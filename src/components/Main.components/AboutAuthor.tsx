import * as React from 'react';
import { AboutAuthorData } from './Main.content'
import { naviLinks } from '../naviLink.json'

const lData = naviLinks.AboutAuthor;
const data = AboutAuthorData;



export default class AboutAuthor extends React.Component {

	H3Content = () => <h3 id={lData.address}> {data.Header} </h3>;

	Paragraphs = () => {
		return (
			data.Paragraphs.map(parag => (
				<div className="divAutor ">{parag}</div>
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