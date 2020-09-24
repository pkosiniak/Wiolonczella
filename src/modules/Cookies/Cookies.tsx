import React from 'react';
import { CookiesData } from '../../assets/data/Body.json';
import { navLinks } from '../../assets/data/NavLink.json';
import * as P from './parts';
import Link from '../../components/Link/Link';
import { Icons } from '../../assets/constants';
import { getPosition } from '../../assets/alignment';

const { home, PrivacyPolicy } = navLinks;
const data = CookiesData;

interface CookiesProps {
   policyRef?: React.RefObject<HTMLElement>;
}

interface CookiesState {
   hide: boolean;
   isShown: boolean;
   bannerHeight: number;
}

class Cookies extends React.Component<CookiesProps, CookiesState> {
   state = {
      hide: false,
      isShown: true,
      bannerHeight: 0,
   };

   componentDidMount() {
      document.addEventListener('resize', this.resizeWorker);
      this.resizeWorker();
   }

   componentWillUnmount() {
      this.removeResizeWorker();
   }

   bannerRef = React.createRef<HTMLDivElement>();

   resizeWorker = () => {
      const position = getPosition(this.bannerRef.current);
      if (!position || position.height === this.state.bannerHeight) return;
      this.setState({ bannerHeight: position.height });
   };

   removeResizeWorker = () => document.removeEventListener('resize', this.resizeWorker);

   onClick = () => {
      this.setState({ hide: true });
      setTimeout(
         () => this.setState({ isShown: false }, () => this.removeResizeWorker()),
         P.duration - 1
      );
   };

   // onClickPolicyRef = (event: MouseEvent) => {
   //    // event.preventDefault();
   //    const ref = this.props.policyRef;
   //    if (!ref || !ref.current) return;
   //    ref.current.click();
   // };

   Banner = () => {
      const { isShown, hide } = this.state;
      return isShown && (
         <P.CookiesBanner
            ref={this.bannerRef}
            id="cookiesBaner"
            hide={hide}
            isShown={isShown}
         >
            <P.StyledColumn>
               <P.CookieGroup>
                  <P.CookieIcon
                     icon={Icons.cookies}
                     id="cookieIcon"
                     square={48}
                  />
                  <P.CookieText>
                     {data.Text1}
                     <Link
                        href={PrivacyPolicy.hashAddress}
                     // onClick={this.onClickPolicyRef}
                     >
                        {data.Link}
                     </Link>
                     {data.Text2}
                  </P.CookieText>
               </P.CookieGroup>
               <P.StyledIconButton
                  icon={Icons.close}
                  onClick={this.onClick}
               />
            </P.StyledColumn>
         </P.CookiesBanner>
      );
   };

   render() {
      const { bannerHeight, hide } = this.state;
      return (
         <>
            <P.HomeButton
               href={home.hashAddress}
               square={48}
               icon={Icons.arrowUp}
               height={bannerHeight}
               hide={hide}
            />
            {this.Banner()}
         </>
      );
   }
}

export default Cookies;
