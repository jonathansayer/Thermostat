
    function Thermostat(){
      var _currentTemp = 20;
      var _powerSave = true;
      this.currentTemp = _currentTemp;
      this.powerSave = _powerSave;

      Thermostat.prototype.increaseTemp = function() {
        _currentTemp += 1

        if (_powerSave === true )
          if (_currentTemp === 26) {
            return _currentTemp = 25
        } 
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



