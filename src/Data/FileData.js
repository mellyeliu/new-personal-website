import React from "react";
import PortfolioData from "./PortfolioData";

function CustomLink({ text, href, color = "blue" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "underline",
        pointerEvents: "auto",
        color: "#b87cbf", // color,
      }}
      onMouseOver={(e) => (e.currentTarget.style.letterSpacing = "1px")}
      onMouseOut={(e) => (e.currentTarget.style.letterSpacing = "0px")}
    >
      {text}
    </a>
  );
}

const FileData = {
  games: [
    {
      hoverString: "www.neopets.com",
      src: "images/icons/neopetsicon.png",
      url: "https://www.neopets.com/",
      scale: 0.52,
      x: 20,
      y: 30,
    },
    {
      hoverString: "https://jstris.jezevec10.com/",
      url: "https://jstris.jezevec10.com/u/magicunicorn",
      src: "images/icons/tetris2.png",
      scale: 0.52,
      x: 20,
      y: 20,
    },
    {
      hoverString: "The Company of Myself",
      src: "images/icons/com.png",
      url: "https://www.newgrounds.com/portal/view/518729",
      scale: 0.52,
      x: 40,
      y: 30,
    },
    {
      hoverString: "Town of Salem",
      src: "images/icons/salem.png",
      url: "https://blankmediagames.com/",
      scale: 0.52,
      x: 75,
      y: 60,
    },
    {
      hoverString: "( Kingdom of Loathing )",
      src: "images/icons/kol.png",
      url: "https://www.kingdomofloathing.com/",
      scale: 0.52,
      x: 31,
      y: 25,
    },
    {
      hoverString: "( Spider and Web )",
      src: "images/icons/spiderweb.png",
      url: "https://eblong.com/zarf/zweb/tangle/",
      scale: 0.52,
      x: 18,
      y: 9,
    },
    {
      hoverString: "Club Penguin",
      src: "images/icons/cp.png",
      url: "https://www.cplegacy.com/",
      scale: 0.52,
      x: 50,
      y: 40,
    },
    {
      hoverString: "Shift",
      src: "images/icons/shift.png",
      url: "https://armorgames.com/play/751/shift",
      scale: 0.52,
      x: 7,
      y: 13,
    },
    {
      hoverString: "Fantage",
      src: "images/icons/fantage.png",
      url: "https://en.wikipedia.org/wiki/Fantage",
      scale: 0.52,
      x: 60,
      y: 60,
    },
    {
      hoverString: "Loved",
      src: "images/icons/loved.png",
      url: "https://ocias.com/works/loved/",
      scale: 0.52,
      x: 42,
      y: 22,
    },
    {
      hoverString: "Cause of Death",
      src: "images/icons/cod.png",
      url: "https://tvtropes.org/pmwiki/pmwiki.php/VisualNovel/CauseOfDeath",
      scale: 0.52,
      x: 39,
      y: 65,
    },
    {
      hoverString: "( Dreaming Mary )",
      src: "images/icons/dreamingmary.png",
      url: "https://tvtropes.org/pmwiki/pmwiki.php/VideoGame/DreamingMary",
      scale: 0.52,
      x: 10,
      y: 19,
    },
    {
      hoverString: "( Okami )",
      src: "images/icons/okami.png",
      url: "https://en.wikipedia.org/wiki/%C5%8Ckami",
      scale: 0.52,
      x: 17,
      y: 35,
    },
    {
      hoverString: "( a dark room )",
      src: "images/icons/darkroom.png",
      url: "https://adarkroom.doublespeakgames.com/",
      scale: 0.52,
      x: 5,
      y: 34,
    },
    {
      hoverString: "windows93",
      src: "images/icons/windows93.png",
      url: "https://www.windows93.net/",
      scale: 0.52,
      x: 30,
      y: 60,
    },
  ],
  fandoms: [
    {
      hoverString: "TRShady",
      src: "images/icons/trshady.png",
      url: "http://forum.trshady.com/",
      scale: 0.52,
      x: 30,
      y: 60,
    },
    {
      hoverString: "goodreads",
      src: "images/icons/goodreads.png",
      url: "https://www.goodreads.com/mellyeliu",
      scale: 0.52,
      x: 30,
      y: 60,
    },
    {
      hoverString: "Life is Strange",
      src: "images/icons/lis.png",
      url: "https://archiveofourown.org/works/4577451",
      scale: 0.5,
      x: 75,
      y: 25,
    },
    {
      hoverString: "www.tvtropes.org",
      src: "images/icons/tvtropes.png",
      url: "https://www.tvtropes.org/",
      scale: 0.52,
      x: 25,
      y: 27,
    },
    {
      hoverString: "Deism, Reincarnation, and Creation Myths",
      src: "images/icons/deism.png",
      url: "https://en.wikipedia.org/wiki/Pandeism",
      scale: 0.52,
      x: 76,
      y: 17,
    },
    {
      hoverString: "૮꒰ ˶• ༝ •˶꒱ა ♡",
      src: "images/icons/fj.png",
      url: "https://www.freejinger.org/",
      scale: 0.5,
      x: 35,
      y: 48,
    },
    {
      hoverString: "tyler x josh (21p)",
      src: "images/icons/21p.png",
      url: "https://archiveofourown.org/works/8262935",
      scale: 0.5,
      x: 25,
      y: 38,
    },
    {
      hoverString: "everlark ♡",
      src: "images/icons/everlark.png",
      url: "https://archiveofourown.org/works/603428",
      scale: 0.5,
      x: 23,
      y: 65,
    },
    {
      hoverString: "azula x mai (atla) ♡",
      src: "images/icons/maizula.png",
      url: "https://archiveofourown.org/works/4249794/chapters/9617619",
      scale: 0.5,
      x: 42,
      y: 48,
    },
    {
      hoverString: "joseon-era kdramas",
      src: "images/icons/kdrama.png",
      url: "https://archiveofourown.org/works/4249794/chapters/9617619",
      scale: 0.5,
      x: 50,
      y: 45,
    },
  ],
  wikis: [
    {
      hoverString: "are.na",
      src: "images/icons/arena.png",
      url: "https://www.are.na/",
      scale: 0.52,
      x: 45,
      y: 53,
    },
    {
      hoverString: "( TCRF )",
      src: "images/icons/tcrf.png",
      url: "https://tcrf.net/The_Cutting_Room_Floor",
      scale: 0.52,
      x: 40,
      y: 59,
    },
    {
      hoverString: "( daily deviation dream )",
      src: "images/icons/deviantart.png",
      url: "https://www.deviantart.com/",
      scale: 0.52,
      x: 71,
      y: 72,
    },
    {
      hoverString: "( MSCHF )",
      src: "images/icons/mschf.png",
      url: "https://www.mschf.com/",
      scale: 0.52,
      x: 37,
      y: 32,
    },
    {
      hoverString: "Rational Wiki",
      src: "images/icons/rational.png",
      url: "https://rationalwiki.org/wiki/Special:Random",
      scale: 0.52,
      x: 76,
      y: 68,
    },
    {
      hoverString: "( scp foundation )",
      src: "images/icons/scp.png",
      url: "https://scp-wiki.wikidot.com/",
      scale: 0.52,
      x: 50,
      y: 72,
    },
    {
      hoverString: "( Edit Wars )",
      src: "images/icons/wiki.png",
      url: "https://en.wikipedia.org/wiki/User:TheUnmissingPiece",
      scale: 0.52,
      x: 58,
      y: 65,
    },
  ],
  "About Me": [
    {
      hoverString: "૮꒰ ˶• ༝ •˶꒱ა ♡",
      src: "images/windows/bio.png",
      scale: 0.83,
      border: true,
      x: 68,
      y: 19,
    },
    {
      hoverString: "૮꒰ ˶• ༝ •˶꒱ა ♡",
      src: "images/me/me.png",
      scale: 0.5,
      url: "https://vsco.co/mellyeliu/gallery",
      x: 80,
      y: 42,
    },
    {
      hoverString: "૮꒰ ˶• ༝ •˶꒱ა ♡",
      src: "images/me/meme.png",
      scale: 0.5,
      url: "https://vsco.co/mellyeliu/gallery",
      x: 83,
      y: 26,
    },
    {
      hoverString: "૮꒰ ˶• ༝ •˶꒱ა ♡",
      src: "images/me/mememe.png",
      scale: 0.5,
      url: "https://vsco.co/mellyeliu/gallery",
      x: 57,
      y: 35,
    },
    {
      hoverString: "( Girlhood )",
      src: "images/windows/emojis.png",
      scale: 0.42,
      border: true,
      x: 58,
      y: 10,
    },
    {
      hoverString: "( Socials )",
      src: "images/windows/socials.png",
      scale: 0.42,
      border: true,
      x: 8,
      y: 27,
    },
    {
      hoverString: "( 🌐🤍🎀🫧 )",
      src: "images/windows/internet.png",
      scale: 0.5,
      border: true,
      x: 17,
      y: 44,
    },
  ],
  Obsessions: [],
};

const socials = (
  <div
    style={{
      justifyContent: "left",
      whiteSpace: "pre-wrap",
      alignItems: "left",
      color: "black",
      fontSize: "18px",
      textAlign: "left",
      lineHeight: "1.1",
      padding: "150px 20px",
      fontFamily: "Arimo",
      fontWeight: 500,
      zIndex: 1000000,
      pointerEvents: "none",
    }}
  >
    find me at:
    <br />
    <br />
    {PortfolioData.main.social.map((item, index) => (
      <>
        <CustomLink href={item.url} text={item.name} />
        <div />
      </>
    ))}
  </div>
);

const site = (
  <div
    style={{
      justifyContent: "center",
      whiteSpace: "pre-wrap",
      alignItems: "center",
      color: "black",
      fontSize: "20px",
      textAlign: "center",
      // fontStyle: "italic",
      lineHeight: "1.1",
      padding: "170px 50px",
      fontFamily: "Arimo",
      fontWeight: 500,
      zIndex: 1000000,
      pointerEvents: "none",
    }}
  >
    welcome to my safe space on the internet ᡣ • . • 𐭩 ♡
    <br />
    &#40; identity map 🌟 site assemblage 🌐 portfolio 📎 &#41;
    <br />
    <br />
    ૮꒰ ˶• ༝ •˶꒱ა ♡
    <br />
    <br />
    this website is{" "}
    <CustomLink
      text="open source"
      href="https://github.com/mellyeliu/mellyeliu.online"
    />
    , made with <CustomLink text="react" href="https://react.dev/" />, and
    inspired by{" "}
    <CustomLink
      text="everything before me"
      href="https://www.are.na/vaiva-staugaityte/websites-that-look-like-operating-systems"
    />
  </div>
);

const emojis = (
  <div
    style={{
      justifyContent: "center",
      whiteSpace: "pre-wrap",
      alignItems: "center",
      color: "black",
      fontSize: "48px",
      textAlign: "center",
      lineHeight: "1.1",
      padding: "150px 20px",
      fontFamily: "Arimo",
      fontWeight: 500,
      zIndex: 1000000,
      pointerEvents: "none",
    }}
  >
    🎀💿🧸💫
  </div>
);

const bio = (
  <div
    style={{
      justifyContent: "left",
      whiteSpace: "pre-wrap",
      alignItems: "left",
      color: "black",
      fontSize: "20px",

      textAlign: "left",
      lineHeight: "1.15",
      padding: "165px 25px",
      fontFamily: "Arimo",
      fontWeight: 500,
      zIndex: 1000000,
      pointerEvents: "none",
    }}
  >
    <div style={{ textAlign: "center" }}>
      ₊˚ . ⋅☁︎‧₊˚ ☾. ⋅<br />
    </div>
    <br />
    Melissa is a software engineer and internet artist. Interests include:
    messaging systems, creation myths, fandom as landscaping fictional worlds,
    the medium of games, safe spaces, creative intimacy, pseudoscientific
    personality tests, relational psychology, rotting in bed [...] They still
    believe in the goodness of the internet and its potential for connection and
    creativity.
    <br />
    <br />
    In the day they work on core components, cross-platform integration, and{" "}
    <CustomLink
      color="black"
      text="open source tooling"
      href="https://github.com/facebook/stylex"
    />{" "}
    for React, the library where they fell in love with coding, and at night
    they use it on random side quests. Previously, they worked on the{" "}
    <CustomLink text="website" color="black" href="https://messenger.com" />{" "}
    that first taught them how to talk to people. She still beta tests it every
    day with her friends. The rest of her life is just content fodder for her
    work.
  </div>
);

export const windowData = {
  "( Socials )": socials,
  "૮꒰ ˶• ༝ •˶꒱ა ♡": bio,
  "( 🌐🤍🎀🫧 )": site,
  "( Girlhood )": emojis,
};

export default FileData;
