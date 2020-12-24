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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MetaActivity', 'model/MetaAthlete'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MetaActivity'), require('./MetaAthlete'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.Lap = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.MetaActivity, root.StravaApiV3.MetaAthlete);
  }
}(this, function(ApiClient, MetaActivity, MetaAthlete) {
  'use strict';

  /**
   * The Lap model module.
   * @module model/Lap
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Lap</code>.
   * @alias module:model/Lap
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Lap</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Lap} obj Optional instance to populate.
   * @return {module:model/Lap} The populated <code>Lap</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('activity'))
        obj.activity = MetaActivity.constructFromObject(data['activity']);
      if (data.hasOwnProperty('athlete'))
        obj.athlete = MetaAthlete.constructFromObject(data['athlete']);
      if (data.hasOwnProperty('average_cadence'))
        obj.averageCadence = ApiClient.convertToType(data['average_cadence'], 'Number');
      if (data.hasOwnProperty('average_speed'))
        obj.averageSpeed = ApiClient.convertToType(data['average_speed'], 'Number');
      if (data.hasOwnProperty('distance'))
        obj.distance = ApiClient.convertToType(data['distance'], 'Number');
      if (data.hasOwnProperty('elapsed_time'))
        obj.elapsedTime = ApiClient.convertToType(data['elapsed_time'], 'Number');
      if (data.hasOwnProperty('start_index'))
        obj.startIndex = ApiClient.convertToType(data['start_index'], 'Number');
      if (data.hasOwnProperty('end_index'))
        obj.endIndex = ApiClient.convertToType(data['end_index'], 'Number');
      if (data.hasOwnProperty('lap_index'))
        obj.lapIndex = ApiClient.convertToType(data['lap_index'], 'Number');
      if (data.hasOwnProperty('max_speed'))
        obj.maxSpeed = ApiClient.convertToType(data['max_speed'], 'Number');
      if (data.hasOwnProperty('moving_time'))
        obj.movingTime = ApiClient.convertToType(data['moving_time'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('pace_zone'))
        obj.paceZone = ApiClient.convertToType(data['pace_zone'], 'Number');
      if (data.hasOwnProperty('split'))
        obj.split = ApiClient.convertToType(data['split'], 'Number');
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'Date');
      if (data.hasOwnProperty('start_date_local'))
        obj.startDateLocal = ApiClient.convertToType(data['start_date_local'], 'Date');
      if (data.hasOwnProperty('total_elevation_gain'))
        obj.totalElevationGain = ApiClient.convertToType(data['total_elevation_gain'], 'Number');
    }
    return obj;
  }

  /**
   * The unique identifier of this lap
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/MetaActivity} activity
   */
  exports.prototype.activity = undefined;

  /**
   * @member {module:model/MetaAthlete} athlete
   */
  exports.prototype.athlete = undefined;

  /**
   * The lap's average cadence
   * @member {Number} averageCadence
   */
  exports.prototype.averageCadence = undefined;

  /**
   * The lap's average speed
   * @member {Number} averageSpeed
   */
  exports.prototype.averageSpeed = undefined;

  /**
   * The lap's distance, in meters
   * @member {Number} distance
   */
  exports.prototype.distance = undefined;

  /**
   * The lap's elapsed time, in seconds
   * @member {Number} elapsedTime
   */
  exports.prototype.elapsedTime = undefined;

  /**
   * The start index of this effort in its activity's stream
   * @member {Number} startIndex
   */
  exports.prototype.startIndex = undefined;

  /**
   * The end index of this effort in its activity's stream
   * @member {Number} endIndex
   */
  exports.prototype.endIndex = undefined;

  /**
   * The index of this lap in the activity it belongs to
   * @member {Number} lapIndex
   */
  exports.prototype.lapIndex = undefined;

  /**
   * The maximum speed of this lat, in meters per second
   * @member {Number} maxSpeed
   */
  exports.prototype.maxSpeed = undefined;

  /**
   * The lap's moving time, in seconds
   * @member {Number} movingTime
   */
  exports.prototype.movingTime = undefined;

  /**
   * The name of the lap
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * The athlete's pace zone during this lap
   * @member {Number} paceZone
   */
  exports.prototype.paceZone = undefined;

  /**
   * @member {Number} split
   */
  exports.prototype.split = undefined;

  /**
   * The time at which the lap was started.
   * @member {Date} startDate
   */
  exports.prototype.startDate = undefined;

  /**
   * The time at which the lap was started in the local timezone.
   * @member {Date} startDateLocal
   */
  exports.prototype.startDateLocal = undefined;

  /**
   * The elevation gain of this lap, in meters
   * @member {Number} totalElevationGain
   */
  exports.prototype.totalElevationGain = undefined;

  return exports;

}));
