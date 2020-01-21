'use strict'; 

describe('Weather', function(){
    let weather; 
    beforeEach(function(){
        weather = new Weather(); 
    });
    it('gives storm sometimes', function(){
        spyOn(Math,'random').and.returnValue(1);
        expect(weather.isStorm()).toBeTruthy(); 
    });
    it('gives not storm other times', function() {
        spyOn(Math,'random').and.returnValue(0); 
        expect(weather.isStorm()).toBeFalsy();
    });
}); 