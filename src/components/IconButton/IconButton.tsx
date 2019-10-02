import React from 'react';
import StyledIcon, { StyledIconProps } from '../StyledIcon/StyledIcon';
import * as P from './parts';

export interface IconButtonProps {
   onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps & StyledIconProps> = ({ className, id, onClick, rectangle, square }) => (
   <P.Button onClick={onClick}>
      <StyledIcon className={className} id={id} rectangle={rectangle} square={square} />
   </P.Button>
);

export default IconButton;
