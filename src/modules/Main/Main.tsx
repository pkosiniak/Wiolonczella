import * as React from 'react';
import QuickOverview from './Components/QuickOverview';
import Download from './Components/Download';
import Description from './Components/Description';
import Opinions from './Components/Opinions';
import AboutAuthor from './Components/AboutAuthor';
import { naviLinks } from '../../components/data/NaviLink.json';
// import './styles/Main.scss';
import LinkIconButton from '../../components/LinkIconButton/LinkIconButton';

const data = naviLinks.home;

export default class Main extends React.Component {

   render() {
      return (
         <main>
            <LinkIconButton href={data.hashAddress} iconClassName="as fa-angle-up" id="homeUpArrow" />
            <AboutAuthor />
         </main>
      );
   }
}

      // <QuickOverview />
      // <Download />
      // <Description />
      // <Opinions />
