import React from 'react';
import { DownloadData } from '../../../../components/Main.components/data/Main.content';
import * as P from './parts';

const data = DownloadData;

interface ErrorMessageProps {
   errorMessage?: string;
   isDisplayed: boolean;
   nameToLong: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
   errorMessage, isDisplayed, nameToLong = false
}) => {
   const message = nameToLong ? data.NameToLong : data.FiledRequired;
   return (
      <P.ErrorInput
         isDisplayed={isDisplayed}
         className="downloadInputBlock inputRequiredText"
         id="errorInputRequired"
      >
         {errorMessage || message}
      </P.ErrorInput>
   );
};

export default ErrorMessage;
