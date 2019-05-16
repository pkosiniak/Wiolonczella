import * as React from "react";
import QuickOverview from "./Main.components/QuickOverview";
import Download from "./Main.components/Download";
import Description from "./Main.components/Description";
import Opinions from "./Main.components/Opinions";
import AboutAuthor from "./Main.components/AboutAuthor";
import { naviLinks } from './data/NaviLink.json';
import './styles/Main.scss';


const data = naviLinks.home


export default class Main extends React.Component {

	HomeUpArrowButton = () => {
		return (
			<a href={data.hashAddress}>
				<button
					className="fas fa-angle-up animatedButton"
					id="homeUpArrow"
				/>
			</a>
		)
	}

	render() {
		return (
			<main>
				{this.HomeUpArrowButton()}
				<QuickOverview />
				<Download />
				<Description />
				<Opinions />
				<AboutAuthor />
			</main>
		)
	}
}

// <Route path="/shortcut" component={QuickOverview} > <QuickOverview /> </Route>
// 						<Route path="/description" component={Download} />
// 						<Route path="/downloadpart" component={Description} />
// 						<Route path="/opinions" component={Opinions} />
// 						<Route path="/aboutauthor" component={AboutAuthor} />