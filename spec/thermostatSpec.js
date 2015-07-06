
describe('thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function(){
    it('intially at 20 degrees',function(){
      expect(thermostat.temperature()).toBe(20);

    });

    it('can increase', function(){
      expect(thermostat.increaseTemp(1)).toBe(21);
    });
  });
});

