import React from 'react';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import { FooterData } from '../../assets/data/Body.json';
import * as P from './parts';
import Link from '../../components/Link/Link';
import { ToggleType } from '../../components/Modal/Modal';

const data = FooterData;

interface FooterProps {
   policyRef: React.RefObject<HTMLSpanElement>;
}

interface FooterState {
   showPolicy: boolean;
}

class Footer extends React.Component<FooterProps, FooterState> {
   state = {
      showPolicy: false
   };

   onClickHandler = () => {
      this.setState({ showPolicy: true });
   };

   CreatedBy = () => (
      <>
         {data.created.CreatedBy}
         <Link
            ninjaActive
            href={data.created.LinkRef}
            rel="noopener noreferrer"
            target="_blank"
         >
            {data.created.LinkName}
         </Link>
      </>
   );

   render() {
      const { policyRef } = this.props;
      return (
         <P.StyledFooter>
            <PrivacyPolicy >
               {({ toggle }: ToggleType) =>
                  <P.FooterPolicy id="pp" >
                     <P.LinkWrapper onClick={toggle} ref={policyRef}>
                        <Link
                           to="#privacyPolicy"
                           onClick={this.onClickHandler}
                        >
                           {data.links[0]}
                        </Link>
                     </P.LinkWrapper>
                  </P.FooterPolicy>}
            </PrivacyPolicy>
            <P.TextWrapper>
               {[
                  data.created.Version,
                  this.CreatedBy(),
                  data.created.Year,
               ].map((item, i) => (
                  <P.P key={i}>{item}</P.P>
               ))}
            </P.TextWrapper>
         </P.StyledFooter>
      );
   }
}

export default Footer;
