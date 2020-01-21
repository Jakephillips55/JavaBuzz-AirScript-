'use strict';

class Plane {
  constructor() { }
  land(airport) {
    airport.clearForLanding(this);
    this._location = airport;
  }
  takeoff() {
    this._location.clearForTakeOff();
  }
}
// refactored the below into the above
// Plane.prototype.land = function(airport){
//   airport.clearForLanding(this);
//   this._location = airport; 
// };
// Plane.prototype.takeoff = function(){
//   this._location.clearForTakeOff();
// };




 // Functions are one of the fundamental building blocks
 // in JavaScript. A function is a JavaScript
 // procedure—a set of statements that performs
 //  a task or calculates a value. To use a function,
 // you must define it somewhere in the scope from which
 // you wish to call it.
