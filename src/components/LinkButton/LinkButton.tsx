import React from 'react';
import styled from 'styled-components';

interface LinkButtonProps {
   className?: string;
   to: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to: link, className, children }) => (
   <Link href={link} className={className}>
      <Button>
         {children}
      </Button>
   </Link>
);

const Link = styled.a`
   text-decoration: none;
`;

const Button = styled.button`
   background: inherit;
   border-style: none;
   outline: none;
   padding: 0;
`;

export default LinkButton;
