
describe('thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function(){
    it('intially at 20 degrees',function(){
      expect(thermostat.currentTemp).toBe(20);

    });

    it('can increase', function(){
      expect(thermostat.increaseTemp()).toBe(21);
    });

     it('can decrease', function(){
      expect(thermostat.decreaseTemp()).toBe(19);
    });

     it('cannot fall below 10 degrees',function(){
      
      for (var i = 0; i < 10 ; i++){
        thermostat.decreaseTemp()
      }
      expect(thermostat.decreaseTemp()).toBe(10);
    });

     it('is on power saving mode as default',function(){ 
      expect(thermostat.powerSave).toBe(true);
     });

     it('max is equal to 25 degress if powerSave is on',function(){
      thermostat.powerSave = true

       for (var i = 0; i < 5 ; i++){
        thermostat.increaseTemp()
      }

      expect(thermostat.increaseTemp()).toBe(25)
     });

     it('can be turned off powersave',function(){
      
      thermostat.powerSave = false
      expect(thermostat.powerSave).toBe(false);

     });

     it('max is equal to 32 degrees if powerSave is off',function(){
      thermostat.powerSave = false

      for (var i = 0; i < 12 ; i++){
        thermostat.increaseTemp()
      }

      expect(thermostat.increaseTemp()).toBe(32)

     });

     it('can be reset to 20 degrees', function(){

       for (var i = 0; i < 5 ; i++){
        thermostat.increaseTemp()
      }

      thermostat.reset();

      expect(thermostat.currentTemp).toBe(20);
     });
  });
});



