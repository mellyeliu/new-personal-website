import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

class Nav extends Component {

    state = {
        isMenu: false,
        isSocial: false
    }

    toggleButton = () => {
      this.setState({
        isMenu: !this.state.isMenu
      })
    }
  render() {
    if(this.props.data){
        var social = this.props.data.social.slice(1,4)
        var networks= social.map(function(network){
          return <a target="_blank" href={network.url} style={{zIndex: 2000}} className={'social-link hvr-grow-big'}><li key={network.name}><i className={network.className}></i></li></a>
        })
      }

    return (
        <nav id="nav-wrap" class="opaque" style={{zIndex: 100000}}>
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
            <Fade duration={2000}>
                <li className="menu-icon">
                {/* <div className={"ham-menu " + (this.state.isMenu ? 'change' : '')} onClick={this.toggleButton}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                </div> */}
                <div className={'menu-list ' + (this.state.isMenu ? 'menu-show' : 'menu-hide')}>
                  <a className="current" href="/"><i class="fas fa-home"></i></a>
                  {/* <a style={{cursor: 'not-allowed', color: 'grey !important'}} className="test"><i class="far fa-user-circle"></i></a>
                  */}
                  <a style={{color: 'grey !important'}} className="test"><i class="fab fa-medium-m"></i></a>
                </div>
                </li>
                <li id="logo" className={(this.state.isMenu ? 'logo-hide' : '')}><span style={{fontWeight: 700}} className='control'>{this.props.title}</span> <span className='control' style={{paddingLeft: 15, color: 'rgb(150,150,150)'}}>{this.props.subtitle}</span></li>
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
