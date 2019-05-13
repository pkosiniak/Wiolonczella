import * as React from 'react';
import { opinions } from './Opinions.content.json'
import { naviLinks } from '../naviLink.json'
import { OpinionData } from './Main.content'

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
					<h5>
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
				<div className="elementScrollable">
					{oData.map(opinion => this.Opinion(opinion))}
				</div>
			</div >
		)
	}
}
