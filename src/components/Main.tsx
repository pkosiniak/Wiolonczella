import * as React from "react";
import QuickOverview from "./Main.components/QuickOverview";
import Download from "./Main.components/Download";
import Description from "./Main.components/Description";
import Opinions from "./Main.components/Opinions";
import AboutAuthor from "./Main.components/AboutAuthor";
// import { Route, Switch, BrowserRouter } from "react-router-dom";


export default class Main extends React.Component {
	render() {
		return (
			<main>
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