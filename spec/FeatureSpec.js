'use strict';

describe('Feature Test:', function(){
  let plane;
  let airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can takeoff', function(){
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  }); 

  it('blocks takeoff when there is a storm', function(){
    plane.land(airport)
    spyOn(airport, 'isStorm').and.returnValue(true);
    expect(function(){ plane.takeoff();}).toThrowError('Storm on no flying!');
    expect(airport.planes()).toContain(plane);
  }); 
});
