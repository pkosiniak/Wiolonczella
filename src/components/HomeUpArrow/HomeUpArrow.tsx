import React from 'react';
import styled from 'styled-components';
import LinkIconButton from '../LinkIconButton/LinkIconButton';
import { naviLinks } from '../data/NaviLink.json';
import { mediaTo } from '../../assets/styles';

const data = naviLinks.home;

const StyledHomeUpArrow = styled(LinkIconButton)`
   position: fixed;
   right: 25px;
   bottom: 70px;
   ${mediaTo('tablet')} {
      right: 5px;
   }
`;

const HomeUpArrow: React.FC = () => (
   <StyledHomeUpArrow
      href={data.hashAddress}
      iconClassName="fas fa-angle-up"
      square={48}
   // id="homeUpArrow"
   />
);

export default HomeUpArrow;
