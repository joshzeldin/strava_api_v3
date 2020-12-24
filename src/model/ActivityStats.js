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
    define(['ApiClient', 'model/ActivityTotal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityTotal'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.ActivityStats = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.ActivityTotal);
  }
}(this, function(ApiClient, ActivityTotal) {
  'use strict';

  /**
   * The ActivityStats model module.
   * @module model/ActivityStats
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ActivityStats</code>.
   * A set of rolled-up statistics and totals for an athlete
   * @alias module:model/ActivityStats
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ActivityStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityStats} obj Optional instance to populate.
   * @return {module:model/ActivityStats} The populated <code>ActivityStats</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('biggest_ride_distance'))
        obj.biggestRideDistance = ApiClient.convertToType(data['biggest_ride_distance'], 'Number');
      if (data.hasOwnProperty('biggest_climb_elevation_gain'))
        obj.biggestClimbElevationGain = ApiClient.convertToType(data['biggest_climb_elevation_gain'], 'Number');
      if (data.hasOwnProperty('recent_ride_totals'))
        obj.recentRideTotals = ActivityTotal.constructFromObject(data['recent_ride_totals']);
      if (data.hasOwnProperty('recent_run_totals'))
        obj.recentRunTotals = ActivityTotal.constructFromObject(data['recent_run_totals']);
      if (data.hasOwnProperty('recent_swim_totals'))
        obj.recentSwimTotals = ActivityTotal.constructFromObject(data['recent_swim_totals']);
      if (data.hasOwnProperty('ytd_ride_totals'))
        obj.ytdRideTotals = ActivityTotal.constructFromObject(data['ytd_ride_totals']);
      if (data.hasOwnProperty('ytd_run_totals'))
        obj.ytdRunTotals = ActivityTotal.constructFromObject(data['ytd_run_totals']);
      if (data.hasOwnProperty('ytd_swim_totals'))
        obj.ytdSwimTotals = ActivityTotal.constructFromObject(data['ytd_swim_totals']);
      if (data.hasOwnProperty('all_ride_totals'))
        obj.allRideTotals = ActivityTotal.constructFromObject(data['all_ride_totals']);
      if (data.hasOwnProperty('all_run_totals'))
        obj.allRunTotals = ActivityTotal.constructFromObject(data['all_run_totals']);
      if (data.hasOwnProperty('all_swim_totals'))
        obj.allSwimTotals = ActivityTotal.constructFromObject(data['all_swim_totals']);
    }
    return obj;
  }

  /**
   * The longest distance ridden by the athlete.
   * @member {Number} biggestRideDistance
   */
  exports.prototype.biggestRideDistance = undefined;

  /**
   * The highest climb ridden by the athlete.
   * @member {Number} biggestClimbElevationGain
   */
  exports.prototype.biggestClimbElevationGain = undefined;

  /**
   * The recent (last 4 weeks) ride stats for the athlete.
   * @member {module:model/ActivityTotal} recentRideTotals
   */
  exports.prototype.recentRideTotals = undefined;

  /**
   * The recent (last 4 weeks) run stats for the athlete.
   * @member {module:model/ActivityTotal} recentRunTotals
   */
  exports.prototype.recentRunTotals = undefined;

  /**
   * The recent (last 4 weeks) swim stats for the athlete.
   * @member {module:model/ActivityTotal} recentSwimTotals
   */
  exports.prototype.recentSwimTotals = undefined;

  /**
   * The year to date ride stats for the athlete.
   * @member {module:model/ActivityTotal} ytdRideTotals
   */
  exports.prototype.ytdRideTotals = undefined;

  /**
   * The year to date run stats for the athlete.
   * @member {module:model/ActivityTotal} ytdRunTotals
   */
  exports.prototype.ytdRunTotals = undefined;

  /**
   * The year to date swim stats for the athlete.
   * @member {module:model/ActivityTotal} ytdSwimTotals
   */
  exports.prototype.ytdSwimTotals = undefined;

  /**
   * The all time ride stats for the athlete.
   * @member {module:model/ActivityTotal} allRideTotals
   */
  exports.prototype.allRideTotals = undefined;

  /**
   * The all time run stats for the athlete.
   * @member {module:model/ActivityTotal} allRunTotals
   */
  exports.prototype.allRunTotals = undefined;

  /**
   * The all time swim stats for the athlete.
   * @member {module:model/ActivityTotal} allSwimTotals
   */
  exports.prototype.allSwimTotals = undefined;

  return exports;

}));
