import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class BlogList extends Component {
    
  render() {
    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var work = this.props.data.work.map(function(work){
        return (
        <div className="row skills" style={{marginBottom: 20}}>
        <div className="four columns header-col" style={{height: 210, padding: 0}}>
          <img className="profile-pic"  style={{height: 210}} src={work.image} alt="Tim Baker Profile Pic" />
        </div>

        <div className="eight columns main-col">
          <div key={work.company}>
              <div className="blogImage">
              <p className="blogtop"> {work.years} | Reflection</p>
              <h3><Link to="/blog-posts/1">{work.company}</Link></h3>
              <p style={{marginBottom: 15}}>{work.description}</p>

              </div>
              
              {/* <Divider style={{marginBottom: 15, backgroundColor: `rgba(189, 189, 189, 0.12)`}}/> */}
          </div>
        </div>
        </div>)
        
      })
      // var skills = this.props.data.skills.map(function(skills){
      //   var className = 'bar-expand '+skills.name.toLowerCase();
      //   return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      // })
    }
    return (
      <section id="bloglist">
        {work}
          {/* <BlogCard></BlogCard> */}

      {/* <div className="row skills">
        <div className="two columns header-col">
          
        </div>

        <div className="ten columns main-col">
        {work}
        </div>
      </div> */}

   </section>
    );
  }
}

export default BlogList;
