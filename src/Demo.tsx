/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import IconButton from './components/IconButton/IconButton';
import Icon from './components/Icon/Icon';
import LinkIconButton from './components/LinkIconButton/LinkIconButton';
import Checkbox from './components/Checkbox/CheckboxDemo';
import { Layout as Grid } from './components/Grid';
import Dropdown from './components/Dropdown/DropdownDemo';
import Modal from './components/Modal/ModalDemo';
import Expandable from './components/Expandable/ExpandableDemo';
import Cookies from './modules/Cookies/Cookies';
import NavBar from './modules/Navbar/NavBar';
import Footer from './modules/Footer/Footer';
import Main from './modules/Main';
import PrivacyPolicy from './modules/PrivacyPolicy/PrivacyPolicyDemo';
import AboutAuthor from './modules/Main/Components/AboutAuthor';
import Description from './modules/Main/Components/Description';
import Opinions from './modules/Main/Components/Opinions';
import QuickOverview from './modules/Main/Components/QuickOverview';
import Header from './modules/Header/Header';
import LoremIpsum from './components/LoremIpsum';
import App from './App';
import { Icons } from './assets/constants';

const policyRef = React.createRef<HTMLElement>();

export const Demos = [
   <IconButton icon={Icons.close} key={IconButton.name} />,
   <Icon icon={Icons.cookies} key={Icon.name} />,
   <LinkIconButton href="#" icon={Icons.arrowUp} id="homeUpArrow" key={LinkIconButton.name} />,
   <Checkbox key={Checkbox.name} />,
   <Grid key="GridDemo" />,
   <Dropdown key={Dropdown.name} />,
   <Modal key={Modal.name} />,
   <Expandable key={Expandable.name} />,
];

export const Modules = [
   <App key={App.name} />,
   <Header key={Header.name} />,
   <NavBar key={NavBar.name} />,
   <Main key={Main.name} policyRef={policyRef} />,
   <PrivacyPolicy key={PrivacyPolicy.displayName} />,
   <LoremIpsum key={LoremIpsum.name} />,
   <QuickOverview key={QuickOverview.name} />,
   <Description key={Description.name} />,
   <Opinions key={Opinions.name} />,
   <AboutAuthor key={AboutAuthor.name} />,
   <Footer key={Footer.name} policyRef={policyRef} />,
   <Cookies key={Cookies.name} policyRef={policyRef} />,
];

export default Demos;
