import * as React from 'react';
import PrivacyPolicy from '../../components/PrivacyPolicy';
import { FooterData } from '../../components/data/Body.json';
import './Footer.scss';
import * as P from './parts';
import { Link } from '../../components/Link/Link';

const data = FooterData;

interface IState {
   showPolicy: boolean;
}

export default class Footer extends React.Component<{}, IState> {
   state = {
      showPolicy: false
   };

   OnClickHandler = () => {
      this.setState({ showPolicy: true });

      const element = document.getElementById('privacyPolicy'); // TODO: rethink this
      if (element !== null)
         element.style.display = 'block';
   };

   CreatedBy = () => (
      <>
         {data.created.CreatedBy}
         <Link ninja href={data.created.LinkRef} /*id="githubLink"*/ rel="noopener noreferrer" target="_blank" >
            {data.created.LinkName}
         </Link>
      </>
   );

   render() {
      return (
         <>
            <input type="hidden" id="showPrivacyPolicy" onClick={this.OnClickHandler} />
            {this.state.showPolicy && <PrivacyPolicy />}
            <P.StyledFooter>
               <P.FooterPolicy>
                  {data.links.map((link, i) => (
                     <Link key={i} href="#privacyPolicy" /* id="showPrivacyPolicy" */ onClick={this.OnClickHandler}>
                        {link}
                     </Link>
                  ))}
               </P.FooterPolicy>
               {[data.created.Version, this.CreatedBy(), data.created.Year].map((item, i) => (
                  <P.FooterCreatedInfo key={i}>{item}</P.FooterCreatedInfo>
               ))}
            </P.StyledFooter>
         </>
      );
   }
}
