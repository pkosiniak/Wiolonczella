import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Cookies from './components/Cookies';
import Header from './components/Header';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
      <Cookies />
      <PrivacyPolicy/>
    </>
  );
}

export default App;


// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>