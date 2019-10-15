import React from 'react';
import { DownloadData } from '../../../../assets/data/Main.content';
import { Col } from '../../../../components/Grid';
import * as P from './parts';
import Link from '../../../../components/Link/Link';
import Checkbox from '../../../../components/Checkbox';

const data = DownloadData.Policy;

interface RodoAcceptProps {
   checked: boolean;
   onCheckBoxChange: () => void;
   onPolicyRefClick: (event: MouseEvent) => void;
}

const RodoCheckBox: React.FC<RodoAcceptProps> = ({ checked, onCheckBoxChange, onPolicyRefClick }) => {
   const onClick = (event: MouseEvent) => {
      event.stopPropagation();
      onPolicyRefClick(event);
      onCheckBoxChange();
   };

   const onCheckBoxClick = () => {
      onCheckBoxChange();
   };

   return (
      <Col>
         <Checkbox id={RodoCheckBox.name} isChecked={checked} onChange={onCheckBoxClick}>
            <P.CheckboxLabel>
               {data.FirstPart}
               <Link
                  to="#privacyPolicy"
                  onClick={onClick}
               >
                  {data.PrivacyPolicy}
               </Link>
               {data.LastPart}
               {P.InputRequiredStar}
            </P.CheckboxLabel>
         </Checkbox>
      </Col>
   );
};

export default RodoCheckBox;
