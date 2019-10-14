import React from 'react';
import QuickOverview from './Components/QuickOverview';
import Download, {DownloadProps} from './Components/Download';
import Description from './Components/Description';
import Opinions from './Components/Opinions';
import AboutAuthor from './Components/AboutAuthor';
import { ColumnArticle } from '../../components/Column';
import styled from 'styled-components';
import { backgroundColor, mediaTo } from '../../assets/styles';

const StyledMain = styled.main`
   ${mediaTo('tablet')} {
      margin-top: -48px;
   }
   & > ${ColumnArticle} {
      padding: 24px 5%;
      ${backgroundColor('white')}
   }
`;

type MainProps = DownloadProps;

const Main: React.FC<MainProps> = ({policyRef}) => (
   <StyledMain>
      <ColumnArticle>
         <QuickOverview />
         <Download policyRef={policyRef}/>
         <Description />
         <Opinions />
         <AboutAuthor />
      </ColumnArticle>
   </StyledMain>
);

export default Main;
