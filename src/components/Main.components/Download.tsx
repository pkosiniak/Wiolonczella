import * as React from 'react';
import { DownloadData } from './Main.content';
import DownloadAccept from './DownloadAccept';
import { naviLinks } from '../naviLink.json'

const lData = naviLinks.Download;
const data = DownloadData;

interface IProps { }

interface IState {
	nameInput: string;
	emailInput: string;
	accept: boolean;
}


export default class Download extends React.Component<IProps, IState> {

	constructor(props: IProps) {
		super(props);
		this.state = {
			nameInput: '',
			emailInput: '',
			accept: false
		}
	}

	onNameInput = (name: string) => {
		this.setState<"nameInput">({ nameInput: name })
	}

	onEmailInput = (email: string) => {
		this.setState<"emailInput">({ emailInput: email })
	}

	onSubmiteEvent = (event: React.FormEvent<HTMLFormElement>) => {
		// alert('klikniete ' + this.state.nameInput + this.state.emailInput);
		event.preventDefault();

		// const cb = document.getElementById('RodoAcceptCheckBox');
		// if (cb === null)
		// 	return;
		// cb.

		// const acceptForm = document.getElementById('acceptDownloadPrivacyPolicy');
		// if (acceptForm !== null)
		// 	acceptForm.removeAttribute('hidden');


		alert("pobieranie");

		// make ajax (axios/fetch) call to php - newsletter.php with form data
		// if ok - take returned data
		// create a download

		// if not - fuck you
	}

	CheckBoxOnClick = () => {
		this.setState<'accept'>({ accept: !this.state.accept })

	}

	H3Content = () => (
		<h3 className="divDownload" id={lData.address}>
			{data.Header}
		</h3>
	)

	DownloadButton = () => {
		// const onClickHandler = () => {
		// 	document.getElementById('nameInput').innerText !== ''
		// 		&& document.getElementById('emailInput').innerText !== ''

		// };

		return (
			<button
				className="buttonDownload"
			// onClick={onClickHandler}
			>
				{data.ButtonText}
			</button>
		)
	}

	InputName = (id: string) => {
		return (
			<input
				className="inputShortText"
				type="text"
				id={id}
				value={this.state.nameInput}
				onChange={event => this.onNameInput(event.target.value)}
				required
			/>
		)
	}

	InputEmail = (id: string) => {
		return (
			<input
				className="inputShortText"
				type="email"
				id={id}
				value={this.state.emailInput}
				onChange={event => this.onEmailInput(event.target.value)}
				required
			/>
		)
	}

	InputTextLabel = (label: string, id: string, required: boolean = true) => {
		const requiredStar = required
			? <div className="inputRequiredStar">*</div>
			: undefined;
		return (
			<label htmlFor={id}>
				{label}
				{requiredStar}
			</label>
		)
	}

	ErrorInput = (visible: boolean) => (
		<div
			className="divInputRequiredText"
			id="errorInputRequired"
			style={
				{ display: visible ? 'block' : 'none' }
			}>
			{data.FiledRequired}
		</div>
	)

	RodoAccept = () => {
		return (
			<div>
				<input
					id="RodoAcceptCheckBox"
					type="checkbox"
					defaultChecked={this.state.accept}
					onClick={this.CheckBoxOnClick}
					required
				/>
				<label htmlFor="RodoAcceptCheckBox">Wyrażam zgodę na ...</label>
			</div>
		)
	}

	render() {
		return (
			<>
				<div>
					<div className="divDownload">
						{this.H3Content()}
						<form className="divOverDowbloadComponents" onSubmit={this.onSubmiteEvent}>
							<div className="divDownload">
								{this.DownloadButton()}
							</div>
							<div className="divOverTextBoxes">
								<div className="divDownloadButtonsAndDesc">
									{this.InputTextLabel(data.Name, 'nameInput', true)}
									{this.InputName('nameInput')}
								</div>
								<div className="divDownloadButtonsAndDesc">
									{this.InputTextLabel(data.Email, 'emailInput', true)}
									{this.InputEmail('emailInput')}
								</div>
								{this.ErrorInput(false)}
							</div>
							{this.RodoAccept()}
						</form>
					</div>
				</div>
				<DownloadAccept />
			</>
		)
	}
}