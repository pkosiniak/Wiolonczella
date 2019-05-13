import * as React from "react";
import * as QuickOverviewData from "./Main.content"
import { naviLinks } from '../naviLink.json'

const lData = naviLinks.QuickOverview;
const data = QuickOverviewData.QuickOverviewData;

export default class QuickOverview extends React.Component {

	H3Content = () => {
		return data.Header.map(headers => (<div>{headers}</div>))
	}

	Paragraphs = () => {
		return data.Paragraphs.map(lines => (
			<div className="paragraph">
				{lines}
			</div>
		))
	}

	H4Content = () => data.Header2;

	List = () => {
		return data.List.map(listItem => (
			<li key={listItem}>{listItem}</li>
		))
	}

	render() {
		return (
			<div id={lData.address}>
				<h3>
					{this.H3Content()}
				</h3>
				<div>
					{this.Paragraphs()}
				</div>
				<h4>
					{this.H4Content()}
				</h4>
				<>
					{this.List()}
				</>
				<img src="https://d30itml3t0pwpf.cloudfront.net/api/v3/medias/13946557/image/opt/776x1149%3E/1551898978-0407949b" />
			</div>
		)
	}
}