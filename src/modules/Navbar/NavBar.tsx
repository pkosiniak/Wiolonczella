import React from 'react';
import { naviLinksArray as navLinksArray } from '../../components/data/NaviLink.json';
import Responsive from '../../components/Responsive/Responsive';
import * as P from './parts';
import Column from '../../components/Column/Column';
import Dropdown from '../../components/Dropdown';
import { ToggleType } from '../../components/Dropdown/Dropdown';
import { AnimatedOverlay } from '../../components/Overlay';
import { Icons } from '../../assets/constants';

const fData = navLinksArray[0];
const data = navLinksArray.slice(1);

export const Nav: React.FC = () => {
   const links = (height?: number) => [
      {
         text: <P.StyledHomeIcon noDefaultStyle icon={Icons.home} rectangle={{ height }} className="fas fa-home" />,
         address: fData.address,
         hashAddress: fData.hashAddress,
      },
      ...data
   ];

   const Links = (height?: number) => links(height).map((link, i) => (
      <P.ListItem key={i}>
         <P.NavLinkButton to={link.hashAddress} height={!height && i === 0 ? 36 : undefined}>
            {link.text}
         </P.NavLinkButton>
      </P.ListItem>
   ));

   const dropdownLayout = ({ toggle, isOpen }: ToggleType) => (
      <>
         <P.DropdownLayout isOpen={isOpen}>{Links()}</P.DropdownLayout>
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
                        trigger={<P.BurgerIconWrapper icon={Icons.burger}  />}
                     >
                        {dropdownLayout}
                     </Dropdown>
                  ) : (
                     <Column>
                        <P.NavElementsWrapper>
                           {Links(16)}
                        </P.NavElementsWrapper>
                     </Column>
                  )}
            </P.NavWrapper>
         )}
      </Responsive >
   );
};

export default Nav;
