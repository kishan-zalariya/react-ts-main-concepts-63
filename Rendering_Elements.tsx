import React, { Component } from 'react';
import { render } from 'react-dom';

export default function tick(){
  const element = (
    <div>      
      <i>It is {new Date().toLocaleTimeString()}</i>
    </div>
  );
  render(element,document.getElementById('showdate'));
}