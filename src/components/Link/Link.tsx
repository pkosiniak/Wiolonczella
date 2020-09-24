import React, { useEffect, useState, AnchorHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import { color, mediaTo } from '../../assets/styles';

export interface StyleLinkProps {
   italic?: boolean;
   ninjaActive?: boolean;
   colorInherit?: boolean;
   underlineTouchOnly?: boolean;
}

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
   to?: string;
   onClick?: (event: any) => void;
}

type LinkType = LinkProps & StyleLinkProps;

const Link = forwardRef<HTMLAnchorElement, LinkType>(({
   underlineTouchOnly = true,
   italic,
   ninjaActive,
   colorInherit,
   children,
   ...props
},                                                    ref) => {
   const [isTouchScreen, setIsTouchScreen] = useState(false);
   useEffect(() => {
      try {
         if (document.createEvent('TouchEvent')) setIsTouchScreen(true);
      } catch (error) {
         setIsTouchScreen(!underlineTouchOnly);
         // tslint:disable-next-line: no-console
         if (process.env.NODE_ENV === 'development') console.warn('error', (error as Error).name);
      }
   }, [underlineTouchOnly]);

   return (
      <StyledLink
         ref={ref}
         underlineTouchOnly={isTouchScreen}
         colorInherit={colorInherit}
         italic={italic}
         ninjaActive={ninjaActive}
         {...props}
      >
         {children}
      </StyledLink>
   );
});

export const StyledLink = styled.a<StyleLinkProps>`
   ${({ colorInherit: inherit }) => inherit ? color({ other: 'inherit' }) : color('darkerGrey')};
   ${({ italic = false }) => italic && 'font-style: italic'};

   cursor: pointer;
   text-decoration: ${({ underlineTouchOnly }) => underlineTouchOnly ? 'underline' : 'none'};

   ${ mediaTo('tablet')} {
      text-decoration: underline;
   }

   &:hover {
      text-decoration: underline;
   }

   &:active {
      ${({ ninjaActive: ninja = false }) => ninja ? color('darkerGrey') : color('gold')}
   }

   &:visited {
      ${color('darkerGrey')};
   }
`;

export default Link;
