import * as React from 'react';
import { HeaderData } from '../data/Body.json';
import * as P from './Headers.parts';

const data = HeaderData;

export const Header: React.FC = () => (
   <P.HeaderWrapper id="home">
      <P.HeaderBackgroundImage>
         <P.PageHeadersWrapper className="pageHeaders">
            <P.MainTitle id="animatedHeader1">{data.Header1}</P.MainTitle>
            <P.Subtitle id="animatedHeader2">{data.Header2}</P.Subtitle>
         </P.PageHeadersWrapper>
      </P.HeaderBackgroundImage>
   </P.HeaderWrapper>
);

export default Header;
