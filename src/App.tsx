import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Cookies from './components/Cookies';
import Header from './components/Header';
import './styles/App.scss';


const App: React.FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
      <Cookies />
    </>
  );
}

export default App;
