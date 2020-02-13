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
        instance = new VoucheryApiReference.PerCustomerRuleApi();
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

    describe('PerCustomerRuleApi', function() {
        describe('createPerCustomerRule', function() {
            it('should call createPerCustomerRule successfully', function(done) {
                //uncomment below and update the code to test createPerCustomerRule
                //instance.createPerCustomerRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('deletePerCustomerRule', function() {
            it('should call deletePerCustomerRule successfully', function(done) {
                //uncomment below and update the code to test deletePerCustomerRule
                //instance.deletePerCustomerRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('getPerCustomerRule', function() {
            it('should call getPerCustomerRule successfully', function(done) {
                //uncomment below and update the code to test getPerCustomerRule
                //instance.getPerCustomerRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('updatePerCustomerRule', function() {
            it('should call updatePerCustomerRule successfully', function(done) {
                //uncomment below and update the code to test updatePerCustomerRule
                //instance.updatePerCustomerRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
    });

}));