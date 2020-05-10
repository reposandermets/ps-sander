import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import photopea from './img/photopea.png';
import patikohv from './img/patikohv.png';
import photoonwood from './img/photoonwood.png';
import done_venice from './img/done_venice.png';
import alexander from './img/alexander.png';
import kehaline from './img/kehaline.jpg';
import animation from './img/animation.gif';

function App() {
  return (
    <React.Fragment>
      <div style={{display: "none"}} async>
        <img src={patikohv} alt=""/>
        <img src={photoonwood} alt=""/>
        <img src={done_venice} alt=""/>
        <img src={alexander} alt=""/>
        <img src={kehaline} alt=""/>
        <img src={animation} alt=""/>
      </div>
      <AwesomeSlider animation="cubeAnimation">
        <div data-src={photopea} />
        <div data-src={patikohv} />
        <div data-src={photoonwood} />
        <div data-src={done_venice} />
        <div data-src={alexander} />
        <div data-src={kehaline} />
        <div data-src={animation} />
      </AwesomeSlider>
    </React.Fragment>
  )
}

export default App;
