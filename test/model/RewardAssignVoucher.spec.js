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
        instance = new VoucheryApiReference.RewardAssignVoucher();
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

    describe('RewardAssignVoucher', function() {
        it('should create an instance of RewardAssignVoucher', function() {
            // uncomment below and update the code to test RewardAssignVoucher
            //var instane = new VoucheryApiReference.RewardAssignVoucher();
            //expect(instance).to.be.a(VoucheryApiReference.RewardAssignVoucher);
        });

        it('should have the property type (base name: "type")', function() {
            // uncomment below and update the code to test the property type
            //var instane = new VoucheryApiReference.RewardAssignVoucher();
            //expect(instance).to.be();
        });

        it('should have the property voucherCampaignId (base name: "voucher_campaign_id")', function() {
            // uncomment below and update the code to test the property voucherCampaignId
            //var instane = new VoucheryApiReference.RewardAssignVoucher();
            //expect(instance).to.be();
        });

    });

}));