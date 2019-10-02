import React from 'react';
import IconButton from '../IconButton/IconButton';
import { StyledIconProps } from '../StyledIcon/StyledIcon.jsx';

export interface LinkButtonProps {
   href: string;
   iconClassName: string;
   className?: string;
   id?: string;
}

const LinkIconButton: React.FC<LinkButtonProps & Partial<StyledIconProps>> = ({
   href,
   className,
   iconClassName,
   id,
   rectangle,
   square
}) => (
      <a href={href} className={className}>
         <IconButton
            className={iconClassName}
            id={id}
            rectangle={rectangle}
            square={square}
         />
      </a>
   );
export default LinkIconButton;
