import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';

class Resume extends Component {
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
      url:'/../resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({data: data.resume});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentWillMount(){
    this.getResumeData();
  }

  render() {

    if(this.state.data){
      console.log(this.state.data)
      var skillmessage = this.state.data.skillmessage;
      var work = this.state.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title} <em className="date"><span>|</span> {work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var education = this.state.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <em className="date"><span>|</span> {education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      // var skills = this.state.data.skills.map(function(skills){
      //   var className = 'bar-expand '+skills.name.toLowerCase();
      //   return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      // })
    }

    return (
      <section id="resume">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

          <ul id="nav" className="nav">
            <li id="logo">MELLYE.LIU</li>
            <div id="homenav">
                <li className='current'><a href="/">Home</a></li>
                <li className='hvr-grow'><a href="blog">Blog</a></li>
                <li className='hvr-grow'><a href="#portfolio">Works</a></li>
            </div>
          </ul>
        </nav>

      <div className="row skill" style={{marginTop:65}}>
        <div className="three columns header-col">
          {/* <img className="profile-pic"  src={'images/carousel_1.jpg'} alt="Tim Baker Profile Pic" /> */}
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
        {work}
        </div>
      </div>
      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>



      {/* <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>  */}
   </section>
    );
  }
}

export default Resume;
