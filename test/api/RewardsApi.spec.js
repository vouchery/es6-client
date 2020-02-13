/**
 * Vouchery API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0
 * Contact: hello@vouchery.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['expect.js', process.cwd() + '/src/index'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        factory(require('expect.js'), require(process.cwd() + '/src/index'));
    } else {
        // Browser globals (root is window)
        factory(root.expect, root.VoucheryApiReference);
    }
}(this, function(expect, VoucheryApiReference) {
    'use strict';

    var instance;

    beforeEach(function() {
        instance = new VoucheryApiReference.RewardsApi();
    });

    var getProperty = function(object, getter, property) {
        // Use getter method if present; otherwise, get the property directly.
        if (typeof object[getter] === 'function')
            return object[getter]();
        else
            return object[property];
    }

    var setProperty = function(object, setter, property, value) {
        // Use setter method if present; otherwise, set the property directly.
        if (typeof object[setter] === 'function')
            object[setter](value);
        else
            object[property] = value;
    }

    describe('RewardsApi', function() {
        describe('createReward', function() {
            it('should call createReward successfully', function(done) {
                //uncomment below and update the code to test createReward
                //instance.createReward(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('deleteReward', function() {
            it('should call deleteReward successfully', function(done) {
                //uncomment below and update the code to test deleteReward
                //instance.deleteReward(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('getReward', function() {
            it('should call getReward successfully', function(done) {
                //uncomment below and update the code to test getReward
                //instance.getReward(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('getRewards', function() {
            it('should call getRewards successfully', function(done) {
                //uncomment below and update the code to test getRewards
                //instance.getRewards(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('updateReward', function() {
            it('should call updateReward successfully', function(done) {
                //uncomment below and update the code to test updateReward
                //instance.updateReward(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
    });

}));