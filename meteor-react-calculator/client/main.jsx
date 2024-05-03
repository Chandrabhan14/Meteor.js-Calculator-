import  React from 'react';
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import Calculator from '../imports/ui/Calculator';


Meteor.startup(()=>{
  render(  <Calculator/> 
  , document.getElementById('app'))
});