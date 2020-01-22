'use strict';

describe('Airport', function(){
  let airport;
  let plane;
  let weather; 

  beforeEach(function(){
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather',['isStorm']);
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      weather.isStorm.and.returnValue(false);
  });
  it('can clear for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('can clear a plane for takeoff', function(){
    airport.clearForLanding(plane); 
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  }); 
    it('can check for stormy conditions', function(){
      expect(airport.isStorm()).toBeFalsy(); 
    });  
    
    describe('Under storm',function(){
      beforeEach(function() {
        weather.isStorm.and.returnValue(true);
      });
      it('wont clear plane to land', function(){
        expect(function(){airport.clearForLanding(plane); }).toThrowError('Cant land due to Storm');
      });
      it('wont let a plane takeoff', function() {
        expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('Storm on no flying!');
      });
    });
  });
}) 