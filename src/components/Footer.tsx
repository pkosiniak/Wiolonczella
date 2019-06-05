import * as React from 'react'
import PrivacyPolicy from './PrivacyPolicy';
import { FooterData } from './data/Body.json';
import './styles/Footer.scss';

const data = FooterData;

interface iState {
	showPolicy: boolean;
}

export default class Footer extends React.Component<{}, iState> {
	constructor() {
		super({});
		this.state = {
			showPolicy: false
		}
	}

	OnClickHandler = () => {
		this.setState({
			showPolicy: true
		})

		const element = document.getElementById('privacyPolicy')
		if (element !== null)
			element.style.display = "block";
	}

	RenderPrivacyPolicy = () => {
		if (this.state.showPolicy)
			return <PrivacyPolicy />;
	}

	Policy = () => {
		return (
			data.links.map(link => (
				<a
					href="#privacyPolicy"
					id="showPrivacyPolicy"
					onClick={this.OnClickHandler}
					className="footerLinks"
					key={"keyL" + link}
				>
					{link}
				</a>
			))
		)
	}

	CreatedBy = () => {
		return (
			<>
				{data.created.CreatedBy}
				<a
					href={data.created.LinkRef}
					id="githubLink"
					className="footerLinks"
					rel="noopener noreferrer"
					target="_blank"
				>
					{data.created.LinkName}
				</a>
			</>
		)
	}

	render() {
		return (
			<>
				<input type="hidden" id="showPrivacyPolicy" onClick={this.OnClickHandler} />
				{this.RenderPrivacyPolicy()}
				<footer>
					<div className="footerPolicy">
						{this.Policy()}
					</div>
					<div className="footerCreatedInfo">
						{data.created.Verios}
					</div>
					<div className="footerCreatedInfo createdBy">
						{this.CreatedBy()}
					</div>
					<div className="footerCreatedInfo">
						{data.created.Year}
					</div>
				</footer>
			</>
		)
	}
}