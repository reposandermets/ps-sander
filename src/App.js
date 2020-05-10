import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


function App() {
  return (
    <AwesomeSlider animation="cubeAnimation">
      <div data-src="/img/photopea.png" />
      <div data-src="/img/patikohv.png" />
      <div data-src="/img/photoonwood.png" />
      <div data-src="/img/done_venice.png" />
      <div data-src="/img/alexander.png" />
      <div data-src="/img/kehaline.jpg" />
      <div data-src="/img/animation.gif" />
    </AwesomeSlider>
  );
}

export default App;
