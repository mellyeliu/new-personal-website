import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import BlogHeader from './Components/BlogHeader';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import BlogList from './Components/BlogList';

class Blog extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    // ReactGA.initialize('UA-110570651-1');
    // ReactGA.pageview(window.location.pathname);

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
      <div className="Blog">
        <BlogHeader data={this.state.resumeData.main} dest='blog'/>
        {/* <About data={this.state.resumeData.main}/> */}
        <BlogList data={this.state.resumeData.blog}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default Blog;
