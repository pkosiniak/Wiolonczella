import React from 'react';
import { DownloadData } from '../../../../assets/data/Main.content';
import { Col } from '../../../../components/Grid';
import * as P from './parts';
import Link from '../../../../components/Link/Link';
import Checkbox from '../../../../components/Checkbox';
import { navLinks } from '../../../../assets/data/NavLink.json';

const data = DownloadData.Policy;
const policyData = navLinks.PrivacyPolicy;

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
                  href={policyData.hashAddress}
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
