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
        instance = new VoucheryApiReference.CategoryRulesApi();
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

    describe('CategoryRulesApi', function() {
        describe('createCategoryRule', function() {
            it('should call createCategoryRule successfully', function(done) {
                //uncomment below and update the code to test createCategoryRule
                //instance.createCategoryRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('deleteCategoryRule', function() {
            it('should call deleteCategoryRule successfully', function(done) {
                //uncomment below and update the code to test deleteCategoryRule
                //instance.deleteCategoryRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('getCategoryRule', function() {
            it('should call getCategoryRule successfully', function(done) {
                //uncomment below and update the code to test getCategoryRule
                //instance.getCategoryRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('getCategoryRules', function() {
            it('should call getCategoryRules successfully', function(done) {
                //uncomment below and update the code to test getCategoryRules
                //instance.getCategoryRules(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
        describe('updateCategoryRule', function() {
            it('should call updateCategoryRule successfully', function(done) {
                //uncomment below and update the code to test updateCategoryRule
                //instance.updateCategoryRule(function(error) {
                //  if (error) throw error;
                //expect().to.be();
                //});
                done();
            });
        });
    });

}));