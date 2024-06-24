import React from 'react';
import TypingToggleTextList from './TypingToggleTextList';

const NameTag = () => {
    const funFacts = [
        'believes in digital intimacy',
        'unironically enjoys hyperpop',
        'is using tetris as therapy',
        'is organizing her goodreads bookshelves',
        'psychoanalyzes to feel safe',
        'is reading about creation myths',
        'is watching a movie on 2x speed',
        'only eats one food (hotpot)',
        'is giving stick n poke tattoos',
        'aims to create safe spaces',
        'is a shill for dimensional',
        'collects tamagotchis',
        'is attached to her notes app',
        'is writing fanfic about inanimate objects',
        'is always misplacing their keys',
      ]

    return (
        <div
            style={{
            width: '310px',
            height: '100px',
            backgroundColor: 'white',
            border: '0.5px solid #111',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            padding: '10px',
            boxSizing: 'border-box',
            position: 'absolute',
            left: '50%',
            top: '50px',
            transform: 'translateX(-50%)',
            color: '#111',
            zIndex: 100000,
        }}>
            {/* <ul id="nav" className="nav">
                <li id="logo"> */}
                {/* <marquee> */}
                <div style={{ fontWeight: 700, letterSpacing: 0.5, fontFamily: "Cormorant Garamond", fontSize: 22 }} className='control'>{"mellyeliu   ໒꒰ྀིっ˕ -｡꒱ྀི১ ♡ "}</div>
                <TypingToggleTextList wrapper={true} className='control'
                    textOptions={funFacts}
                    style={{ letterSpacing: 2, fontFamily: "Cormorant Garamond", fontWeight: 300, fontStyle: 'italic', fontSize: 14, paddingTop: 2, color: 'rgb(150,150,150)' }}></TypingToggleTextList>
                {/* </marquee> */}
                {/* </li>
            </ul> */}
        </div>
    );
};

export default NameTag;
