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
        instance = new VoucheryApiReference.NewCustomerRuleApi();
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

    describe('NewCustomerRuleApi', function() {
        describe('createNewCustomerRule', function() {
            it('should call createNewCustomerRule successfully', function(done) {
                //uncomment below and update the code to test createNewCustomerRule
                //instance.createNewCustomerRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('deleteNewCustomerRule', function() {
            it('should call deleteNewCustomerRule successfully', function(done) {
                //uncomment below and update the code to test deleteNewCustomerRule
                //instance.deleteNewCustomerRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('getNewCustomerRule', function() {
            it('should call getNewCustomerRule successfully', function(done) {
                //uncomment below and update the code to test getNewCustomerRule
                //instance.getNewCustomerRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('updateNewCustomerRule', function() {
            it('should call updateNewCustomerRule successfully', function(done) {
                //uncomment below and update the code to test updateNewCustomerRule
                //instance.updateNewCustomerRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
    });

}));