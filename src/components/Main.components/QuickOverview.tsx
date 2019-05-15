import * as React from "react";
import * as QuickOverviewData from "./data/Main.content"
import { naviLinks } from '../naviLink.json'
import './styles/QuickOverview.scss'
import './styles/Main.Components.scss'

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

	Image = () => (
		<img
			src={data.Image.srcUrl}
			alt=""
		/>
	)

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
				{this.Image()}
			</div>
		)
	}
}