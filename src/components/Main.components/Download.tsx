import * as React from 'react';
import axios from 'axios';
import { DownloadData } from './data/Main.content';
import { naviLinks } from '../data/NaviLink.json';
import './styles/Download.scss';

const nData = naviLinks.Download;
const data = DownloadData;

interface IState {
   nameInput: string;
   emailInput: string;
   accept: boolean;
   showPolicy: boolean;
   isMobile: boolean;
   showInputError: boolean;
   errorMessage?: string;
}

export default class Download extends React.Component<{}, IState> {
   constructor(props: {}) {
      super(props);
      this.state = {
         nameInput: '',
         emailInput: '',
         accept: false,
         showPolicy: false,
         isMobile: window.innerWidth <= 1050,
         showInputError: false,
      };
   }

   componentDidMount = () => {
      window.addEventListener('resize', this.windowSizeListener);
   };

   componentWillUnmount = () => {
      window.removeEventListener('resize', this.windowSizeListener);
   };

   windowSizeListener = () => this.setState<'isMobile'>({ isMobile: window.innerWidth <= 1050 });

   resetErrorMessage = () => this.setState<'errorMessage'>({ errorMessage: undefined });

   onNameInput = (name: string) => {
      this.resetErrorMessage();
      this.setState<'showInputError'>({ showInputError: name.length > 30 });
      if (name.length > 30) { return; }

      this.setState<'nameInput'>({ nameInput: name });
   };

   onEmailInput = (email: string) => {
      this.resetErrorMessage();
      this.setState<'emailInput'>({ emailInput: email });
   };

   onCheckBoxChange = () => {
      this.resetErrorMessage();
      this.setState<'accept'>({ accept: !this.state.accept });
   };

   onSubmitEvent = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      this.resetErrorMessage();
      const json = JSON.stringify({ name: this.state.nameInput, email: this.state.emailInput, timeStamp: Date.now().toFixed() });
      // eslint-disable-next-line no-restricted-globals
      this.axiosWorker(`${location.href}.server/api.php`, json);
   };

   axiosWorker = (serverAddress: string, json: string) => {
      axios.post(serverAddress, json, { responseType: 'blob' }
      ).then((response) => {
         const url = window.URL.createObjectURL(new Blob([response.data]));
         const link = document.createElement('a');
         link.href = url;
         link.setAttribute('download', 'Wszystko kojaży się z wiolączelą - fragment.pdf');
         document.body.appendChild(link);
         link.click();
         this.setState<'nameInput'>({ nameInput: '' });
         this.setState<'emailInput'>({ emailInput: '' });
         this.setState<'accept'>({ accept: !this.state.accept });
      },
         (reason) => {
         // tslint:disable-next-line: no-console
            console.log(reason);
            this.setState<'errorMessage'>({ errorMessage: 'Server error' });
         }
      );
   };

   OnClickHandler = () => {
      const handler = document.getElementById('showPrivacyPolicy');
      if (handler !== null) {
         handler.click();
      }
   };

   H3Content = () => (
      <h3 className="divDownload" id={nData.address}>
         {data.Header}
      </h3>
   );

   DownloadButton = () => (
      <div className="divDownload">
         <button
            className="downloadButton"
         >
            {data.ButtonText}
         </button>
      </div >
   );

   onInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => this.onNameInput(event.target.value);

   InputName = (id: string) =>
      (
         <input
            className="inputShortText"
            type="text"
            id={id}
            value={this.state.nameInput}
            onChange={this.onInputNameChange}
            required
         />
      );

   onInputEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => this.onEmailInput(event.target.value);

   InputEmail = (id: string) =>
      (
         <input
            className="inputShortText"
            type="email"
            id={id}
            value={this.state.emailInput}
            onChange={this.onInputEmailChange}
            required
         />
      );

   InputTextLabel = (label: string, id: string, required: boolean = true) => {
      const requiredStar = required
         ? <div className="inputRequiredStar">*</div>
         : undefined;
      return (
         <label
            className="inputShortTextLabel"
            htmlFor={id}
         >
            {label}
            {requiredStar}
         </label>
      );
   };

   ErrorInput = (visible: boolean, nameToLong = false) => {
      const message = nameToLong ? data.NameToLong : data.FiledRequired;
      return (
         <div
            className="downloadInputBlock inputRequiredText"
            id="errorInputRequired"
            style={
               { display: visible ? 'block' : 'none' }}
         >
            {this.state.errorMessage || message}
         </div>
      );
   };

   RodoAccept = () =>
      (
         <div className="RodoAcceptCheckBox">

            <label
               htmlFor="RodoAcceptCheckBox"
               className="container"
               id="RodoAcceptCheckBoxConteiner"
            >
               <input
                  id="RodoAcceptCheckBox"
                  type="checkbox"
                  className="checkbox"
                  checked={this.state.accept}
                  onChange={this.onCheckBoxChange}
                  required
               />
               <span className="checkmark" />
               {data.Policy.FirstPart}
               <a
                  href="#privacyPolicy"
                  onClick={this.OnClickHandler}
                  className="footerLinks"
               >
                  {data.Policy.PrivacyPolicy}
               </a>
               {data.Policy.LastPart}
               <div className="inputRequiredStar">*</div>
            </label>
         </div>
      );

   render() {
      return (
         <>
            <div>
               <div className="divDownload">
                  {this.H3Content()}
                  <form className="downloadComponentsForm" onSubmit={this.onSubmitEvent}>
                     <div className="downloadComponentsFormBody">
                        {!this.state.isMobile && this.DownloadButton()}
                        <div className="downloadInputRightBlock">
                           <div className="downloadInputBlock">
                              {this.InputTextLabel(data.Name, 'nameInput', true)}
                              {this.InputName('nameInput')}
                           </div>
                           <div className="downloadInputBlock">
                              {this.InputTextLabel(data.Email, 'emailInput', true)}
                              {this.InputEmail('emailInput')}
                           </div>
                        </div>
                     </div>
                     {this.RodoAccept()}
                     {this.state.isMobile && this.DownloadButton()}
                     {this.ErrorInput(true, this.state.showInputError)}
                  </form>
               </div>
            </div>
         </>
      );
   }
}
