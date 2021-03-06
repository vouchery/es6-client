/**
 * Vouchery API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
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
        define(['expect.js', '../../src/index'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        factory(require('expect.js'), require('../../src/index'));
    } else {
        // Browser globals (root is window)
        factory(root.expect, root.VoucheryApiReference);
    }
}(this, function(expect, VoucheryApiReference) {
    'use strict';

    var instance;

    beforeEach(function() {
        instance = new VoucheryApiReference.TimeframeRulesApi();
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

    describe('TimeframeRulesApi', function() {
        describe('createTimeframeRule', function() {
            it('should call createTimeframeRule successfully', function(done) {
                //uncomment below and update the code to test createTimeframeRule
                //instance.createTimeframeRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('deleteTimeframeRule', function() {
            it('should call deleteTimeframeRule successfully', function(done) {
                //uncomment below and update the code to test deleteTimeframeRule
                //instance.deleteTimeframeRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('getTimeframeRule', function() {
            it('should call getTimeframeRule successfully', function(done) {
                //uncomment below and update the code to test getTimeframeRule
                //instance.getTimeframeRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('getTimeframeRules', function() {
            it('should call getTimeframeRules successfully', function(done) {
                //uncomment below and update the code to test getTimeframeRules
                //instance.getTimeframeRules(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('updateTimeframeRule', function() {
            it('should call updateTimeframeRule successfully', function(done) {
                //uncomment below and update the code to test updateTimeframeRule
                //instance.updateTimeframeRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
    });

}));