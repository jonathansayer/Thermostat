
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
  });
});

