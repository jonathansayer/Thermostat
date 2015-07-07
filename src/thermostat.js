
    function Thermostat(){
      // var _currentTemp = 20;
      // var _powerSave = true;
      this.currentTemp = 20;
      this.powerSave = true;

      
      Thermostat.prototype.increaseTemp = function() {
        this.currentTemp += 1

        if (this.powerSave === true ){
          if (this.currentTemp === 26){
            return this.currentTemp = 25
          } 
        }

        if (this.powerSave === false ){
          if (this.currentTemp === 33){
            return this.currentTemp = 32
          } 
        }
      
        return this.currentTemp
      };

      Thermostat.prototype.decreaseTemp = function() {
        this.currentTemp -= 1

        if (this.currentTemp === 9) {
          return this.currentTemp = 10
        } else {
          return this.currentTemp
        };
      };

      Thermostat.prototype.reset = function() {
          this.currentTemp = 20
      };


    };



