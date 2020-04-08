import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import BlogCard from './BlogCard'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
//   });
// const classes = useStyles();
class BlogList extends Component {
    
  render() {
    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}>
            <div className="blogImage">
            <h3><a>{work.company}</a></h3>
            {/* <p className="info"> <em className="date"><span></span> {work.years}</em></p> */}
            <p style={{marginBottom: 15}}>{work.description}</p>

            </div>
            
            <Divider style={{marginBottom: 15, backgroundColor: `rgba(189, 189, 189, 0.12)`}}/>
        </div>
      })
      // var skills = this.props.data.skills.map(function(skills){
      //   var className = 'bar-expand '+skills.name.toLowerCase();
      //   return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      // })
    }
    return (
      <section id="bloglist">
          {/* <BlogCard></BlogCard> */}

      <div className="row skills">
        <div className="two columns header-col">
          <h1><span>recent</span></h1>
        </div>

        <div className="ten columns main-col">
        {work}
        </div>
      </div>

   </section>
    );
  }
}

export default BlogList;
