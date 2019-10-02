import React, { useState } from 'react';
import { CookiesData } from '../../components/data/Body.json';
// import './Cookies.scss';
import * as P from './parts';
import { Link } from '../../components/Link/Link';

const data = CookiesData;

const Cookies: React.FC = () => {
   const [hide, setHide] = useState<boolean>(false);
   const [isShown, setIsShown] = useState<boolean>(true);

   const onClick = () => {
      setHide(true);
      setTimeout(() => setIsShown(false), 999);

      const homeUpButton = document.getElementById('homeUpArrow');
      if (homeUpButton === null) return;
      homeUpButton.setAttribute('style', 'bottom:25px');
   };

   const OnClickHandler = () => {
      const handler = document.getElementById('showPrivacyPolicy');
      if (handler !== null)
         handler.click();
   };

   return isShown
      ? (
         <P.CookiesBanner id="cookiesBanerBottom" hide={hide} isShown={isShown}>
            <P.StyledColumn>
               <P.CookieGroup>
                  <P.CookieIcon className="fas fa-cookie-bite" id="cookieIcon" />
                  <P.CookieText className="cookieText">
                     {data.Text1}
                     <Link href="#privacyPolicy" onClick={OnClickHandler} >
                        {data.Link}
                     </Link>
                     {data.Text2}
                  </P.CookieText>
               </P.CookieGroup>
               <P.StyledIconButton
                  className={'far fa-times-circle'}
                  // id={'closingCoockiesButtonIcon'}
                  onClick={onClick}
               />
            </P.StyledColumn>
         </P.CookiesBanner>
      )
      : <></>;
};

export default Cookies;

// <button className=" closingButton" id="closingCoockiesButton">
//                <i className="far fa-times-circle animatedButton" id="closingCoockiesButtonIcon" />
//             </button>
