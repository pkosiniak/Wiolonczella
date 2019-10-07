/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import IconButton from './components/IconButton/IconButton';
import StyledIcon from './components/StyledIcon/StyledIcon';
import Cookies from './modules/Cookies/Cookies';
import Dropdown from './components/Dropdown/DropdownDemo';
import NavBar from './modules/Navbar/NavBar';
import Footer from './modules/Footer/Footer';
import Header from './modules/Header/Header';
import LinkIconButton from './components/LinkIconButton/LinkIconButton';
import HomeUpArrow from './components/HomeUpArrow/HomeUpArrow';
import LoremIpsum from './components/LoremIpsum';
import Modal from './components/Modal/ModalDemo';
import PrivacyPolicy from './modules/PrivacyPolicy/PrivacyPolicyDemo';
import Expandable from './components/Expandable/ExpandableDemo';
import AboutAuthor from './modules/Main/Components/AboutAuthor';
import Description from './modules/Main/Components/Description';
import Opinions from './modules/Main/Components/Opinions';
import QuickOverview from './modules/Main/Components/QuickOverview';

export const Demos = [
   <IconButton className="far fa-times-circle" key={IconButton.name} />,
   <StyledIcon className="far fa-times-circle" key={StyledIcon.name} />,
   // <LinkIconButton href='#' iconClassName="fas fa-angle-up" id="homeUpArrow" key={LinkIconButton.name} />,
   <HomeUpArrow key={HomeUpArrow.name} />,
   <Dropdown key={Dropdown.name} />,
   <Modal key={Modal.name}/>,
   <Expandable key={Expandable.name}/>,
];

export const Modules = [
   <Header key={Header.name} />,
   <NavBar key={NavBar.name} />,
   <PrivacyPolicy key={PrivacyPolicy.displayName} />,
   <LoremIpsum key={LoremIpsum.name} />,
   <QuickOverview key={QuickOverview.name} />,
   <Description key={Description.name} />,
   <Opinions key={Opinions.name} />,
   <AboutAuthor key={AboutAuthor.name} />,
   <Footer key={Footer.name} />,
   <Cookies key={Cookies.name} />,
];

export default Demos;
