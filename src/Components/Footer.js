import React, { Component } from 'react';
import TypingToggleTextList from './TypingToggleTextList';

// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const quotes = [
  'We are all still waiting to be transformed ',
  'Intimacy in all its forms',
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
