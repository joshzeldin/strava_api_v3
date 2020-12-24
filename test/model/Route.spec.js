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
    describe('Route', function() {
      beforeEach(function() {
        instance = new StravaApiV3.Route();
      });

      it('should create an instance of Route', function() {
        // TODO: update the code to test Route
        expect(instance).to.be.a(StravaApiV3.Route);
      });

      it('should have the property athlete (base name: "athlete")', function() {
        // TODO: update the code to test the property athlete
        expect(instance).to.have.property('athlete');
        // expect(instance.athlete).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property distance (base name: "distance")', function() {
        // TODO: update the code to test the property distance
        expect(instance).to.have.property('distance');
        // expect(instance.distance).to.be(expectedValueLiteral);
      });

      it('should have the property elevationGain (base name: "elevation_gain")', function() {
        // TODO: update the code to test the property elevationGain
        expect(instance).to.have.property('elevationGain');
        // expect(instance.elevationGain).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property idStr (base name: "id_str")', function() {
        // TODO: update the code to test the property idStr
        expect(instance).to.have.property('idStr');
        // expect(instance.idStr).to.be(expectedValueLiteral);
      });

      it('should have the property map (base name: "map")', function() {
        // TODO: update the code to test the property map
        expect(instance).to.have.property('map');
        // expect(instance.map).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property _private (base name: "private")', function() {
        // TODO: update the code to test the property _private
        expect(instance).to.have.property('_private');
        // expect(instance._private).to.be(expectedValueLiteral);
      });

      it('should have the property starred (base name: "starred")', function() {
        // TODO: update the code to test the property starred
        expect(instance).to.have.property('starred');
        // expect(instance.starred).to.be(expectedValueLiteral);
      });

      it('should have the property timestamp (base name: "timestamp")', function() {
        // TODO: update the code to test the property timestamp
        expect(instance).to.have.property('timestamp');
        // expect(instance.timestamp).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property subType (base name: "sub_type")', function() {
        // TODO: update the code to test the property subType
        expect(instance).to.have.property('subType');
        // expect(instance.subType).to.be(expectedValueLiteral);
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

      it('should have the property estimatedMovingTime (base name: "estimated_moving_time")', function() {
        // TODO: update the code to test the property estimatedMovingTime
        expect(instance).to.have.property('estimatedMovingTime');
        // expect(instance.estimatedMovingTime).to.be(expectedValueLiteral);
      });

      it('should have the property segments (base name: "segments")', function() {
        // TODO: update the code to test the property segments
        expect(instance).to.have.property('segments');
        // expect(instance.segments).to.be(expectedValueLiteral);
      });

    });
  });

}));