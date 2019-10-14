import React, { ChangeEvent } from 'react';
import { DownloadData } from '../../../../components/Main.components/data/Main.content';
import * as P from './parts';

const data = DownloadData;

interface InputWrapperProps {
   nameInput: string;
   onNameInput: (event: ChangeEvent<HTMLInputElement>) => void;
   emailInput: string;
   onEmailInput: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputWrapper: React.FC<InputWrapperProps> = ({ nameInput, onNameInput, emailInput, onEmailInput }) => {
   const InputName = (id: string) => (
      <P.TextInput
         required
         type="text"
         id={id}
         value={nameInput}
         onChange={onNameInput}
      />
   );

   const InputEmail = (id: string) => (
      <P.TextInput
         required
         type="email"
         id={id}
         value={emailInput}
         onChange={onEmailInput}
      />
   );

   const InputTextLabel = (label: string, id: string, required: boolean = true) => {
      const requiredStar = required
         ? P.InputRequiredStar
         : undefined;
      return (
         <P.TextInputLabel htmlFor={id}>
            {label}
            {requiredStar}
         </P.TextInputLabel>
      );
   };

   return (
      <>
         {InputTextLabel(data.Name, 'nameInput', true)}
         {InputName('nameInput')}
         {InputTextLabel(data.Email, 'emailInput', true)}
         {InputEmail('emailInput')}
      </>
   );
};

export default InputWrapper;
