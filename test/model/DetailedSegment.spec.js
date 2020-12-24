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
    describe('DetailedSegment', function() {
      beforeEach(function() {
        instance = new StravaApiV3.DetailedSegment();
      });

      it('should create an instance of DetailedSegment', function() {
        // TODO: update the code to test DetailedSegment
        expect(instance).to.be.a(StravaApiV3.DetailedSegment);
      });

      it('should have the property createdAt (base name: "created_at")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updated_at")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property totalElevationGain (base name: "total_elevation_gain")', function() {
        // TODO: update the code to test the property totalElevationGain
        expect(instance).to.have.property('totalElevationGain');
        // expect(instance.totalElevationGain).to.be(expectedValueLiteral);
      });

      it('should have the property map (base name: "map")', function() {
        // TODO: update the code to test the property map
        expect(instance).to.have.property('map');
        // expect(instance.map).to.be(expectedValueLiteral);
      });

      it('should have the property effortCount (base name: "effort_count")', function() {
        // TODO: update the code to test the property effortCount
        expect(instance).to.have.property('effortCount');
        // expect(instance.effortCount).to.be(expectedValueLiteral);
      });

      it('should have the property athleteCount (base name: "athlete_count")', function() {
        // TODO: update the code to test the property athleteCount
        expect(instance).to.have.property('athleteCount');
        // expect(instance.athleteCount).to.be(expectedValueLiteral);
      });

      it('should have the property hazardous (base name: "hazardous")', function() {
        // TODO: update the code to test the property hazardous
        expect(instance).to.have.property('hazardous');
        // expect(instance.hazardous).to.be(expectedValueLiteral);
      });

      it('should have the property starCount (base name: "star_count")', function() {
        // TODO: update the code to test the property starCount
        expect(instance).to.have.property('starCount');
        // expect(instance.starCount).to.be(expectedValueLiteral);
      });

    });
  });

}));
