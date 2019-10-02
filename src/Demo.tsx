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

export const Demos = [
   <IconButton className="far fa-times-circle" key={IconButton.name} />,
   <StyledIcon className="far fa-times-circle" key={StyledIcon.name} />,
   // <LinkIconButton href='#' iconClassName="fas fa-angle-up" id="homeUpArrow" key={LinkIconButton.name} />,
   <HomeUpArrow key={HomeUpArrow.name} />,
   <Dropdown key={Dropdown.name} />
];

export const Modules = [
   <Header key={Header.name} />,
   <NavBar key={NavBar.name}/>,
   <LoremIpsum key={LoremIpsum.name} />,
   <Footer key={Footer.name} />,
   <Cookies key={Cookies.name} />,
];

export default Demos;
