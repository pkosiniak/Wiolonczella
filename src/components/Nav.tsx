import * as React from "react";
import { naviLinksArray } from "./naviLink.json"

const fData = naviLinksArray[1];
const data = naviLinksArray.slice(1);

export default class Nav extends React.Component {

	Overlay = () => {
		return (
			<div className="overlay" style={{
				display: "none",
				position: "fixed",
				top: "0px",
				left: "0px",
				width: "100%",
				height: "100%",
				backgroundColor: "rgb(15, 15, 15, 0.7)",
				zIndex: 900,

			}}></div>
		)
	}

	Links = () => {
		return (
			data.map(d => (
				<div className="navItems">
					<a href={d.hashAddress}>{d.text}</a>
				</div>
			))
		)
	}

	render() {
		return (
			<>
				{this.Overlay()}
				<nav style={{
					position: "sticky",
					zIndex: 1000
				}}>
					<input id="checkManuVisible" type="checkbox" />
					<label htmlFor="checkManuVisible" className="fas fa-align-justify inlineMoreButton" />
					<div className="navElements">
						<i className='fas fa-home navItems'>
							<a href={fData.hashAddress}>
							</a>
						</i>
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