import React, { useState } from 'react';
import { naviLinksArray } from '../../components/data/NaviLink.json';
import Responsive from '../../components/Responsive/Responsive';
import * as P from './parts';
import Column from '../../components/Column/Column';

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
            <P.StyledHomeIcon className="fas fa-home " />
         </P.StyledNavLink>
         {data.map((d, i) => (
            <P.StyledNavLink href={d.hashAddress} key={i}>
               <P.StyledNavItem key={i}>
                  {d.text}
               </P.StyledNavItem>
            </P.StyledNavLink>
         ))}
      </>
   );

   return (
      <Responsive>
         {({ lessThen }) => (
            <P.NavWrapper >
               {lessThen('tablet')
                  ? (
                     <P.Mobile.StyledBurgerLabel
                        htmlFor="checkMenuVisible"
                        className="fas fa-align-justify "
                     >
                        <P.Mobile.HiddenCheckBox
                           id="checkMenuVisible"
                           type="checkbox"
                           onClick={onClickHandler}
                        />
                        {showOverlay && (
                           <>
                              {Links}
                              <P.Mobile.Overlay />
                           </>
                        )}
                     </P.Mobile.StyledBurgerLabel>
                  ) : (
                     <Column>
                        <P.NavElementsWrapper>
                           {Links}
                        </P.NavElementsWrapper>
                     </Column>
                  )}
            </P.NavWrapper>
         )}
      </Responsive>
   );
};

export default Nav;
