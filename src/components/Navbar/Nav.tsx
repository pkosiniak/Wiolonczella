import React, { useState } from 'react';
import { naviLinksArray } from '../data/NaviLink.json';
import './Nav.scss';
import Responsive from '../Responsive/Reasponsive';
import * as P from './parts';
import { Width } from '../../styles/constants';

const fData = naviLinksArray[0];
const data = naviLinksArray.slice(1);

interface IState {
   showOverlay: boolean;
}

export const Nav: React.FC = () => {
   const [showOverlay, setShowOverlay] = useState(false);

   // onClickOverlayHandler = () => {
   //    const element = document.getElementById('checkManuVisible');
   //    if (element) {
   //       element.click();
   //    }
   // };

   const onClickHandler = () => {
      setShowOverlay((prevState) => !prevState);
      // setState();
      // const element = document.getElementById('navOverlay');
      // if (element) {
      //    !state.showOverlay
      //       ? element.setAttribute('style', 'display: block')
      //       : element.setAttribute('style', 'display: none');
      // }
   };

   // Overlay = () => (<div className="overlay" id="navOverlay" />);

   const Links = (
      <>
         <P.StyledNavLink href={fData.hashAddress}>
            <P.StyledHomeIcon className="fas fa-home navItems" />
         </P.StyledNavLink>
         {data.map((d, i) => (
            <P.StyledNavLink href={d.hashAddress} key={i}>
               <P.StyledNavItem className="navItems" key={i}>
                  {d.text}
               </P.StyledNavItem>
            </P.StyledNavLink>
         ))}
      </>
   );

   return (
      <Responsive>
         {({ device }) => (
            <P.NavWrapper id="navBar">
               {device.width <= Width.tablet && (
                  <>
                     <P.Mobile.StyledCheckBox id="checkMenuVisible" type="checkbox" />
                     <P.Mobile.InlineMorButton
                        htmlFor="checkMenuVisible"
                        className="fas fa-align-justify "
                        onClick={onClickHandler}
                     >
                        {showOverlay && <P.Mobile.Overlay
                           id="navOverlay"
                        />}
                     </P.Mobile.InlineMorButton>
                  </>
               )}
               <P.NavElementsWrapper
                  className="navElements"
               >
                  {Links}
               </P.NavElementsWrapper>
            </P.NavWrapper>
         )}
      </Responsive>
   );
};

export default Nav;
