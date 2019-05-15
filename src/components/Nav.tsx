import * as React from "react";
import { naviLinksArray } from "./naviLink.json";
import './styles/Nav.scss'

const fData = naviLinksArray[0];
const data = naviLinksArray.slice(1);

interface IState {
	showOverlay: boolean
}

export default class Nav extends React.Component<{}, IState> {
	constructor() {
		super({});
		this.state = {
			showOverlay: false
		}
	}

	onClickOverlayHandler = () => {
		// this.setState<"showOverlay">({ showOverlay: !this.state.showOverlay });
		const element = document.getElementById('checkManuVisible');
		if (element)
			element.click();
	}

	onClickHandler = () => {
		this.setState<"showOverlay">({ showOverlay: !this.state.showOverlay });
		const element = document.getElementById('navOverlay');
		if (element)
			!this.state.showOverlay
				? element.setAttribute('style', 'display: block')
				: element.setAttribute('style', 'display: none');
	}

	Overlay = () => {
		return (
			<div className="overlay" id="navOverlay" ></div>
		)
	}
	//onClick={this.onClickOverlayHandler}

	Links = () => {
		return (
			data.map(d => (
				<a href={d.hashAddress}>
					<div className="navItems" id={'navItemL' + d.address}>
						{d.text}
					</div>
				</a >
			))
		)
	}

	render() {
		return (
			<>
				<nav >
					<input id="checkManuVisible" type="checkbox" />
					<label
						htmlFor="checkManuVisible"
						className="fas fa-align-justify inlineMoreButton"
						onClick={this.onClickHandler} >
						{this.Overlay()}
					</label>
					<div className="navElements">
						<a href={fData.hashAddress}>
							<i className='fas fa-home navItems'>
							</i>
						</a>
						{this.Links()}
					</div>
				</nav>
			</>
		)
	}
}


// <div className="navItems">W skrócie</div>
// 						<div className="navItems">Opis</div>
// 						<div className="navItems">Pobierz fragment</div>
// 						<div className="navItems"><a href="#Opinie">Opinie</a></div>
// 						<div className="navItems">O Autorce</div>

// <i className='fas fa-home navItems'><NavLink to="/"></NavLink></i>
// 						<div className="navItems"><NavLink to="/shortcut">W skrócie</NavLink></div>
// 						<div className="navItems"><NavLink to="/description">Opis</NavLink></div>
// 						<div className="navItems"><NavLink to="/downloadpart">Pobierz fragment</NavLink></div>
// 						<div className="navItems"><NavLink to="/opinions">Opinie</NavLink></div>
// 						<div className="navItems"><NavLink to="/aboutauthor"> O Autorce</NavLink>x	</div>