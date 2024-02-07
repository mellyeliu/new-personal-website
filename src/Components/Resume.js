import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Fade from 'react-reveal/Fade';

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
      var work = this.state.data.work.map(function(work, i){
        return ( <Fade up>
           <div className="jobs">
          {!(i % 2) ? (
            <div className="six columns header-col">
              <img className="profile-pic"  src={`images/${work.image}`}/>
            </div>
          ) : ''}
          <div style={{zIndex: 100}} className={`six columns main-col ${!(i % 2) ? 'job-desc': 'reverse'}`}>
            <div style={{verticalAlign: 'middle', display: 'inline-block'}}>
              <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title} <em className="date"><span>|</span> {work.years}</em></p>
                <p>{work.description}</p>
              </div>
            </div>
          </div>
          {(i % 2) ? (
            <div className="six columns header-col reverse">
              <img className="profile-pic reverse"  src={`images/${work.image}`}/>
            </div>
          ) : ''}

        </div>

        </Fade>
       )
      })
    }

    return (
      <section id="resume">
      <div className="row skill" style={{marginTop:65}}>
        {work}
      </div>
   </section>
    );
  }
}

export default Resume;
