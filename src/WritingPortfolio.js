import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Footer from './Components/Footer';
import Writing from './Components/Writing';
import Nav from './Components/Nav'



class PortfolioPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Nav data={this.state.resumeData.main} title='WRITING SKETCHBOOK' subtitle='MEMOIR / FICTION / THOUGHTS'/>
        <div style={{paddingTop:50}}>
        <Writing data={this.state.resumeData.portfolio}/>
        </div>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default PortfolioPage;
