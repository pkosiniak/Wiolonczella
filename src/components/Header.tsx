import * as React from "react";
import './styles/Header.scss'

export default class Header extends React.Component {

	render() {
		return (
			<header id="home">
				<div className="headerBackgroundImage">
					<div className="pageHeaders">
						<h1 id="animatedHeader1">Wszystko kojarzy się z wiolonczelą</h1>
						<h2 id="animatedHeader2">A może wolisz trąbkę? Powiem Ci, jak zacząć grać, nieważne, ile masz lat!</h2>
					</div>
				</div>
			</header>
		)
	}
}