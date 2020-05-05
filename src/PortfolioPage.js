import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
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
        <Nav data={this.state.resumeData.main} title='Portfolio' subtitle='Code &amp; Art'/>
        <div style={{paddingTop:50}}>
        <Portfolio data={this.state.resumeData.portfolio}/>
        </div>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default PortfolioPage;
