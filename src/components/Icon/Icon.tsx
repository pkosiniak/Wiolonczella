import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { backgroundColor, colors, NumericPositionProps, NumericPosition } from '../../assets/styles';
import * as H from './helpers';

export type IconType = FunctionComponent<React.SVGProps<SVGSVGElement>>;

export interface StyleIconProps {
   rectangle?: H.Rectangle;
   square?: number;
   noDefaultStyle?: boolean;
   paddingOrNot?: NumericPositionProps | boolean;
}

export interface IconProps extends StyleIconProps {
   className?: string;
   id?: string;
   icon: IconType;
}

export const Wrapper = styled.span<StyleIconProps>`
   ${({ square, rectangle, noDefaultStyle, paddingOrNot: padding }) => !noDefaultStyle && !padding ? css`
         width: ${H.setWidthWithPadding(square, rectangle)}px;
         height: ${H.setHeightWithPadding(square, rectangle)}px;
      ` : css`
         width: ${H.setWidth(square, rectangle)}px;
         height: ${H.setHeight(square, rectangle)}px;
      `}
   box-sizing: border-box;
`;

const Icon: React.FC<IconProps> = ({
   className,
   id,
   rectangle,
   square,
   noDefaultStyle = false,
   paddingOrNot = false,
   icon: ChildIcon,
}) => {
   const width = H.setWidth(square, rectangle) || H.defaultIconSize;
   const height = H.setHeight(square, rectangle) || H.defaultIconSize;

   const typeOfPadding = typeof paddingOrNot === 'object';
   const getPadding = new NumericPosition(
      typeOfPadding ? (paddingOrNot as NumericPositionProps) : undefined
   ).getAsCssStringFromArray();

   const StyledIcon = styled(ChildIcon)`
      ${!noDefaultStyle && css`
         ${backgroundColor('transparent')}
         fill: ${colors.darkGrey};
         padding: ${getPadding || H.iconPadding + 'px'};
      `}
   `;
   return (
      <Wrapper
         noDefaultStyle={noDefaultStyle}
         paddingOrNot={!typeOfPadding && paddingOrNot}
         square={square}
         rectangle={rectangle}
      >
         <StyledIcon
            id={id}
            className={className}
            width={width}
            height={height}
         />
      </Wrapper>
   );
};

export default Icon;
