import * as React from 'react';
import './styles/PrivacyPolicy.scss';


class PrivacyPolicy extends React.Component {

	OnSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = document.getElementById('privacyPolicy');
		if (form !== null)
			form.style.display = 'none';
	}

	Header = () => (
		<div className="overlaidFormHeader">
			<span>
				<h2 id="policyHeader">Regulamin	Strony</h2>
			</span>
			<button className="closingButton " id="closePolicyButton">
				<i className="far fa-times-circle animatedButton" id="closePolicyButtonIcon"/>
			</button>
		</div>
	);

	Body = () => (
		<div className="elementScrollable">
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
			some content some content some content some content
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