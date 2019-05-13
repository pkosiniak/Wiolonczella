import * as React from 'react';
import { DescriptionData } from './Main.content';
import { naviLinks } from '../naviLink.json'

const lData = naviLinks.Description;
const data = DescriptionData;

export default class Description extends React.Component {

	H3Content = () => <h3 id={lData.address}> {data.Header} </h3>;

	Paragraphs1 = () => {
		return data.Paragraphs1.map(listItem => (
			<div>{listItem}</div>
		))
	}

	List = () => {
		return data.List.map(listItem => (
			<li>{listItem}</li>
		))
	}

	Paragraphs2 = () => {
		return data.Paragraphs2.map(listItem => (
			<div>{listItem}</div>
		))
	}

	render() {
		return (
			<div>
				{this.H3Content()}
				<div className="elementScrollable paragraf" id="longDesc">
					{this.Paragraphs1()}
					<ul>
						{this.List()}
					</ul>
					{this.Paragraphs2()}
				</div>
			</div>
		)
	}
}
