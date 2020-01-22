'use strict';
// sets syntax to stricter rules 

describe('Feature Test:', function(){
  let plane;
  let airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0);
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

    describe('under storm conditions', function(){

      it('blocks takeoff when there is a storm', function(){
       spyOn(Math,'random').and.returnValue(0);
       plane.land(airport)
       spyOn(airport._weather, 'isStorm').and.returnValue(true);
       expect(function(){ plane.takeoff();}).toThrowError('Storm on no flying!');
       expect(airport.planes()).toContain(plane);
      }); 
     it('blocks landing when weather is stormy', function(){
       spyOn(Math, 'random').and.returnValue(1);
       expect(function(){ plane.land(airport); }).toThrowError('Storm on no flying!');
       expect(airport.planes()).toEqual([]);
    });
  });
 })
})