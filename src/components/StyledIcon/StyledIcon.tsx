import React from 'react';
import * as P from './parts';

export interface StyledIconProps {
   className: string;
   id?: string;
   rectangle?: P.Rectangle;
   square?: number;
}

const StyledIcon: React.FC<StyledIconProps> = ({ className, id, rectangle, square }) => (
   <P.Icon
      className={className}
      id={id}
      width={(square && square) || (rectangle && rectangle.width)}
      height={(square && square) || (rectangle && rectangle.height)}
   />
);

export default StyledIcon;
