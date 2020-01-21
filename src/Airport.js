'use strict';
'use strict'; 

class Airport {
  constructor(weather) {
    this._weather = typeof weather !== 'underfined' ? weather : new Weather();
    this._hangar = [];
  }
  planes() {
    return this._hangar;
  }
  clearForLanding(plane) {
    if(this.isStorm()) {
      throw new Error('Cant land due to Storm')
    }
    this._hangar.push(plane);
  }
  clearForTakeOff(plane) {
    if(this.isStorm()) {
      throw new Error('Storm on no flying!')
    }
    this._hangar = [];
  }
  isStorm() {
    return false;
  }
}
  Airport.prototype.clearForTakeOff = function(plane) {
    if(this.isStorm()) {
      throw new Error('Storm on no flying!');
    };
    this._hangar = [];
  };
  
  // _method means it is a private method 

  // refactored below into a class 
  // function Airport(weather){
  //   this._weather = typeof weather !== 'underfined' ? weather : new Weather();
  //   this._hangar = []; 
  // }
  //   Airport.prototype.planes = function(){ return this._hangar;
  //   };
  //   Airport.prototype.clearForLanding = function(plane){
  //     this._hangar.push(plane); 
  //   }; 
  //   Airport.prototype.clearForTakeOff = function(plane) {
  //     this._hangar = []; 
  //   };
  //   Airport.prototype.isStorm = function() {
  //     return false;
  //   };
  //   Airport.prototype.clearForTakeOff = function(plane) {
  //     if(this.isStorm()) {
  //       throw new Error('Storm on no flying!');
  //     };
  //     this._hangar = [];
  //   };