import * as React from 'react';
import './styles/Cookies.scss';

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

	render() {
		return (
			<form
				className="cookiesBaner"
				id="cookiesBanerBottom"
				onSubmit={event => this.OnSubmitHandler(event)}
			>

				<i className="fas fa-cookie-bite" id="cookieIcon" />

				<span className="cookieText">
					Odwiedzając tę witrynę akceptuje cookies i innne pierdoły związane z rodo
				</span>
				<button className=" closingButton2" id="closingCoockiesButton">
					<i className="far fa-times-circle animatedButton" id="closingCoockiesButtonIcon" />
				</button>
			</form>
		)
	}
}