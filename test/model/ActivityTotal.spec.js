/*
 * Strava API v3
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.17
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StravaApiV3);
  }
}(this, function(expect, StravaApiV3) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ActivityTotal', function() {
      beforeEach(function() {
        instance = new StravaApiV3.ActivityTotal();
      });

      it('should create an instance of ActivityTotal', function() {
        // TODO: update the code to test ActivityTotal
        expect(instance).to.be.a(StravaApiV3.ActivityTotal);
      });

      it('should have the property count (base name: "count")', function() {
        // TODO: update the code to test the property count
        expect(instance).to.have.property('count');
        // expect(instance.count).to.be(expectedValueLiteral);
      });

      it('should have the property distance (base name: "distance")', function() {
        // TODO: update the code to test the property distance
        expect(instance).to.have.property('distance');
        // expect(instance.distance).to.be(expectedValueLiteral);
      });

      it('should have the property movingTime (base name: "moving_time")', function() {
        // TODO: update the code to test the property movingTime
        expect(instance).to.have.property('movingTime');
        // expect(instance.movingTime).to.be(expectedValueLiteral);
      });

      it('should have the property elapsedTime (base name: "elapsed_time")', function() {
        // TODO: update the code to test the property elapsedTime
        expect(instance).to.have.property('elapsedTime');
        // expect(instance.elapsedTime).to.be(expectedValueLiteral);
      });

      it('should have the property elevationGain (base name: "elevation_gain")', function() {
        // TODO: update the code to test the property elevationGain
        expect(instance).to.have.property('elevationGain');
        // expect(instance.elevationGain).to.be(expectedValueLiteral);
      });

      it('should have the property achievementCount (base name: "achievement_count")', function() {
        // TODO: update the code to test the property achievementCount
        expect(instance).to.have.property('achievementCount');
        // expect(instance.achievementCount).to.be(expectedValueLiteral);
      });

    });
  });

}));
