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

  beforeEach(function() {
    instance = new StravaApiV3.SegmentEffortsApi();
  });

  describe('(package)', function() {
    describe('SegmentEffortsApi', function() {
      describe('getEffortsBySegmentId', function() {
        it('should call getEffortsBySegmentId successfully', function(done) {
          // TODO: uncomment, update parameter values for getEffortsBySegmentId call and complete the assertions
          /*
          var segmentId = 56;
          var opts = {};
          opts.startDateLocal = new Date("2013-10-20T19:20:30+01:00");
          opts.endDateLocal = new Date("2013-10-20T19:20:30+01:00");
          opts.perPage = 30;

          instance.getEffortsBySegmentId(segmentId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(StravaApiV3.DetailedSegmentEffort);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be("0");
              expect(data.activityId).to.be.a('number');
              expect(data.activityId).to.be("0");
              expect(data.elapsedTime).to.be.a('number');
              expect(data.elapsedTime).to.be(0);
              expect(data.startDate).to.be.a(Date);
              expect(data.startDate).to.be(new Date());
              expect(data.startDateLocal).to.be.a(Date);
              expect(data.startDateLocal).to.be(new Date());
              expect(data.distance).to.be.a('number');
              expect(data.distance).to.be(0.0);
              expect(data.isKom).to.be.a('boolean');
              expect(data.isKom).to.be(false);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.activity).to.be.a(StravaApiV3.MetaActivity);
                    expect(data.activity.id).to.be.a('number');
                expect(data.activity.id).to.be("0");
              expect(data.athlete).to.be.a(StravaApiV3.MetaAthlete);
                    expect(data.athlete.id).to.be.a('number');
                expect(data.athlete.id).to.be("0");
              expect(data.movingTime).to.be.a('number');
              expect(data.movingTime).to.be(0);
              expect(data.startIndex).to.be.a('number');
              expect(data.startIndex).to.be(0);
              expect(data.endIndex).to.be.a('number');
              expect(data.endIndex).to.be(0);
              expect(data.averageCadence).to.be.a('number');
              expect(data.averageCadence).to.be(0.0);
              expect(data.averageWatts).to.be.a('number');
              expect(data.averageWatts).to.be(0.0);
              expect(data.deviceWatts).to.be.a('boolean');
              expect(data.deviceWatts).to.be(false);
              expect(data.averageHeartrate).to.be.a('number');
              expect(data.averageHeartrate).to.be(0.0);
              expect(data.maxHeartrate).to.be.a('number');
              expect(data.maxHeartrate).to.be(0.0);
              expect(data.segment).to.be.a(StravaApiV3.SummarySegment);
                    expect(data.segment.id).to.be.a('number');
                expect(data.segment.id).to.be("0");
                expect(data.segment.name).to.be.a('string');
                expect(data.segment.name).to.be("");
                expect(data.segment.activityType).to.be.a('string');
                expect(data.segment.activityType).to.be("Ride");
                expect(data.segment.distance).to.be.a('number');
                expect(data.segment.distance).to.be(0.0);
                expect(data.segment.averageGrade).to.be.a('number');
                expect(data.segment.averageGrade).to.be(0.0);
                expect(data.segment.maximumGrade).to.be.a('number');
                expect(data.segment.maximumGrade).to.be(0.0);
                expect(data.segment.elevationHigh).to.be.a('number');
                expect(data.segment.elevationHigh).to.be(0.0);
                expect(data.segment.elevationLow).to.be.a('number');
                expect(data.segment.elevationLow).to.be(0.0);
                expect(data.segment.startLatlng).to.be.a(StravaApiV3.LatLng);
                    expect(data.segment.endLatlng).to.be.a(StravaApiV3.LatLng);
                    expect(data.segment.climbCategory).to.be.a('number');
                expect(data.segment.climbCategory).to.be(0);
                expect(data.segment.city).to.be.a('string');
                expect(data.segment.city).to.be("");
                expect(data.segment.state).to.be.a('string');
                expect(data.segment.state).to.be("");
                expect(data.segment.country).to.be.a('string');
                expect(data.segment.country).to.be("");
                expect(data.segment._private).to.be.a('boolean');
                expect(data.segment._private).to.be(false);
                expect(data.segment.athletePrEffort).to.be.a(StravaApiV3.SummarySegmentEffort);
                      expect(data.segment.athletePrEffort.id).to.be.a('number');
                  expect(data.segment.athletePrEffort.id).to.be("0");
                  expect(data.segment.athletePrEffort.activityId).to.be.a('number');
                  expect(data.segment.athletePrEffort.activityId).to.be("0");
                  expect(data.segment.athletePrEffort.elapsedTime).to.be.a('number');
                  expect(data.segment.athletePrEffort.elapsedTime).to.be(0);
                  expect(data.segment.athletePrEffort.startDate).to.be.a(Date);
                  expect(data.segment.athletePrEffort.startDate).to.be(new Date());
                  expect(data.segment.athletePrEffort.startDateLocal).to.be.a(Date);
                  expect(data.segment.athletePrEffort.startDateLocal).to.be(new Date());
                  expect(data.segment.athletePrEffort.distance).to.be.a('number');
                  expect(data.segment.athletePrEffort.distance).to.be(0.0);
                  expect(data.segment.athletePrEffort.isKom).to.be.a('boolean');
                  expect(data.segment.athletePrEffort.isKom).to.be(false);
                expect(data.segment.athleteSegmentStats).to.be.a(StravaApiV3.SummaryPRSegmentEffort);
                      expect(data.segment.athleteSegmentStats.prActivityId).to.be.a('number');
                  expect(data.segment.athleteSegmentStats.prActivityId).to.be("0");
                  expect(data.segment.athleteSegmentStats.prElapsedTime).to.be.a('number');
                  expect(data.segment.athleteSegmentStats.prElapsedTime).to.be(0);
                  expect(data.segment.athleteSegmentStats.prDate).to.be.a(Date);
                  expect(data.segment.athleteSegmentStats.prDate).to.be(new Date());
                  expect(data.segment.athleteSegmentStats.effortCount).to.be.a('number');
                  expect(data.segment.athleteSegmentStats.effortCount).to.be(0);
              expect(data.komRank).to.be.a('number');
              expect(data.komRank).to.be(0);
              expect(data.prRank).to.be.a('number');
              expect(data.prRank).to.be(0);
              expect(data.hidden).to.be.a('boolean');
              expect(data.hidden).to.be(false);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getSegmentEffortById', function() {
        it('should call getSegmentEffortById successfully', function(done) {
          // TODO: uncomment, update parameter values for getSegmentEffortById call and complete the assertions
          /*
          var id = 789;

          instance.getSegmentEffortById(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StravaApiV3.DetailedSegmentEffort);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be("0");
            expect(data.activityId).to.be.a('number');
            expect(data.activityId).to.be("0");
            expect(data.elapsedTime).to.be.a('number');
            expect(data.elapsedTime).to.be(0);
            expect(data.startDate).to.be.a(Date);
            expect(data.startDate).to.be(new Date());
            expect(data.startDateLocal).to.be.a(Date);
            expect(data.startDateLocal).to.be(new Date());
            expect(data.distance).to.be.a('number');
            expect(data.distance).to.be(0.0);
            expect(data.isKom).to.be.a('boolean');
            expect(data.isKom).to.be(false);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.activity).to.be.a(StravaApiV3.MetaActivity);
                  expect(data.activity.id).to.be.a('number');
              expect(data.activity.id).to.be("0");
            expect(data.athlete).to.be.a(StravaApiV3.MetaAthlete);
                  expect(data.athlete.id).to.be.a('number');
              expect(data.athlete.id).to.be("0");
            expect(data.movingTime).to.be.a('number');
            expect(data.movingTime).to.be(0);
            expect(data.startIndex).to.be.a('number');
            expect(data.startIndex).to.be(0);
            expect(data.endIndex).to.be.a('number');
            expect(data.endIndex).to.be(0);
            expect(data.averageCadence).to.be.a('number');
            expect(data.averageCadence).to.be(0.0);
            expect(data.averageWatts).to.be.a('number');
            expect(data.averageWatts).to.be(0.0);
            expect(data.deviceWatts).to.be.a('boolean');
            expect(data.deviceWatts).to.be(false);
            expect(data.averageHeartrate).to.be.a('number');
            expect(data.averageHeartrate).to.be(0.0);
            expect(data.maxHeartrate).to.be.a('number');
            expect(data.maxHeartrate).to.be(0.0);
            expect(data.segment).to.be.a(StravaApiV3.SummarySegment);
                  expect(data.segment.id).to.be.a('number');
              expect(data.segment.id).to.be("0");
              expect(data.segment.name).to.be.a('string');
              expect(data.segment.name).to.be("");
              expect(data.segment.activityType).to.be.a('string');
              expect(data.segment.activityType).to.be("Ride");
              expect(data.segment.distance).to.be.a('number');
              expect(data.segment.distance).to.be(0.0);
              expect(data.segment.averageGrade).to.be.a('number');
              expect(data.segment.averageGrade).to.be(0.0);
              expect(data.segment.maximumGrade).to.be.a('number');
              expect(data.segment.maximumGrade).to.be(0.0);
              expect(data.segment.elevationHigh).to.be.a('number');
              expect(data.segment.elevationHigh).to.be(0.0);
              expect(data.segment.elevationLow).to.be.a('number');
              expect(data.segment.elevationLow).to.be(0.0);
              expect(data.segment.startLatlng).to.be.a(StravaApiV3.LatLng);
                  expect(data.segment.endLatlng).to.be.a(StravaApiV3.LatLng);
                  expect(data.segment.climbCategory).to.be.a('number');
              expect(data.segment.climbCategory).to.be(0);
              expect(data.segment.city).to.be.a('string');
              expect(data.segment.city).to.be("");
              expect(data.segment.state).to.be.a('string');
              expect(data.segment.state).to.be("");
              expect(data.segment.country).to.be.a('string');
              expect(data.segment.country).to.be("");
              expect(data.segment._private).to.be.a('boolean');
              expect(data.segment._private).to.be(false);
              expect(data.segment.athletePrEffort).to.be.a(StravaApiV3.SummarySegmentEffort);
                    expect(data.segment.athletePrEffort.id).to.be.a('number');
                expect(data.segment.athletePrEffort.id).to.be("0");
                expect(data.segment.athletePrEffort.activityId).to.be.a('number');
                expect(data.segment.athletePrEffort.activityId).to.be("0");
                expect(data.segment.athletePrEffort.elapsedTime).to.be.a('number');
                expect(data.segment.athletePrEffort.elapsedTime).to.be(0);
                expect(data.segment.athletePrEffort.startDate).to.be.a(Date);
                expect(data.segment.athletePrEffort.startDate).to.be(new Date());
                expect(data.segment.athletePrEffort.startDateLocal).to.be.a(Date);
                expect(data.segment.athletePrEffort.startDateLocal).to.be(new Date());
                expect(data.segment.athletePrEffort.distance).to.be.a('number');
                expect(data.segment.athletePrEffort.distance).to.be(0.0);
                expect(data.segment.athletePrEffort.isKom).to.be.a('boolean');
                expect(data.segment.athletePrEffort.isKom).to.be(false);
              expect(data.segment.athleteSegmentStats).to.be.a(StravaApiV3.SummaryPRSegmentEffort);
                    expect(data.segment.athleteSegmentStats.prActivityId).to.be.a('number');
                expect(data.segment.athleteSegmentStats.prActivityId).to.be("0");
                expect(data.segment.athleteSegmentStats.prElapsedTime).to.be.a('number');
                expect(data.segment.athleteSegmentStats.prElapsedTime).to.be(0);
                expect(data.segment.athleteSegmentStats.prDate).to.be.a(Date);
                expect(data.segment.athleteSegmentStats.prDate).to.be(new Date());
                expect(data.segment.athleteSegmentStats.effortCount).to.be.a('number');
                expect(data.segment.athleteSegmentStats.effortCount).to.be(0);
            expect(data.komRank).to.be.a('number');
            expect(data.komRank).to.be(0);
            expect(data.prRank).to.be.a('number');
            expect(data.prRank).to.be(0);
            expect(data.hidden).to.be.a('boolean');
            expect(data.hidden).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
