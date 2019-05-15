import * as React from 'react';
import { DownloadData } from './data/Main.content';

// const data = DownloadData;

// interface IProps {
// 	nameInput: string;
// 	emailInput: string;
// }

// interface IState {
// 	// nameInput: string;
// 	// emailInput: string;
// }


export default class DownloadAccept extends React.Component { //<IProps, IState>
	// constructor(props: IProps) {
	// super(props);
	// }

	OnSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const acceptForm = document.getElementById('acceptDownloadPrivacyPolicy');
		if (acceptForm !== null)
			acceptForm.setAttribute('hidden', 'true');
	}

	OnClickAccept = () => {
		alert('rozpocznij pobieranie');
		//wyślij POST do bazy danych 
		//Wyślij GET z fragmentem
		//poczekaj na odpowiedź
	}

	HeaderDA = () => {
		return (
			<>
				<h2>RODO</h2>
				<button>X</button>
			</>
		)
	}

	BodyDA = () => {
		return (
			<div>
				TEKSTY O RODO \n w kilku linijkach\n bo czemu nie
			</div>
		)
	}

	FooterDA = () => {

		return (
			<div className="acceptButtonsOverlay">
				{this.AcceptButton()}
				{this.CancelButton()}
			</div>
		)
	}

	AcceptButton = () => {
		return (
			<button
				onClick={this.OnClickAccept}
			>
				Zgadzam się i pobieram!
			</button>
		)
	}

	CancelButton = () => {
		return (
			<button
				onClick={() => { }}
			>
				Nie zgadzam się.
			</button>
		)
	}

	render() {

		return (
			<form id="acceptDownloadPrivacyPolicy" onSubmit={this.OnSubmitEvent} hidden>
				<div className="overlay" />
				<div className="acceptDownload">
					{this.HeaderDA()}
					{this.BodyDA()}
					{this.FooterDA()}
				</div>
			</form>
		)
	}
}