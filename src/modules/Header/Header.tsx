import React from 'react';
import { HeaderData } from '../../assets/data/Body.json';
import * as P from './parts';

const data = HeaderData;

export const Header: React.FC = () => (
   <P.HeaderWrapper id="home">
      <P.HeaderBackgroundImage>
         <P.PageHeadersWrapper>
            <P.MainTitle>{data.Header1}</P.MainTitle>
            <P.Subtitle>{data.Header2}</P.Subtitle>
         </P.PageHeadersWrapper>
      </P.HeaderBackgroundImage>
   </P.HeaderWrapper>
);

export default Header;
