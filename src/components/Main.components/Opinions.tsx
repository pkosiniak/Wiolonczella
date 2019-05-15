import * as React from 'react';
import { opinions } from './data/Opinions.content.json'
import { naviLinks } from '../naviLink.json'
import { OpinionData } from './data/Main.content'
import './styles/Opinions.scss'

const oData = opinions;
const lData = naviLinks.Opinins;
const data = OpinionData;

export default class Opinions extends React.Component {

	H3Content = () => data.Header;

	Lines = (lines: Array<string>) => {
		return (
			lines.map(line => (
				<div>
					{line}
				</div>
			))
		)
	}

	Opinion = (opinion: typeof oData[0]) => {
		return (
			<div>
				<div>
					<h4 className="reviewerName">
						{opinion.name}
					</h4>
					<h5 className="reviewerAbout">
						{opinion.about}
					</h5>
				</div>
				{this.Lines(opinion.lines)}
			</div>
		)
	}

	render() {
		return (
			<div>
				<h3 id={lData.address} > {this.H3Content()}</h3>
				<div >
					{oData.map(opinion => this.Opinion(opinion))}
				</div>
			</div >
		)
	}
}
