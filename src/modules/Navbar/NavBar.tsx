import React from 'react';
import { naviLinksArray } from '../../components/data/NaviLink.json';
import Responsive from '../../components/Responsive/Responsive';
import * as P from './parts';
import Column from '../../components/Column/Column';
import Dropdown from '../../components/Dropdown';
import { ToggleType } from '../../components/Dropdown/Dropdown';
import Overlay from '../../components/Overlay';

const fData = naviLinksArray[0];
const data = naviLinksArray.slice(1);

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

   const dropdownLayout = ({ toggle }: ToggleType) => (
      <>
         <P.DropdownLayout>{Links}</P.DropdownLayout>
         <Overlay onClick={toggle} />
      </>
   );

   return (
      <Responsive>
         {({ lessThenOrEqualTo }) => (
            <P.NavWrapper>
               {lessThenOrEqualTo('tablet')
                  ? (
                     <Dropdown trigger={<P.BurgerIconWrapper className="fas fa-align-justify " />}>
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
