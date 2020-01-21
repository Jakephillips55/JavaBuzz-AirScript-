'use strict'; 

class Airport {
  constructor() {
    this._hangar = [];
  }
  planes() {
    return this._hangar;
  }
  clearForLanding(plane) {
    if(this.isStorm()) {
      throw new Error('Storm on no landing!'); 
    }
    this._hangar.push(plane);
  }
  clearForTakeOff(plane) {
    if(this.isStorm()) {
      throw new Error('Storm on no flying'); 
    }
    this._hangar = [];
  }
  isStorm() {
    return false;
  }
}
// refactored above from below as 
// the constructor could be converted to a class 
// Airport.prototype.planes = function(){ return this._hangar;
// };
// Airport.prototype.clearForLanding = function(plane){
//   this._hangar.push(plane); 
// }; 
// Airport.prototype.clearForTakeOff = function(plane) {
//   this._hangar = []; 
// };
// Airport.prototype.isStorm = function() {
//   return false;
  Airport.prototype.clearForTakeOff = function(plane) {
    if(this.isStorm()) {
      throw new Error('Storm on no flying!');
    };
    this._hangar = [];
  };
  
  // _method means it is a private method 