import React, { useState } from 'react';
import * as P from './parts';
import { parseBool, allTrueCheck } from './helpers';

interface ShowButtonProps {
   onClick: () => void;
   name: string | number | null;
   isActive: boolean;
   top?: number;
}

export const ShowButton: React.FC<ShowButtonProps> = ({ onClick, isActive, name, top }) => (
   <P.StyledShowButton top={top} onClick={onClick} isActive={isActive}>{name}</P.StyledShowButton>
);

export const MemoShowButton = React.memo(ShowButton);

interface ShowButtonGroupProps {
   demos: JSX.Element[];
   name: string;
   showDemos: boolean[];
   setShowDemos: (state: boolean[]) => void;
}

export const ShowButtonGroup: React.FC<ShowButtonGroupProps> = ({ demos, name, showDemos, setShowDemos }) => {
   const [showGroup, setShowGroup] = useState<boolean>(parseBool(localStorage.getItem(name)));
   const [showAll, setShowAll] = useState<boolean>(parseBool(localStorage.getItem(name + 'All')));

   const onGroupButtonClick = () => {
      setShowGroup((prevState) => !prevState);
      localStorage.setItem(name, (!showGroup).toString());
   };

   const onAllGroupButtonClick = () => {
      setShowAll((prevState) => {
         setShowGroup(!prevState);
         setShowDemos(showDemos.map(() => !prevState));
         localStorage.setItem(name + 'All', (!prevState).toString());
         localStorage.setItem(name, (!prevState).toString());
         demos.forEach((demo, i) => {
            const key = demo.key ? demo.key.toString() : name + i;
            localStorage.setItem(key, (!showDemos[i]).toString());
         });
         return !prevState;
      });
   };

   return (
      <P.StyledButtonsGroup>
         <span style={{ display: 'flex' }}>
            <P.StyledShowButton isHeader isActive={showGroup} onClick={onGroupButtonClick}>{name}</P.StyledShowButton>
            <P.StyledShowButton isHeader isAll isActive={showAll} onClick={onAllGroupButtonClick}>all</P.StyledShowButton>
         </span>
         {showGroup && demos.map((demo, i) => {
            const onShowButtonClick = () => {
               showDemos[i] = !showDemos[i];
               setShowDemos(showDemos);
               if (!showDemos[i]) {
                  setShowAll(false);
                  localStorage.setItem(name + 'All', 'false');
               } else {
                  const showAllState = allTrueCheck(showDemos);
                  setShowAll(showAllState);
                  localStorage.setItem(name + 'All', showAllState.toString());
               }
               const key = demo.key ? demo.key.toString() : name + i;
               localStorage.setItem(key, showDemos[i].toString());
            };
            return (<MemoShowButton key={i} isActive={showDemos[i]} name={demo.key} onClick={onShowButtonClick} />);
         })}
      </P.StyledButtonsGroup>
   );
};
