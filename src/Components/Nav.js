import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

class Nav extends Component {
    
    state = {
        isActive: false
    }

    toggleButton = () => {
        console.log('ehehe')
    this.setState({
        isActive: !this.state.isActive
    })
    }
  render() {
    if(this.props.data){
        var networks= this.props.data.social.map(function(network){
          return <a href={network.url} style={{zIndex: 2000}} className={'social-link hvr-grow-big'}><li key={network.name}><i className={network.className}></i></li></a>
        })
      }

    return (
        <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
            <Fade duration={2000}>
                <li className="menu-icon">
                <div className={"ham-menu " + (this.state.isActive ? 'change' : '')} onClick={this.toggleButton}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                </div>
                <div className={'menu-list ' + (this.state.isActive ? 'menu-show' : 'menu-hide')}>
                    <a className="current" href="/">Home</a>
                    <a className="hvr-grow" href="blog">writing</a>
                    <a className="hvr-grow" href="blog">exp</a>
                </div>
                </li>
                <li id="logo" className={(this.state.isActive ? 'logo-hide' : '')}><span className='control'>{this.props.title}</span> <span className='control' style={{paddingLeft: 15, color: 'rgb(150,150,150)'}}>{this.props.subtitle}</span></li> 
                <div className="social-right">
                {networks}
                </div>
                </Fade>
            </ul>
        </nav>
    );
  }
}

export default Nav;
