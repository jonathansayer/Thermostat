
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
  });
});



