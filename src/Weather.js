'use strict'; 

function Weather(){
    this._ENGLISH_SUMMER = 0.5; 
}
Weather.prototype.isStorm = function() { 
    return (Math.random() > this._ENGLISH_SUMMER);
}; 
