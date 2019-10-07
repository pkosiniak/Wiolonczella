import React from 'react';
import { naviLinksArray as navLinksArray } from '../../components/data/NaviLink.json';
import Responsive from '../../components/Responsive/Responsive';
import * as P from './parts';
import Column from '../../components/Column/Column';
import Dropdown from '../../components/Dropdown';
import { ToggleType } from '../../components/Dropdown/Dropdown';
import { AnimatedOverlay } from '../../components/Overlay';

const fData = navLinksArray[0];
const data = navLinksArray.slice(1);

export const Nav: React.FC = () => {
   const links = [
      {
         text: <P.StyledHomeIcon className="fas fa-home" />,
         address: fData.address,
         hashAddress: fData.hashAddress,
      },
      ...data
   ];

   const Links = links.map((link, i) => (
      <P.ListItem key={i}>
         <P.NavLinkButton to={link.hashAddress}>
            {link.text}
         </P.NavLinkButton>
      </P.ListItem>
   ));

   const dropdownLayout = ({ toggle, isOpen }: ToggleType) => (
      <>
         <P.DropdownLayout isOpen={isOpen}>{Links}</P.DropdownLayout>
         <AnimatedOverlay isOpen={isOpen} duration={P.duration / 5} onClick={toggle} />
      </>
   );

   return (
      <Responsive>
         {({ lessThenOrEqualTo }) => (
            <P.NavWrapper>
               {lessThenOrEqualTo('tablet')
                  ? (
                     <Dropdown
                        useAnimation
                        trigger={<P.BurgerIconWrapper className="fas fa-align-justify " />}
                     >
                        {dropdownLayout}
                     </Dropdown>
                  ) : (
                     <Column>
                        <P.NavElementsWrapper>
                           {Links}
                        </P.NavElementsWrapper>
                     </Column>
                  )}
            </P.NavWrapper>
         )}
      </Responsive >
   );
};

export default Nav;
