import * as React from 'react'
import './styles/Footer.scss'
// import PrivacyPolicy from './PrivacyPolicy';

export default class Footer extends React.Component {

	OnClickHandler = () => {
		const element = document.getElementById('privacyPolicy')
		if (element === null) return;
		element.style.display = "block";
	}

	PrivacyPolicy = () => {

		return <a
			href="#privacyPolicy"
			onClick={this.OnClickHandler}>
			Nasz regulamin
		</a>

	}


	render() {

		return (
			<footer>
				<div className="footerPolicy">
					{this.PrivacyPolicy()}
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
		)
	}
}
// >>> FOOTER >>> PUSTY >>> Jakieś pewnie informacje prawnopodobne, kontakt, regulamin (?) etc.
//         		<br /> gdzieś trzeba będzie wsadzić informacje o rodoKukis.