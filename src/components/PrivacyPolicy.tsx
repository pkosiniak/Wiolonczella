import * as React from 'react';
import { Policy } from './data/Policy.json'
import './styles/PrivacyPolicy.scss';

const data = Policy;

class PrivacyPolicy extends React.Component {
	// constructor(props: IProps) {
	// 	super(props);
	// }

	OnSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = document.getElementById('privacyPolicy');
		if (form !== null)
			form.style.display = 'none';
	}

	Header = () => (
		<div className="overlaidFormHeader">
			<span>
				<h2 id="policyHeader">{data.Header}</h2>
			</span>
			<button className="closingButton" id="closePolicyButton">
				<i className="far fa-times-circle animatedButton" id="closePolicyButtonIcon" />
			</button>
		</div>
	);

	Body = () => (
		<div className="elementScrollable">
			{data.Text.HeaderRodo.map(hr => (<h4 key={"keyL" + hr}>{hr}</h4>))}
			{data.Text.TextRodo.map(tr => (<p key={"keyL" + tr}>{tr}</p>))}
			{data.Text.HeaderCoocies.map(hc => (<h4 key={"keyL" + hc}>{hc}</h4>))}
			{data.Text.TextCookies.map(tc => (<p key={"keyL" + tc}>{tc}</p>))}
		</div>
	)

	render() {
		return (
			<div className="overlay" id="privacyPolicy">
				<form
					className="overlaidForm"
					onSubmit={this.OnSubmitEvent}
				>
					{this.Header()}
					<div className="ovarlaidFormBody">
						{this.Body()}
					</div>
				</form>
			</div>
		);
	}
}

export default PrivacyPolicy;