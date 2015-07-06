// var Thermostat = function(){

  // Thermostat.prototype.temperature = function() {
  //   var initialTemp = 20
  //   return initialTemp
  // };

  // Thermostat.prototype.increaseTemp = function() {
    
  //   return 21

  // };
    function Thermostat(){
      var _currentTemp = 20;
      this.currentTemp = _currentTemp;

      Thermostat.prototype.increaseTemp = function() {
        _currentTemp += 1
        return _currentTemp

      };


    };



