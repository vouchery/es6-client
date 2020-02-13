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
        instance = new VoucheryApiReference.MaxDiscountRule();
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

    describe('MaxDiscountRule', function() {
        it('should create an instance of MaxDiscountRule', function() {
            // uncomment below and update the code to test MaxDiscountRule
            //var instane = new VoucheryApiReference.MaxDiscountRule();
            //expect(instance).to.be.a(VoucheryApiReference.MaxDiscountRule);
        });

        it('should have the property type (base name: "type")', function() {
            // uncomment below and update the code to test the property type
            //var instane = new VoucheryApiReference.MaxDiscountRule();
            //expect(instance).to.be();
        });

        it('should have the property id (base name: "id")', function() {
            // uncomment below and update the code to test the property id
            //var instane = new VoucheryApiReference.MaxDiscountRule();
            //expect(instance).to.be();
        });

        it('should have the property campaignId (base name: "campaign_id")', function() {
            // uncomment below and update the code to test the property campaignId
            //var instane = new VoucheryApiReference.MaxDiscountRule();
            //expect(instance).to.be();
        });

        it('should have the property maxDiscount (base name: "max_discount")', function() {
            // uncomment below and update the code to test the property maxDiscount
            //var instane = new VoucheryApiReference.MaxDiscountRule();
            //expect(instance).to.be();
        });

        it('should have the property createdAt (base name: "created_at")', function() {
            // uncomment below and update the code to test the property createdAt
            //var instane = new VoucheryApiReference.MaxDiscountRule();
            //expect(instance).to.be();
        });

        it('should have the property updatedAt (base name: "updated_at")', function() {
            // uncomment below and update the code to test the property updatedAt
            //var instane = new VoucheryApiReference.MaxDiscountRule();
            //expect(instance).to.be();
        });

    });

}));