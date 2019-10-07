import React from 'react';
import * as QuickOverviewData from '../../../../components/Main.components/data/Main.content';
import { naviLinks } from '../../../../components/data/NaviLink.json';
// import './styles/QuickOverview.scss';
// import './styles/Main.Components.scss';
import styled from 'styled-components';
import { mediaTo } from '../../../../assets/styles';

const lData = naviLinks.QuickOverview;
const data = QuickOverviewData.QuickOverviewData;

const Wrapper = styled.section``;
const H3 = styled.h3``;
const H4 = styled.h4``;
const Ul = styled.ul``;
const Li = styled.li``;
const InnerWrapper = styled.div``;
const Image = styled.img``;

// TODO: Description!!
const Paragraph = styled.p`
   margin: 10px;
   text-align: justify;
   ${mediaTo('sTablet')} {
      margin-left: 0px;
      text-align: left;
   }
`;

const QuickOverview: React.FC = () => (
   <>
      <Wrapper id={lData.address}>
         {data.Header.map((headers, i) => (
            <H3 key={'h3' + i}>{headers}</H3>
         ))}
         {data.Paragraphs.map((lines, i) => (
            <Paragraph key={'p' + i}>{lines}</Paragraph>
         ))}
         <H4>{data.Header2}</H4>
         <Ul>
            {data.List.map((listItem) => (
               <Li key={'liL' + listItem}>{listItem}</Li>
            ))}
         </Ul>
      </Wrapper>
      <Image src={data.Image.srcUrl} alt="" />
   </>
);

export default QuickOverview;
