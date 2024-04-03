import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import ToggleTextList from './ToggleTextList';
import TypingToggleTextList from './TypingToggleTextList';

class Nav extends Component {

    state = {
        isMenu: false,
        isSocial: false
    }

    funFacts = [
      'believes in digital intimacy',
      'unironically enjoys hyperpop',
      'is using tetris as therapy',
      'is organizing her goodreads bookshelves',
      'psychoanalyzes to feel safe',
      'is reading about creation myths',
      'is watching a movie on 2x speed',
      'only eats one food (hotpot)',
      'aims to create safe spaces',
      'is a shill for dimensional',
      'is attached to her notes app',
      'is reading fanfic about inanimate objects',
      'is always misplacing their keys',
    ]

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
          <div>
            <ul id="nav" className="nav">
            <Fade duration={2000}>
                <li className="menu-icon">
                <div className={'menu-list ' + (this.state.isMenu ? 'menu-show' : 'menu-hide')}>
                  <a className="current" href="/"><i class="fas fa-home"></i></a>
                  {/* <a style={{cursor: 'not-allowed', color: 'grey !important'}} className="test"><i class="far fa-user-circle"></i></a>
                  */}
                  <a style={{color: 'grey !important'}} className="test"><i class="fab fa-medium-m"></i></a>
                </div>
                </li>
                <li id="logo" className={(this.state.isMenu ? 'logo-hide' : '')}>
                  {/* <marquee> */}
                    <div style={{fontWeight: 700, letterSpacing: 0.5, fontFamily: "Cormorant Garamond",  fontSize: 20}} className='control'>{"mellyeliu  ૮꒰ ˶• ༝ •˶꒱ა  ♡ "}</div>
                    <TypingToggleTextList wrapper={true} className='control'
                     textOptions={this.funFacts}
                     style={{letterSpacing: 2, fontFamily: "Cormorant Garamond", fontWeight: 300, fontStyle: 'italic', fontSize: 14, paddingTop: 2, color: 'rgb(150,150,150)'}}></TypingToggleTextList>
                  {/* </marquee> */}
                </li>
                {/* <div className="social-right">
                {networks}
                </div> */}
                </Fade>
            </ul>
            </div>
        </nav>
    );
  }
}

export default Nav;
