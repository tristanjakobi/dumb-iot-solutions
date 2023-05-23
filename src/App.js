import './App.css';
import React from 'react';
import AdButton from './adButton';

function App() {
  const [showPopup, setShowPopup] = React.useState(false);


  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrolled / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 50) {
        setShowPopup(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const closePopup = () => {
    setShowPopup(false);
  };


  



  return (
    <div className="App">
      <h1>Dumb IoT Solutions Homepage</h1>
      {showPopup && <div className="popup">
      <h1>THIS WEBSITE does not use cookies</h1>
      <div>
        Just so you know :)
        <img className="bigGif" src="https://i.pinimg.com/originals/fd/01/88/fd01885b551ddd595d3888d2cca964fb.gif"></img>
      </div>
      <button onClick={closePopup}>Don't show again</button>
    </div>}
      <div className="breaker">😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃</div>
      <div className="document">
        <div className="article">
          <h2>What is a dumb IoT Solutions???</h2>
          <p>Dumb IoT Solutions is a company that makes dumb IoT solutions.</p>
          <img src="https://media.tenor.com/z2tg-2P2AswAAAAM/funny-smile.gif"></img>
        <h2>What is IoT?</h2>
        <p>IoT stands for Internet of Things. It is a term used to describe the connection of everyday objects to the internet.</p>
        <h2>What is a dumb IoT solution?</h2>
        <p>A dumb IoT solution is an IoT solution that is dumb.</p>
        <h2>What is the difference between a dumb IoT solution and a smart IoT solution?</h2>
        <p>A dumb IoT solution is dumb, and a smart IoT solution is smart.</p>
        </div>
        <div className="article">
          <h2>Why should I buy a dumb IoT solution?</h2>
          
        </div>
        <h1>Discover Our Products</h1>
        <AdButton/>
      </div>
    </div>
  );
}

export default App;
