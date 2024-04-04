import React, { Component } from 'react';
import TypingToggleTextList from './TypingToggleTextList';

// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const quotes = [
  'We took away your art because we thought it would reveal your souls. ',
  'So we spent what was left of our serotonin / To chew on our cheeks and stare at the moon ',
  "You treat me like I'm more than a pair of skin and bones / And that really made a difference in my story ",
  "But these things don't matter, because once you are Real you can't be ugly, except to people who don't understand.",
  "She's the monster in the fridge / She's chewing cotton wool",
  "Our brains are sick but that's okay",
  "A thousand dreams I'm holding heavy ",
  "The last refuge of the insomniac is a sense of superiority to the sleeping world",
  'We are survivors of each other. We have been shark to one another, but also lifeboat. ',
  "And always when the flash came Emily felt that life was a mysterious thing of persistent beauty.",
  'How do people decide who is an unreliable narrator? ',
  'Time and space, creatures of infinite girth and tenderness, are keeping you safe as they were once unable to. ',
  "I can make something good"
]

class Footer extends Component {
  render() {

    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
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
                  style={{ letterSpacing: 2, fontFamily: "Cormorant Garamond", fontWeight: 300, fontStyle: 'italic', fontSize: 14, paddingTop: 2, color: 'rgb(150,150,150)' }}></TypingToggleTextList>
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
