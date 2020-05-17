import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import WritingPortfolio from './WritingPortfolio';
import Blog from './Blog';
import BlogPost from './Components/BlogPost';
import Resume from './Components/Resume';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

// var newData;
// function getResumeData() {
//   $.ajax({
//     url:'/resumeData.json',
//     dataType:'json',
//     cache: false,
//     success: function(data){
//       newData = data
//     }.bind(this),
//     error: function(xhr, status, err){
//       console.log(err);
//       alert(err);
//     }
//   });
// }

// // var data = getResumeData()
// console.log(newData)
// console.log("hii")

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/exp" component={Resume} />
        <Route path="/writing" component={WritingPortfolio} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog-posts/:blogId" component={BlogPost} />
        <Route path="/works" component={Blog} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
