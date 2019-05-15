import * as React from 'react'
import './styles/Footer.scss'
import PrivacyPolicy from './PrivacyPolicy';

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
			<a
				href="#privacyPolicy"
				id="showPrivacyPolicy"
				onClick={this.OnClickHandler}
				className="footerLinks"
			>
				Nasz regulamin
				</a>

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
						version 0.5.0 beta
				</div>
					<div className="footerCreatedInfo createdBy">
						Created by Paweł Kosiniak
				</div>
					<div className="footerCreatedInfo">
						2019
				</div>
				</footer>
			</>
		)
	}
}
// >>> FOOTER >>> PUSTY >>> Jakieś pewnie informacje prawnopodobne, kontakt, regulamin (?) etc.
//         		<br /> gdzieś trzeba będzie wsadzić informacje o rodoKukis.