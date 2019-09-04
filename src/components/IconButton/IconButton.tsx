import React from 'react';
import styled from 'styled-components';
import StyledIcon from '../StyledIcon/StyledIcon';

export interface IconButtonProps {
   className: string;
}


const IconButton: React.FC<> = () => {
   const Button = styled.button``;

   return (
      <Button>
         <StyledIcon />
      </Button>
   )
}
export default IconButton;
