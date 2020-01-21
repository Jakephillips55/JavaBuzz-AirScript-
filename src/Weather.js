'use strict'; 

class Weather {
    constructor() {
        this._ENGLISH_SUMMER = 0.5;
    }
    isStorm() {
        return (Math.random() > this._ENGLISH_SUMMER);
    }
}
// refactored below into a class 
// function Weather(){
//     this._ENGLISH_SUMMER = 0.5; 
// }
// Weather.prototype.isStorm = function() { 
//     return (Math.random() > this._ENGLISH_SUMMER);
// }; 
