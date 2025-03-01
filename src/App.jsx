import './App.css';
import Card from './card';
import arsenal from './assets/arsenal.jpeg';
import aston from './assets/aston.jpeg';
import barca from './assets/barca.jpeg';
import bayern from './assets/bayern.jpeg';
import bayern2 from './assets/bayern2.jpeg';
import benfica from './assets/benfica.jpeg';
import dortmund from './assets/dortmund.jpeg';
import feyen from './assets/feyen.jpeg';
import liver from './assets/liver.jpeg';
import madrid from './assets/madrid.jpeg';
import psg from './assets/psg.jpeg';

const App = () => {
  return (
    <>

    <div className="main-container">
      <span className="title">Champions League: Round of 16</span>
      <div className="hero-page"></div>
      <div className="card-container">
        <Card image={aston} name="Club Brugge vs. Aston Villa" date="Tue, Mar 4" time="9:45 AM"/>
        <Card image={madrid} name="Real Madrid vs. Althetico Madrid" date="Tue, Mar 4" time="12:00 PM"/>
        <Card image={arsenal} name="PSV vs. Arsenal" date="Tue, Mar 4" time="12:00 PM"/>
        <Card image={dortmund} name="Dortmund vs. LOSC" date="Tue, Mar 4" time="12:00 PM"/>
        <Card image={feyen} name="Feyenoord vs. Inter" date="Wed, Mar 5" time="9:45 AM"/>
        <Card image={bayern} name="Bayern vs. Leverkusen" date="Wed, Mar 5" time="12:00 PM"/>
        <Card image={barca} name="Benfica vs. Barcelona" date="Wed, Mar 5" time="12:00 PM"/>
        <Card image={liver} name="PSG vs. Liverpool" date="Wed, Mar 5" time="12:00 PM"/>
        <Card image={benfica} name="Inter vs. Feyenoord" date="Tue, Mar 11" time="1:00 PM"/>
        <Card image={psg} name="Liverpool vs. PSG" date="Tue, Mar 11" time="1:00 PM"/>
        <Card image={bayern2} name="Leverkusen vs. Bayern" date="Tue, Mar 11" time="1:00 PM"/> 
  
      </div>
    </div>
    </>
  )
}

export default App