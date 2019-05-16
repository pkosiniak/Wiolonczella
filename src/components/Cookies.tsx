import * as React from 'react';
import { CookiesData } from './data/Body.json'
import './styles/Cookies.scss';

const data = CookiesData;

export default class Cookies extends React.Component {

	OnSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const cookiesBaner = document.getElementById('cookiesBanerBottom');
		if (cookiesBaner === null) return;
		cookiesBaner.setAttribute('class', 'cookiesBaner cookiesBanerAnimation');
		// cookiesBaner.setAttribute('hidden', 'true');

		const homeUpButton = document.getElementById('homeUpArrow');
		if (homeUpButton === null) return;
		homeUpButton.setAttribute('style', 'bottom:25px');

		setTimeout(() => { cookiesBaner.setAttribute('class', 'cookiesBanerHide'); }, 999);
	}

	OnClickHandler = () => {
		const handler = document.getElementById('showPrivacyPolicy');
		if (handler !== null)
			handler.click();
	}

	render() {
		return (
			<form
				className="cookiesBaner"
				id="cookiesBanerBottom"
				onSubmit={event => this.OnSubmitHandler(event)}
			>

				<i className="fas fa-cookie-bite" id="cookieIcon" />

				<span className="cookieText">
					{data.Text1}
					<a
						href="#privacyPolicy"
						onClick={this.OnClickHandler}
						className="footerLinks"
					>
						{data.Link}
					</a>
					{data.Text2}
				</span>
				<button className=" closingButton" id="closingCoockiesButton">
					<i className="far fa-times-circle animatedButton" id="closingCoockiesButtonIcon" />
				</button>
			</form>
		)
	}
}