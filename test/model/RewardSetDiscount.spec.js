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
        instance = new VoucheryApiReference.RewardSetDiscount();
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

    describe('RewardSetDiscount', function() {
        it('should create an instance of RewardSetDiscount', function() {
            // uncomment below and update the code to test RewardSetDiscount
            //var instane = new VoucheryApiReference.RewardSetDiscount();
            //expect(instance).to.be.a(VoucheryApiReference.RewardSetDiscount);
        });

        it('should have the property type (base name: "type")', function() {
            // uncomment below and update the code to test the property type
            //var instane = new VoucheryApiReference.RewardSetDiscount();
            //expect(instance).to.be();
        });

        it('should have the property title (base name: "title")', function() {
            // uncomment below and update the code to test the property title
            //var instane = new VoucheryApiReference.RewardSetDiscount();
            //expect(instance).to.be();
        });

        it('should have the property description (base name: "description")', function() {
            // uncomment below and update the code to test the property description
            //var instane = new VoucheryApiReference.RewardSetDiscount();
            //expect(instance).to.be();
        });

        it('should have the property discountType (base name: "discount_type")', function() {
            // uncomment below and update the code to test the property discountType
            //var instane = new VoucheryApiReference.RewardSetDiscount();
            //expect(instance).to.be();
        });

        it('should have the property discountValue (base name: "discount_value")', function() {
            // uncomment below and update the code to test the property discountValue
            //var instane = new VoucheryApiReference.RewardSetDiscount();
            //expect(instance).to.be();
        });

    });

}));