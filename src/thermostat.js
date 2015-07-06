
    function Thermostat(){
      var _currentTemp = 20;
      this.currentTemp = _currentTemp;

      Thermostat.prototype.increaseTemp = function() {
        _currentTemp += 1
        return _currentTemp
      };

      Thermostat.prototype.decreaseTemp = function() {
        _currentTemp -= 1

        if (_currentTemp === 9) {
          return _currentTemp = 10
        } else {
          return _currentTemp
        };


      };


    };



