import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import blogData from '../blogData'
import { Link } from 'react-router-dom';

class BlogPost extends Component {
    
  render() {
        console.log(blogData);
      var work = blogData.blog.work[0];
    return (
        
      <section id="blogpost">
          <nav id="nav-wrap">

            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
            <li id="logo">life stories</li>
            <div id="homenav">
                <li className='hvr-grow'><Link to="/">Home</Link></li>
                <li className='current'><Link to="/blog">Blog</Link></li>
                <li className='hvr-grow'><Link to="/blog">Works</Link></li>
            </div>
            </ul>

            </nav>
         <div className="row skills" style={{marginBottom: 20, marginTop: 50}}>
        <div className="twelve columns main-col">
          <div key={work.company}>
              <div className="blogImage">
                <p className="blogtop"> {work.years} | Reflection</p>
              <h3><a>{work.company}</a></h3>
              <p style={{marginBottom: 15}}>{work.description}</p>
              </div>
          </div>
        </div>
        </div>

   </section>
    );
  }
}

export default BlogPost;
