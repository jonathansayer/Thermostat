
describe('thermostat', function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function(){
    it('intially at 20 degrees',function(){
      expect(thermostat.temperature()).toBe(20);

    });


  });







});