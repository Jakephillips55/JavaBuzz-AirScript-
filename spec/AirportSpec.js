'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('can clear a plane for takeoff', function(){
    airport.clearForTakeOff(plane); 
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  }); 
    it('can check for stormy conditions', function(){
      expect(airport.isStorm()).toBeFalsy(); 
    });  
    describe('Under storm',function(){
      it('wont let a plane takeoff', function() {
        spyOn(airport, 'isStorm').and.returnValue(true); 
        expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('Storm on no flying!');
      });
    });
  });
