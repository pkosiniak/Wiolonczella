import * as React from 'react';
import PrivacyPolicy from '../PrivacyPolicy';
import { FooterData } from '../data/Body.json';
import './Footer.scss';
import * as P from './parts';

const data = FooterData;

interface IState {
   showPolicy: boolean;
}

export default class Footer extends React.Component<{}, IState> {
   constructor() {
      super({});
      this.state = {
         showPolicy: false
      };
   }

   OnClickHandler = () => {
      this.setState({ showPolicy: true });

      const element = document.getElementById('privacyPolicy'); // TODO: rethink this
      if (element !== null)
         element.style.display = 'block';
   };

   Policy = (data.links.map((link, i) => (
      <P.FooterLinks
         href="#privacyPolicy"
         id="showPrivacyPolicy"
         onClick={this.OnClickHandler}
         key={i}
      >
         {link}
      </P.FooterLinks>
   )));

   CreatedBy = () => (
      <>
         {data.created.CreatedBy}
         <P.FooterLinks
            href={data.created.LinkRef}
            id="githubLink"
            rel="noopener noreferrer"
            target="_blank"
         >
            {data.created.LinkName}
         </P.FooterLinks>
      </>
   );

   render() {
      return (
         <>
            <input type="hidden" id="showPrivacyPolicy" onClick={this.OnClickHandler} />
            {this.state.showPolicy && <PrivacyPolicy />}
            <P.StyledFooter>
               <P.FooterPolicy>
                  {this.Policy}
               </P.FooterPolicy>
               {[data.created.Version, this.CreatedBy(), data.created.Year].map((item, i) => (
                  <P.FooterCreatedInfo key={i}>{item}</P.FooterCreatedInfo>
               ))}
            </P.StyledFooter>
         </>
      );
   }
}
