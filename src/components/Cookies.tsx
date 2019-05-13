import * as React from 'react';

export default class Cookies extends React.Component {

	OnSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// document.getElementById('cookiesBaner').setAttribute('hidden', 'true');
	}

	render() {
		return (
			<form id="cookiesBaner" onSubmit={event => this.OnSubmitHandler(event)}>
				<img src="" />
				<span>
					Odwiedzając tę witrynę akceptuje cookies i innne pierdoły związane z rodo
				</span>
				<button>X</button>
			</form>
		)
	}
}