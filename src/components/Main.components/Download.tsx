import * as React from 'react';
import axios from 'axios'
import { DownloadData } from './data/Main.content';
// import DownloadAccept from './DownloadAccept';
import { naviLinks } from '../data/NaviLink.json';
import './styles/Download.scss';
// import PrivacyPolicy from '../PrivacyPolicy';
// import Footer from '../Footer';



const nData = naviLinks.Download;
const data = DownloadData;

interface IProps { }

interface IState {
   nameInput: string;
   emailInput: string;
   accept: boolean;
   showPolicy: boolean;
   isMobile: boolean;
   showInputError: boolean;
   errorMessage?: string;
}


export default class Download extends React.Component<IProps, IState> {

   constructor(props: IProps) {
      super(props);
      this.state = {
         nameInput: '',
         emailInput: '',
         accept: false,
         showPolicy: false,
         isMobile: window.innerWidth <= 1050,
         showInputError: false
      }
   }

   componentDidMount = () => {
      window.addEventListener('resize', this.windowSizeListener)
   }

   componentWillUnmount = () => {
      window.removeEventListener('resize', this.windowSizeListener)
   }

   windowSizeListener = () => this.setState<'isMobile'>({ isMobile: window.innerWidth <= 1050 });

   resetErrorMessage = () => this.setState<'errorMessage'>({ errorMessage: undefined });

   onNameInput = (name: string) => {
      this.resetErrorMessage();
      this.setState<'showInputError'>({ showInputError: name.length > 30 });
      if (name.length > 30) return;

      this.setState<"nameInput">({ nameInput: name });
   }

   onEmailInput = (email: string) => {
      this.resetErrorMessage();
      this.setState<"emailInput">({ emailInput: email })
   }

   onCheckBoxChange = () => {
      this.resetErrorMessage();
      this.setState<'accept'>({ accept: !this.state.accept })
   }

   onSubmiteEvent = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      this.resetErrorMessage();
      const json = JSON.stringify({ "name": this.state.nameInput, "email": this.state.emailInput, "timeStamp": Date.now().toFixed() });

      axios.post('http://landing.wariacja.com/.server/api.php', json, { responseType: 'blob' }
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
            console.log('erorr reason: ', reason);
            this.setState<'errorMessage'>({ errorMessage: 'Server error' });
         }
      ).catch(e => console.log(e));
   }

   OnClickHandler = () => {
      const handler = document.getElementById('showPrivacyPolicy');
      if (handler !== null)
         handler.click();
   }

   H3Content = () => (
      <h3 className="divDownload" id={nData.address}>
         {data.Header}
      </h3>
   )

   DownloadButton = () => (
      <div className="divDownload">
         <button
            className="downloadButton"
         >
            {data.ButtonText}
         </button>
      </div >
   )

   InputName = (id: string) => {
      return (
         <input
            className="inputShortText"
            type="text"
            id={id}
            value={this.state.nameInput}
            onChange={event => this.onNameInput(event.target.value)}
            required
         />
      )
   }

   InputEmail = (id: string) => {
      return (
         <input
            className="inputShortText"
            type="email"
            id={id}
            value={this.state.emailInput}
            onChange={event => this.onEmailInput(event.target.value)}
            required
         />
      )
   }

   InputTextLabel = (label: string, id: string, required: boolean = true) => {
      const requiredStar = required
         ? <div className="inputRequiredStar">*</div>
         : undefined;
      return (
         <label
            className="inputShortTextLabel"
            htmlFor={id}>
            {label}
            {requiredStar}
         </label>
      )
   }

   ErrorInput = (visible: boolean, nameToLong = false) => {
      const message = nameToLong ? data.NameToLong : data.FiledRequired;
      return (
         <div
            className="downloadInputBlock inputRequiredText"
            id="errorInputRequired"
            style={
               { display: visible ? 'block' : 'none' }
            }>
            {this.state.errorMessage || message}
         </div>
      )
   }

   RodoAccept = () => {
      return (
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
      )
   }

   render() {
      return (
         <>
            <div>
               <div className="divDownload">
                  {this.H3Content()}
                  <form className="downloadComponentsForm" onSubmit={this.onSubmiteEvent}>
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
      )
   }
}
