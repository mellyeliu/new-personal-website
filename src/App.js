import React, { useState, useEffect, useContext } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

import NameTag from './Components/NameTag';
import Portfolio from './Components/Portfolio';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import Nav from './Components/Nav'
import AsciiArtBackground from './Components/AsciiArtBackground';

const App = () => {
  const [resumeData, setResumeData] = useState({});

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  useEffect(() => {
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

    getResumeData();
  }, []);

  const getResumeData = () => {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        setResumeData(data);
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  };

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme, fullScreen }) => (
          <>
            <div className={`App ${theme === "dark" ? "" : ""}`} style={{overflow: fullScreen ? 'hidden' : 'scroll', height: fullScreen ? `${windowHeight}px` : null}}>
              {!fullScreen && <Nav data={resumeData.main} title='Mellye.liu' subtitle='Code / Writing / Art' />}
              {fullScreen && <NameTag/>}
              <Header data={resumeData.main} dest={'home'} />
              <div style={{ display: fullScreen ? 'none' : 'block' }}>
                <Portfolio data={resumeData.portfolio} />
                <Footer data={resumeData.main} />
              </div>
            </div>
          </>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;
