import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import Nav from './Components/Nav'
import AsciiArtBackground from './Components/AsciiArtBackground';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <>
              <div className={`App ${theme === "dark" ? "" : ""}`}>
                <Nav data={this.state.resumeData.main} title='Mellye.liu' subtitle='Code / Writing / Art' />
                <Header data={this.state.resumeData.main} dest={'home'} />
                <Portfolio data={this.state.resumeData.portfolio} />
                <Footer data={this.state.resumeData.main} />
              </div>
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;
