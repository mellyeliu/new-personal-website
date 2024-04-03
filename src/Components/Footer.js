import React, { Component } from 'react';
import TypingToggleTextList from './TypingToggleTextList';

// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const quotes = [
  'We took away your art because we thought it would reveal your souls. ',
  'So we spent what was left of our serotonin / To chew on our cheeks and stare at the moon ',
  'We are survivors of each other. We have been shark to one another, but also lifeboat. ',
  'To look at someone and remember that your time with them is limited. ',
  "You treat me like I'm more than a pair of skin and bones / And that really made a difference in my story ",
  "She's the monster in the fridge / She's chewing cotton wool",
  'Why does God have a virginity fetish? ',
  'How do people decide who is an unreliable narrator? ',
  'Time and space, creatures of infinite girth and tenderness, are keeping you safe as they were once unable to. '
]

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <a href={network.url}><li key={network.name} className="hvr-grow-big"><i className={network.className}></i></li></a>
      })
    }

    return (
      <footer className={`${this.props.bottom ? "blog" : ""}`}>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>
              <TypingToggleTextList className='control'
                     textOptions={quotes} wrapper={true}
                     style={{letterSpacing: 2, fontFamily: "Cormorant Garamond", fontWeight: 300, fontStyle: 'italic', fontSize: 14, paddingTop: 2, color: 'rgb(150,150,150)'}}></TypingToggleTextList>
                {/* I WANT TO CREATE THE WORLD I DREAM OF */}
                </li>
           </ul>

        </div>
        {/* <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div> */}
     </div>
  </footer>
    );
  }
}

export default Footer;
