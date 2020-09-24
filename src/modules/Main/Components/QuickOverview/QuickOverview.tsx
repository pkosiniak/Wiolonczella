import React, { Fragment } from 'react';
import * as QuickOverviewData from '../../../../assets/data/Main.content';
import { navLinks } from '../../../../assets/data/NavLink.json';
import styled from 'styled-components';
import { mediaTo, mediaFrom } from '../../../../assets/styles';
import Styled from '../../../../components/Styles';

const lData = navLinks.QuickOverview;
const data = QuickOverviewData.QuickOverviewData;

const Wrapper = Styled.section;
const H3 = Styled.h3;
const H4 = Styled.h4;
const Ul = Styled.ul;
const Li = Styled.li;
const P = Styled.p;
const Image = styled.img`
   width: 60%;
   ${mediaTo('mobile')}{
      width: 80%;
   }
   ${mediaFrom(2000)} {
      width: 40%;
   }
`;

const QuickOverview: React.FC = () => (
   <Wrapper id={lData.address}>
      <H3>
         {data.Header.map((headers, i) => (
            <Fragment key={i}>
               {headers}
               <br />
            </Fragment>
         ))}
      </H3>
      {data.Paragraphs.map((lines, i) => (
         <P key={'p' + i}>{lines}</P>
      ))}
      <H4>{data.Header2}</H4>
      <Ul>
         {data.List.map((listItem) => (
            <Li key={'liL' + listItem}>{listItem}</Li>
         ))}
      </Ul>
      <Image src={data.Image.srcUrl} alt="" />
   </Wrapper>
);

export default QuickOverview;
