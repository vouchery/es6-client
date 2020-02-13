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
        instance = new VoucheryApiReference.RedemptionLocation();
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

    describe('RedemptionLocation', function() {
        it('should create an instance of RedemptionLocation', function() {
            // uncomment below and update the code to test RedemptionLocation
            //var instane = new VoucheryApiReference.RedemptionLocation();
            //expect(instance).to.be.a(VoucheryApiReference.RedemptionLocation);
        });

        it('should have the property latitude (base name: "latitude")', function() {
            // uncomment below and update the code to test the property latitude
            //var instane = new VoucheryApiReference.RedemptionLocation();
            //expect(instance).to.be();
        });

        it('should have the property longitude (base name: "longitude")', function() {
            // uncomment below and update the code to test the property longitude
            //var instane = new VoucheryApiReference.RedemptionLocation();
            //expect(instance).to.be();
        });

    });

}));