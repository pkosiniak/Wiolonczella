import * as React from 'react';
import { DownloadData } from './data/Main.content';
import DownloadAccept from './DownloadAccept';
import { naviLinks } from '../naviLink.json';
import './styles/Download.scss';


const nData = naviLinks.Download;
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

	onCheckBoxClick = () => {
		this.setState<'accept'>({ accept: !this.state.accept })

	}

	onSubmiteEvent = (event: React.FormEvent<HTMLFormElement>) => {
		// alert('klikniete ' + this.state.nameInput + this.state.emailInput);
		event.preventDefault();
		alert("pobieranie");

		// make ajax (axios/fetch) call to php - newsletter.php with form data
		// if ok - take returned data
		// create a download

		// if not - fuck you
	}



	H3Content = () => (
		<h3 className="divDownload" id={nData.address}>
			{data.Header}
		</h3>
	)

	DownloadButton = () => {
		return (
			<button
				className="downloadButton"
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
			<label
				className="inputShortTextLabel"
				htmlFor={id}>
				{label}
				{requiredStar}
			</label>
		)
	}

	ErrorInput = (visible: boolean) => (
		<div
			className="downloadInputBlock inputRequiredText"
			id="errorInputRequired"
			style={
				{ display: visible ? 'block' : 'none' }
			}>
			{data.FiledRequired}
		</div>
	)

	RodoAccept = () => {
		return (
			<div className="RodoAcceptCheckBox">

				<label htmlFor="RodoAcceptCheckBox" className="container">
					<input
						id="RodoAcceptCheckBox"
						type="checkbox"
						className="checkbox"
						defaultChecked={this.state.accept}
						onClick={this.onCheckBoxClick}
						required
					/>
					<span className="checkmark" />
					Wyrażam zgodę na ...
					<div className="inputRequiredStar">*</div>
				</label>
			</div>
		)
	}

	render() {
		return (
			<>
				<div>
					<div className="divDownload">
						{this.H3Content()}
						<form className="downloadComponentsForm" onSubmit={this.onSubmiteEvent}>
							<div className="downloadComponentsFormBody">
								<div className="divDownload">
									{this.DownloadButton()}
								</div>
								<div className="downloadInputRightBlock">
									<div className="downloadInputBlock">
										{this.InputTextLabel(data.Name, 'nameInput', true)}
										{this.InputName('nameInput')}
									</div>
									<div className="downloadInputBlock">
										{this.InputTextLabel(data.Email, 'emailInput', true)}
										{this.InputEmail('emailInput')}
									</div>
								</div>
							</div>
							{this.RodoAccept()}
							{this.ErrorInput(true)}
						</form>
					</div>
				</div>
				<DownloadAccept />
			</>
		)
	}
}

// 
// 