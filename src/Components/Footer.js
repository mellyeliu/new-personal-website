import React, { Component } from "react";
import TypingToggleTextList from "./TypingToggleTextList";

// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const quotes = [
  "We took away your art because we thought it would reveal your souls",
  "So we spent what was left of our serotonin / To chew on our cheeks and stare at the moon ",
  "You treat me like I'm more than a pair of skin and bones / And that really made a difference in my story ",
  "Books exist fully only in the act of being read; and its real home is inside the head of the reader... books are solitudes where we meet",
  "But these things don't matter, because once you are Real you can't be ugly, except to people who don't understand",
  "She's the monster in the fridge / She's chewing cotton wool",
  "I brushed up on philosophy: To live is to exist within time. To remember is to negate time.",
  "You are a woman with a man inside watching a woman. You are your own voyeur.",
  "Behind my eyelids are islands of violence / My mind shipwrecked, this is the only land my mind could find",
  "'It might be a whole secret country,' she continued, 'and you and I would be the rulers of it.'",
  "I can make something good",
  "This is how all our stories begin, in darkness with our eyes closed, and all our stories end the same way, too, with all of us uttering some last words",
  "'You look like a friend,' said Corduroy. 'I've always wanted a friend.'",
  "Stories are compasses and architecture; we navigate by them, we build sanctuaries and prisons out of them... To love is to put yourself in their story",
  "Our brains are sick but that's okay",
  "As if happiness is an acquired taste, like coconut cordial or ceviche, to which you can eventually become accustomed, but despair is something surprising each time you encounter it",
  "So much for endings. Beginnings are always more fun. True connoisseurs are known to favor the stretch in between, since it's the hardest to do anything with",
  "You are not yourself, you are crowds of others, you are as leaky a vessel as was ever made",
  "I wanna fall inside your ghost / And fill up every hole inside my mind",
  "I am made and remade continually. Different people draw different words from me",
  "There’s a ghostly double of myself hovering just behind me, and sometimes, it feels like she’s more real than I am",
  "All the world's a stage / And all the men and women merely players",
  "Are all things quantifiable, and all numbers fraught with poetic possibility?",
  "A thousand dreams I'm holding heavy",
  "Through the digital, the body in glitch finds its genesis",
  "The self is a creation, the crafting of which makes everyone an artist... we are gods of the small universe of self and the large world of repercussions",
  "Creation is always in the dark because you can only do the work of making by not quite knowing what you’re doing, by walking into darkness",
  "All the ways of tending to the world less easily validated than parenting... the writing and inventing and the activism",
  "But the old me is still me and maybe the real me / And I think she's pretty",
  "Radios playing a mash of songs about heartbreak and ruin, heartbreak and memory, heartbreak and hatred, how it’s the deeper intimacy",
  "We are survivors of each other. We have been shark to one another, but also lifeboat",
  "And always when the flash came Emily felt that life was a mysterious thing of persistent beauty.",
  "This is what I keep returning to: how people decide who is or is not an unreliable narrator",
  "Time and space, creatures of infinite girth and tenderness, are keeping you safe as they were once unable to",
];

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <a href={network.url} key={network.name}>
            <li className="hvr-grow-big">
              <i className={network.className}></i>
            </li>
          </a>
        );
      });
    }

    return (
      <footer className={`${this.props.bottom ? "blog" : ""}`}>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>
                <TypingToggleTextList
                  className="control"
                  textOptions={quotes}
                  wrapper={true}
                  speed={35}
                  style={{
                    letterSpacing: 2,
                    fontFamily: "Cormorant Garamond",
                    fontWeight: 300,
                    fontStyle: "italic",
                    fontSize: 14,
                    paddingTop: 2,
                    color: "rgb(150,150,150)",
                  }}
                ></TypingToggleTextList>
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
