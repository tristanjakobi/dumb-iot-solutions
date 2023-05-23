import React, { useState } from 'react';

export default function AdButton() {
    const [showAd, setShowAd] = useState(false);
    const [showAdAndPlay, setShowAdAndPlay] = useState(false);

    if(showAdAndPlay){
        //wait a couple of seconds and then forward to another website
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, 200);
    }
    


    return <div className="AdButtonContainer">
        {showAd || showAdAndPlay ? <div onClick={() => {window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}}className="AdBanner"></div> : null}
        <button className="AdButton" onMouseEnter={() => {setTimeout(() => {setShowAd(true)}, 300)}} onClick={() => {setShowAdAndPlay(true)}}>Click Me!</button>
    </div>;
}